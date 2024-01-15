import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
	const [email, setEmail] = useState("");
	const [id, setId] = useState("");
	const [selectedUserId, setSelectedUserId] = useState(null);

	useEffect(() => {
		console.log("enter user context", id);

		//check if data is sent
		axios.get("/get-latest-data").then((response) => {
			console.log("get latest data coming in react");

			setId(response.data._id);
			console.log(response.data._id);

			setEmail(response.data.email);
			console.log(response.data.email);
		});
	}, []);

	return (
		<UserContext.Provider
			value={{
				email,
				setEmail,
				id,
				setId,
				selectedUserId,
				setSelectedUserId,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
