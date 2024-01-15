import axios from "axios";
import { uniqBy } from "lodash";
import { useContext, useEffect, useRef, useState } from "react";
import CarouselComp from "../components/Carousel";
import NavBar from "../components/NavBar";
import { UserContext } from "../components/UserContext";

const props = {
	className: "my-svg",
	// other props...
};

export default function ChatChanged() {
	const [ws, setWs] = useState(null); //this is to set the state of the WebSocket object
	const [offlinePeople, setOfflinePeople] = useState({}); //this is to set the state of offline people
	const [onlinePeople, setOnlinePeople] = useState({}); //this is to set the state of online people
	const { selectedUserId, setSelectedUserId } = useContext(UserContext); //this is to set the state of selected user
	const { id, email, setId, setEmail } = useContext(UserContext); //this is to get the username and id from the UserContext
	//  const { email, setEmail } = useContext(UserContext);
	const [messages, setMessages] = useState([]); //this is to set the state of messages
	const [newMessage, setNewMessage] = useState(""); //this is to set the state of new message
	const divUnderMessages = useRef(); //this is to scroll to the bottom of the messages
	const [allUsersEmail, setAllUsersEmail] = useState([]);

	useEffect(() => {
		connectToWs();
	}, []);

	function connectToWs() {
		const ws = new WebSocket("ws://localhost:4000"); //this is to create a new WebSocket object
		setWs(ws);
		ws.addEventListener("message", handleMessage); //this is to add an event listener to the WebSocket object
		ws.addEventListener("close", () => {
			//this is to add an event listener to the WebSocket object
			setTimeout(() => {
				console.log("reconnecting..."); //this is to print reconnecting
				connectToWs(); //this is to reconnect to the server
			}, 1000);
		});
		// the above event listener line adds another event listener to the WebSocket object.
		//This event listener listens for 'close' events, which are fired
		// when the WebSocket connection is closed.
	}

	function showOnlinePeople(peopleArray) {
		const people = {}; //this is an object
		peopleArray.forEach(({ userId, email }) => {
			//this is a destructuring assignment
			people[userId] = email; //this is to add the username to the people object
		});
		setOnlinePeople(people); //this is to set the state of online people
	}

	function handleMessage(ev) {
		const messageData = JSON.parse(ev.data); //this is to convert the data to a string
		console.log({ ev, messageData }); //this is to print the message data

		//no idea how we get online
		if ("online" in messageData) {
			//this is to check if the message data has the online key
			showOnlinePeople(messageData.online); //this is to show the online people
		} else if ("text" in messageData || "file" in messageData) {
			//this is to check if the message data has the text or file key
			setMessages((prev) => [...prev, { ...messageData }]); //this is to set the state of messages
		}
	}

	function logout() {
		axios.post("/logout").then(() => {
			setWs(null);
			setId(null);
			setEmail(null);
		});
	}

	function sendMessage(ev, file = null) {
		if (ev) ev.preventDefault();
		ws.send(
			JSON.stringify({
				recipient: selectedUserId,
				text: newMessage,
				file,
			})
		); //this is to send the message to the server
		if (file) {
			axios.get("/messages/" + selectedUserId).then((res) => {
				setMessages(res.data);
			});
		} else {
			setNewMessage(""); //this is to clear the input field
			setMessages((prev) => [
				...prev,
				{
					text: newMessage,
					sender: id,
					recipient: selectedUserId,
					_id: Date.now(),
				},
			]); //this is to show the message on the screen

			console.log("check messages.text", newMessage.text);
		}
	}

	// function selectContact(userId) {
	//     ws.send(JSON.stringify({
	//         select: userId,
	//     }));
	// }

	function sendFile(ev) {
		const reader = new FileReader();
		reader.readAsDataURL(ev.target.files[0]);
		reader.onload = () => {
			const base64FileData = reader.result.split(",")[1];
			sendMessage(null, {
				name: ev.target.files[0].name,
				data: base64FileData,
			});
		};
	}

	// const allUsersEmail = [];

	useEffect(() => {
		axios.get("/people").then((res) => {
			const users = res.data; // Access the data property
			var i = 0;

			if (Array.isArray(res)) {
				users.forEach((data) => {
					allUsersEmail[i] = data.email;
					i++;
				});
			} else if (typeof res === "object") {
				// If res is an object, get an array of its values
				const values = Object.values(res);

				users.forEach((data) => {
					allUsersEmail[i] = data.email;
					i++;
				});
			} else {
				console.error(
					"Invalid data structure. Cannot extract emails."
				);
			}
			// delete allUsersEmail[]
			setAllUsersEmail(allUsersEmail);
			console.log("users for ChatChanged: ", allUsersEmail);

			const offlinePeopleArr = res.data //this is an array of people
				.filter((p) => p._id !== id) //this is to filter out the current user
				.filter((p) => !Object.keys(onlinePeople).includes(p._id)); //this is to filter out the people who are already online
			const offlinePeople = {}; //this is an object
			offlinePeopleArr.forEach((p) => {
				//this is a destructuring assignment
				offlinePeople[p._id] = p; //offlinePeoplearr is just an array but offlinePeople is an object with key as _id
			});
			setOfflinePeople(offlinePeople); //this is to set the state of offline people
		});
	}, [onlinePeople]); //this funciton is run everytime online people changes. and online people changes everytime i refresh the page too.

	useEffect(() => {
		console.log("check messages.text at messages", messages.text);
		const div = divUnderMessages.current; //this is to scroll to the bottom of the messages
		if (div) {
			div.scrollIntoView({ behavior: "smooth", block: "end" }); //this is to scroll to the bottom of the messages
		}
	}, [messages]);

	useEffect(() => {
		try {
			console.log(
				"check messages.text at selectedUserId",
				messagesWithoutDupes[0]
			);
		} catch (error) {
			console.log("at 1190");
		}
		//this is the effect that will run when the selected user changes
		if (selectedUserId) {
			//helps to print the previous messages when the user is selected
			axios.get("/messages/" + selectedUserId).then((res) => {
				setMessages(res.data);
			});
		}
	}, [selectedUserId]);

	const onlinePeopleExclOurUser = { ...onlinePeople };
	delete onlinePeopleExclOurUser[id];

	//theres a lodash library function that would allow me to print the text only once. idk why they are getting printed twice.
	const messagesWithoutDupes = uniqBy(messages, "_id");

	return (
		<div className="flex flex-col h-screen">
			<div>
				<NavBar />

				<header className="bg-white shadow">
					<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
						<h1 className="text-3xl font-bold tracking-tight text-gray-800">
							Messenger
						</h1>
					</div>
				</header>

				<div className="">
					<CarouselComp
						onlinePeopleExclOurUser={onlinePeopleExclOurUser}
						offlinePeople={offlinePeople}
						selectedUserId={selectedUserId}
					/>
				</div>
			</div>

			<div className="flex flex-col h-full bg-gray-800 p-2">
				<div className="flex-grow ">
					{!selectedUserId && (
						<div className="flex h-full flex-grow items-center justify-center">
							<div className="text-3xl text-gray-400 font-mono uppercase">
								&uarr; SELECT A PERSON FROM ABOVE
							</div>
						</div>
					)}
					{!!selectedUserId && (
						<div className="relative h-full ">
							<div className="overflow-y-scroll absolute top-0 left-0 right-0 bottom-2">
								{messagesWithoutDupes.map((message) => (
									//in this function i can check whether if the id
									// is my id, if yes, the message was sent by me, if no,
									// the message was sent by the other person
									<div
										key={message._id}
										className={
											message.sender === id
												? "text-right"
												: "text-left"
										}
									>
										<div
											className={
												"text-left inline-block p-2 my-2 rounded-2xl text-lg " +
												(message.sender ===
												id
													? "bg-gray-500 text-white"
													: "bg-indigo-500 text-white")
											}
										>
											{message.text}

											{message.file && (
												<div>
													<a
														target="_blank"
														className="underline"
														href={
															axios
																.defaults
																.baseURL +
															"/uploads/" +
															message.file
														}
													>
														{
															message.file
														}
													</a>
												</div>
											)}
										</div>
									</div>
								))}
								<div ref={divUnderMessages}></div>
							</div>
						</div>
					)}
				</div>
				{!!selectedUserId && (
					<div className="flex justify-center items-center">
					<form
						className="flex gap-2 mx-auto w-screen max-w-7xl px-4 py-6 sm:px-6 lg:px-8"
						onSubmit={sendMessage}
					>
						<input
							type="text"
							value={newMessage}
							onChange={(ev) =>
								setNewMessage(ev.target.value)
							}
							placeholder="Type your message here"
							className="bg-white flex-grow border rounded-sm p-2"
						/>
						<label className="bg-gray-700 p-2 cursor-pointer text-white rounded-sm">
							<input
								type="file"
								className="hidden"
								onChange={sendFile}
							/>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="#ffffff"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
								/>
							</svg>
						</label>
						<button
							type="submit"
							className="bg-blue-500 p-2 text-white rounded-sm"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
								/>
							</svg>
						</button>
						</form>
						</div>
				)}
			</div>
		</div>
	);
}