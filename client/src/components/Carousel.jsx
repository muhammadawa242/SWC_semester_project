import React, { useEffect, useState, useContext, useRef } from "react";
import PersonCard from "./PersonCard";
import { UserContext } from "./UserContext";



const CarouselComp = ({
	onlinePeopleExclOurUser,
	offlinePeople,
}) => {
	const { selectedUserId, setSelectedUserId } = useContext(UserContext);
	const [scrollPosition, setScrollPosition] = useState(0);
	const containerRef = useRef(null);

	const handleScroll = (direction) => {
		const container = containerRef.current;
		const itemWidth = 100; // Adjust this based on your PersonCard width

		if (container) {
			const newIndex =
				direction === "left"
					? scrollPosition / itemWidth - 1
					: scrollPosition / itemWidth + 1;

			setScrollPosition(newIndex * itemWidth);
			container.scrollLeft = newIndex * itemWidth;
		}
	};

	const scrollDivStyle = {
		backgroundColor: "black",
	};

	useEffect(() => {
		setSelectedUserId(selectedUserId);
		const container = containerRef.current;
		const handleResize = () => {
			setScrollPosition(container.scrollLeft);
		};

		if (container) {
			container.addEventListener("scroll", handleResize);
			return () =>
				container.removeEventListener("scroll", handleResize);
		}
	}, [selectedUserId]);

	return (
		<div className="relative">
			<div
				// ref={containerRef}
				className="flex overflow-x-auto overflow-hidden"
				style={{
					scrollBehavior: "smooth",
					scrollSnapType: "x mandatory",
				}}
			>
				{/*allUsers.map((person, index) => (
					<PersonCard key={index} email={person} />
				))*/}
				{Object.keys(onlinePeopleExclOurUser).map(
					(userId) =>
						onlinePeopleExclOurUser[userId] && (
							<PersonCard
								key={userId}
								id={userId}
								online={true}
								email={onlinePeopleExclOurUser[userId]}
								onClick={() =>
									setSelectedUserId(userId)
								}
								selected={userId === selectedUserId}
							/>
						)
				)}

				{Object.keys(offlinePeople).map(
					(userId) =>
						offlinePeople[userId].email && (
							<PersonCard
								key={userId}
								id={userId}
								online={false}
								email={
									offlinePeople[userId].email //check if changing username to email is legit
								}
								onClick={() =>
									setSelectedUserId(userId)
								}
								selected={userId === selectedUserId}
							/>
						)
				)}
			</div>
		</div>
	);
};

export default CarouselComp;
