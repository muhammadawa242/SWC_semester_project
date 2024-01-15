import { useContext } from "react";
import { UserContext } from "../components/UserContext";
import ChatChanged from "../scenes/ChatChanged";
import Test from "../scenes/Test";

export default function Routes() {
	const { email } = useContext(UserContext);

	if (email) {
		return <ChatChanged />;
	} else {
		return <Test />;
	}
}
