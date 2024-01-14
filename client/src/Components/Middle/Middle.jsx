import React, { useEffect } from "react";
import { useState } from "react";
import "./Middle.css";
import Picture from "../../assets/profile-8.jpg";
import PostShare from "../PostShare/PostShare";
import PostCard from "../PostCard/PostCard";
import StoryPlayer from "../VideoPlayer/StoryPlayer";

function Middle() {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(-1);
  const [videosArray, setVideosArray] = useState(null);

  useEffect(() => {
    setVideosArray([
      "../../assets/bunny.mp4",
      "https://www.youtube.com/watch?v=ct66klYyTNk",
      "../../assets/bunny.mp4",
    ]);
  }, []);

  return (
    <div className="middle">
      {/* Stories */}
      <div className="stories">
        <div
          onClick={(e) => {
            console.log("something happened");
            e.preventDefault();
            setSelectedStoryIndex(0);
          }}
          className="story"
        >
          <div className="profile-photo">
            <img src={Picture} />
          </div>
          <p className="name">Your Story</p>
        </div>

        <div
          onClick={(e) => {
            e.preventDefault();
            console.log("story clicked.");
            setSelectedStoryIndex(1);
          }}
          className="story"
        >
          <div className="profile-photo">
            <img src={Picture} />
          </div>
          <p className="name">Your Story</p>
        </div>

        <div
          onClick={(e) => {
            e.preventDefault();
            console.log("story clicked.");
            setSelectedStoryIndex(2);
          }}
          className="story"
        >
          <div className="profile-photo">
            <img src={Picture} />
          </div>
          <p className="name">Your Story</p>
        </div>

        <div className="story">
          <div className="profile-photo">
            <img src={Picture} />
          </div>
          <p className="name">Your Story</p>
        </div>

        <div className="story">
          <div className="profile-photo">
            <img src={Picture} />
          </div>
          <p className="name">Your Story</p>
        </div>

        <div className="story">
          <div className="profile-photo">
            <img src={Picture} />
          </div>
          <p className="name">Your Story</p>
        </div>
      </div>
      {selectedStoryIndex >= 0 && (
        <StoryPlayer
          selectedStoryIndex={selectedStoryIndex}
          setSelectedStoryIndex={setSelectedStoryIndex}
          videosArray={videosArray}
        />
      )}
      {/* POst Share Component */}

      <PostShare />
      <div className="feeds">
        {/* PostCard */}
        <PostCard />
      </div>
    </div>
  );
}

export default Middle;
