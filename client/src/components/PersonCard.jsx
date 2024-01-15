import React from "react";
import Avatar from "./Avatar";

const PersonCard = ({ id, email, onClick, selected, online }) => {
	var avatarLetter = "";
	try {
		avatarLetter = email.charAt(0).toUpperCase();
	} catch {
		avatarLetter = "M";
		console.log("error at person card");
	}

	const containerStyle = {
		flexDirection: "column",
		minHeight: "100px",
		color: "gray",
		fontWeight: '600',
		padding: "4px",
		flex: "0 0 200px",
		scrollSnapAlign: "start",
	};

	return (
		<div
			key={id}
			onClick={() => onClick(id)}
			className={
				"border-b bg-white border-gray-100  justify-center flex items-center gap-2 cursor-pointer text-lg " +
				(selected ? "bg-blue-50" : "")
			}
			style={containerStyle}
		>
			{selected && (
				<div className="w-1 bg-blue-500 h-12 rounded-r-md"></div>
			)}

			{/* {<div className="w-12 h-12 bg-white rounded-full mr-4 flex items-center justify-center text-black">
				<span className="text-gray-800 text-xl font-semibold">
					{avatarLetter}
				</span>
			</div>} */}

			<div className="flex gap-2 py-2 pl-4 items-center">
				<Avatar
					online={online}
					email={email}
					userId={id}
					className="w-10 h-10"
				/>
				<span>{email}</span>
			</div>
			
		</div>
	);
};

export default PersonCard;
