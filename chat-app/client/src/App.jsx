import axios from "axios";
import { UserContextProvider } from "./components/UserContext";
import Routes from "./routes/Routes";

function App() {
	axios.defaults.baseURL = "http://localhost:4000";
	
	//see if this is necessary anymore
	// axios.defaults.withCredentials = true;
	return (
		<UserContextProvider>
			<Routes />
		</UserContextProvider>
	);
}

export default App;
//Automatic transforms for JSON data:
//Promise-based
//Intercept request and response
