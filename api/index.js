const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors"); //using cors because my client and server are on different ports
// const bcrypt = require("bcryptjs");
const User = require("./models/User");
const Message = require("./models/Message");
const ws = require("ws");
const fs = require("fs");
// const UserModel = require("./models/User");
dotenv.config();
jwtSecret = process.env.JWT_SECRET;
// const bcryptSalt = bcrypt.genSaltSync(10); // 10 is the number of rounds

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log("MongoDB connected..."))
	.catch((err) => console.error(err));

const app = express();
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(
	cors({
		//linking server and client
		credentials: true,
		origin: process.env.CLIENT_URL,
	})
);
const server = app.listen(4000);
const wss = new ws.WebSocketServer({ server });

//working

let latestUserData = null;

app.post("/user/data", (req, res) => {
	console.log("POST /user/data healthy");
	try {
		// Assuming you are expecting JSON data in the request body
		const receivedData = req.body;

		if (receivedData) {
			//data coming ok
			console.log(receivedData._id);
			latestUserData = receivedData;

			// Send a response back with the received data
			res.json({
				status: "Data received successfully",
				receivedData,
			});
		} else {
			res.status(400).json({
				error: "Invalid data in the request",
			});
		}
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

app.get("/get-latest-data",async (req, res) => {
	console.log("/get-latest-data healthy");
	// Long-polling mechanism
	const checkForUpdates = async () => {
		if (latestUserData) {
			console.log("get-latest-data data going");
						
			res.json(latestUserData);

		} else {
			latestUserData = await User.findOne({
				email: "msadiqraza18@gmail.com",
			});
			console.log(latestUserData.email);
			setTimeout(checkForUpdates, 1000); // Poll every second
		}
	};

	checkForUpdates();
});

//check how recepient id gets in params, also is it sender or recipient id
app.get("/messages/:userId", async (req, res) => {
	console.log("/messages/:userId healthy");
	// res.json(req.params);
	const { userId } = req.params;

	const ourUserId = latestUserData._id;
	const messages = await Message.find({
		sender: { $in: [userId, ourUserId] },
		recipient: { $in: [userId, ourUserId] }, //to fetch the history of messages between two users
	}).sort({ createdAt: 1 }); //sorts the messages in the order of creation

	console.log(messages);
	res.json(messages);
});

app.get("/test", (req, res) => {
	res.json({ latestUserData });
});

app.get("/people", async (req, res) => {
	try {
		const users = await User.find({}, { _id: 1, email: 1 });
		res.json(users);
	} catch (error) {
		console.error("Error fetching users:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

// see if this is needed later
app.post("/logout", (req, res) => {
	res.cookie("token", "", {
		expires: new Date(0),
		sameSite: "none",
		secure: true,
	}).json("ok");
});

wss.on("connection", (connection, req) => {
	//web socket is a protocol desgned for bidrectional web communication in real time
	// reading username and if from the cookie for the connection

	function notifyAboutOnlinePeople() {
		[...wss.clients].forEach((client) => {
			client.send(
				JSON.stringify({
					//confirm structure from frontend
					online: [...wss.clients].map((c) => ({
						userId: c.userId,
						username: c.email,
					})),
				})
			);
		});
	}

	connection.isAlive = true;
	connection.timer = setInterval(() => {
		connection.ping();
		connection.deathTimer = setTimeout(() => {
			connection.isAlive = false;
			clearInterval(connection.timer);
			connection.terminate();
			notifyAboutOnlinePeople();
		}, 1000);
	}, 5000);

	connection.on("pong", () => {
		clearTimeout(connection.deathTimer);
	});

	try {
		connection.userId = latestUserData._id;
		connection.email = latestUserData.email;
	} catch(error) {
		console.log('error at connection');
	}

	connection.on("message", async (message) => {
		const messageData = JSON.parse(message.toString());
		//see if recepient is coming ok
		const { recipient, text, file } = messageData; // the message is an object. we have to convert it to a string.\
		let filename = null;
		if (file) {
			const parts = file.name.split("."); //daddy.png
			const ext = parts[parts.length - 1];
			filename = Date.now() + "." + ext;
			const path = __dirname + "/uploads/" + filename;
			const bufferData = Buffer.from(file.data, "base64");
			fs.writeFile(path, bufferData, { encoding: "binary" }, (err) => {
				if (err) {
					console.error("Error writing file", err);
				} else {
					console.log("file saved: " + path);
				}
			});
		}
		if (recipient && (text || file)) {
			const messageDoc = await Message.create({
				sender: connection.userId,
				recipient,
				text,
				file: file ? filename : null,
			});

			[...wss.clients]
				.filter((c) => c.userId === recipient) //filtering the clients to find the recipient instead of USING FIND METHOD keeping in mind the multiple connections
				.forEach((c) =>
					c.send(
						JSON.stringify({
							text,
							sender: connection.userId,
							recipient,
							file: file ? filename : null,
							_id: messageDoc._id,
						})
					)
				);
		} //id's in mongoose databses are stored as _id
	});

	// notify everyone about online people (when someone connects)
	notifyAboutOnlinePeople(); //when i am developing this app it shows that there are two connections this is because when create-react-app is in dev mode, it renders everything twice
});
