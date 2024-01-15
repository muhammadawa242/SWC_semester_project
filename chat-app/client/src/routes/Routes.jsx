import { useContext } from "react";
import { UserContext } from "../components/UserContext";
import Chat from "../scenes/Chat";
import ErrorPage from "../scenes/ErrorPage";
import Test from "../scenes/Test";

export default function Routes() {
	const { email } = useContext(UserContext);


	if (email) {
		return <Chat/>
	} else {
		<ErrorPage />;
	}
}
