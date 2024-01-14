import React, { useEffect } from "react";
import { useState } from "react";
import "./Middle.css";
import PostShare from "../PostShare/PostShare";
import PostCard from "../PostCard/PostCard";
import StoryPlayer from "../VideoPlayer/StoryPlayer";
import { useSelector } from "react-redux";
import { getStories } from "../../apis";

function Middle() {
  const token = useSelector((state) => state.token);
  const {picturePath} = useSelector((state) => state.user);
  const aws = useSelector((state) => state.awsPath);
  const stories = useSelector((state) => state.stories);
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(-1);
  const [videosArray, setVideosArray] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Stories = await getStories(token);
        
        const videosArray = Stories.map((story) => {
          return aws+story.videoPath;
        });

        setVideosArray(videosArray);
      } catch (error) {
        console.error("stories not loaded: " + error);
      }
    };

    setVideosArray(fetchData());
  }, [stories]);

  return (
    <div className="middle">
      {/* Stories */}
      <div className="stories">
        {stories.map((story, index) => {
          return (
            <div
              onClick={(e) => {
                console.log("something happened");
                e.preventDefault();
                setSelectedStoryIndex(index);
              }}
              className="story"
            >
              <div className="profile-photo">
                <img src={aws+story.userPicturePath} />
              </div>
              <p className="name">Story {index}</p>
            </div>
          );
        })}
        {/* <div
          onClick={(e) => {
            console.log("something happened");
            e.preventDefault();
            setSelectedStoryIndex(0);
          }}
          className="story"
        >
          <div className="profile-photo">
            <img src={aws+picturePath} />
          </div>
          <p className="name">Your Story</p>
        </div> */}

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
