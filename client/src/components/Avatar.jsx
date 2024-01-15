export default function Avatar({ userId, email, online }) {
	const colors = [
		"bg-indigo-200",
		"bg-pink-200",
		"bg-purple-200",
		"bg-red-200",
		"bg-green-200",
		"bg-blue-200",
		"bg-yellow-200",
	];
	const userIdBase10 = parseInt(userId, 16);
	const colorIndex = userIdBase10 % colors.length;
	const color = colors[colorIndex];
	// const emailColor = "text-" + color.substring(color.indexOf("-") + 1);

	var avatarLetter = "";
	try {
		avatarLetter = email.charAt(0).toUpperCase();
	} catch {
		avatarLetter = "M";
		console.log("error at person card");
	}

	// console.log(emailColor);

	return (

		<div
			className={
				"w-12 h-12 p-8 relative rounded-full flex text-center items-center text-gray-800 justify-center " +
				color
			}
		>
			{avatarLetter}
			{online && (
				<div className="absolute w-4 h-4 p-2 bg-green-500 rounded-full bottom-0 right-0 border border-white"></div>
			)}
			{!online && (
				<div className="absolute w-4 h-4 p-2 bg-red-500 rounded-full bottom-0 right-0 border border-white"></div>
			)}
		</div>
	);
}