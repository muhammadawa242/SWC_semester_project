import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import VolumeMuteIcon from "@material-ui/icons/VolumeMute";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./VideoPlayer.css";
import BackspaceIcon from "@material-ui/icons/Backspace";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const StoryPlayer = ({
  setSelectedStoryIndex,
  selectedStoryIndex,
  videosArray,
}) => {
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [muteVideo, setMuteVideo] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const pauseOrPlayVideo = () => {
    setVideoPlaying((prevState) => {
      return !prevState;
    });
  };

  const handleMuteButtonClicked = () => {
    setMuteVideo((prevState) => !prevState);
  };

  const handleLikeButtonClicked = () => {
    setIsLiked((prevState) => !prevState);
  };

  return (
    <div className="testing-player-container">
      <div
        onClick={() => {
          pauseOrPlayVideo();
        }}
        className="player-container"
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSelectedStoryIndex(-1);
          }}
          className="close-button"
        >
          {<BackspaceIcon style={{ fontSize: 20, color: "blue" }} />}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (selectedStoryIndex == videosArray.length - 1) {
              setSelectedStoryIndex(-1);
            } else {
              setSelectedStoryIndex(selectedStoryIndex + 1);
            }
          }}
          className="right-arrow-button"
        >
          {<ArrowForwardIcon style={{ fontSize: 20, color: "blue" }} />}
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            if (selectedStoryIndex == 0) {
              setSelectedStoryIndex(-1);
            } else {
              setSelectedStoryIndex(selectedStoryIndex - 1);
            }
          }}
          className="left-arrow-button"
        >
          {<ArrowBackIcon style={{ fontSize: 20, color: "blue" }} />}
        </button>
        {/* <button onClick={() => setSelectedStory(null)} className="close-button">
          X
        </button> */}
        <ReactPlayer
          url={videosArray[selectedStoryIndex]}
          playing={videoPlaying}
          muted={muteVideo}
          loop={true}
          controls={false}
          onProgress={(state) => {
            setProgress(state.playedSeconds / state.loadedSeconds);
          }}
          width="100%"
          height="100%"
          progressInterval={150}
        />
        <div className="player-controls">
          <div className="inner-container">
            <div
              onClick={(e) => {
                e.stopPropagation();
                handleMuteButtonClicked();
              }}
            >
              {muteVideo ? (
                <VolumeMuteIcon fontSize="large" className="control-icon" />
              ) : (
                <VolumeUpIcon fontSize="large" className="control-icon" />
              )}
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                handleLikeButtonClicked();
              }}
            >
              {isLiked ? (
                <FavoriteIcon fontSize="large" className="heart-icon" />
              ) : (
                <FavoriteBorderIcon fontSize="large" className="control-icon" />
              )}
              <p className="text-white">348</p>
            </div>
          </div>

          <div className="progress-container">
            <div
              className="progress-bar"
              style={{
                width: `${progress * 100}%`,
                backgroundColor: "white",
                padding: "2px 0px",
                borderRadius: "2px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPlayer;
