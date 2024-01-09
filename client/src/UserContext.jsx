import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
	const [username, setFirstName] = useState(null);
	const [id, setId] = useState(null);
	useEffect(() => {
		axios.get("/profile", {
			withCredentials: true,
		}).then((response) => {
			setId(response.data.userId);
			setFirstName(response.data.firstName);
		});
	}, []);
	return (
		<UserContext.Provider value={{ username, setFirstName, id, setId }}>
			{children}
		</UserContext.Provider>
	);
}
