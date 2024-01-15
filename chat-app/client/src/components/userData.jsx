// not necessary right now

// import axios from "axios";
// import { useEffect, useState } from "react";

// const userData = () => {
// 	const [data, setData] = useState(null);
// 	const [email, setEmail] = useState(null);

// 	useEffect(() => {
// 		axios.get("http://localhost:6001/messages/data")
// 			.then((response) => {
// 				setData(response.data);
// 				setEmail(response.data.email);

// 				// Send email data to the server
// 				axios.post("http://localhost:4000/saveUserData", {
// 					email: response.data.email,
// 				})
// 					.then((response) => {
// 						console.log(
// 							"Email data sent to the server:",
// 							response.data
// 						);
// 					})
// 					.catch((error) => {
// 						console.error(
// 							"Error sending email data to the server:",
// 							error
// 						);
// 					});
// 			})
// 			.catch((error) => {
// 				console.error("Error fetching data:", error);
// 			});
// 	}, []);

// 	// Render data in your component...
// };

// export default userData;
