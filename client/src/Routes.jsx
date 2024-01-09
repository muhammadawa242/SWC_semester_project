import { useContext } from "react";
import { UserContext } from "./UserContext";
import RegisterAndLoginForm from "./RegisterAndLoginForm";
import Chat from "./Chat";

export default function Routes() {
    const {firstName, id} = useContext(UserContext);

    if (firstName) {
        return <Chat />;
    }
    return(
        <RegisterAndLoginForm />
    );
} 
