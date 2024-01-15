import { useSelector } from "react-redux";
import axios from "axios";
import state from "../../state";

const SendUserData = () => {
	const currentUser = useSelector(state => state.user);

	console.log(currentUser);

	axios.post("http://localhost:4000/user/data", currentUser)
		.then((response) => {
			console.log("Server response:", response.data);
			const receivedDataFromServer = response.data.receivedData;
			console.log(
				"Received data from server:",
				receivedDataFromServer
			);
		})
		.catch((error) => {
			console.error("Error:", error);
		});

	return ;
};

export default SendUserData;