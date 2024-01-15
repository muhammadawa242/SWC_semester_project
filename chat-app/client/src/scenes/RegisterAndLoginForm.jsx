import React from "react";
import userData from "../components/userData.jsx";

function RegisterAndLoginForm() {
	const user = userData.json();

	return (
		<div>
			{jsonData ? (
				<pre>{JSON.stringify(user, null, 2)}</pre>
			) : (
				<p>Loading JSON data...</p>
			)}
		</div>
	);
}
