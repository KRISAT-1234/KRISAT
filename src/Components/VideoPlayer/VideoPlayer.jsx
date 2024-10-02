import React, { useRef, useState } from "react";
import CountUp from "react-countup";
import "./VideoPlayer.scss";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
const VideoPlayer = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPauseClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="video-player-container">
      {/* Video Section */}
      <div
        className={`video-wrapper ${isPlaying ? "playing" : ""}`}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)`,
        }}
      >
        <video
          ref={videoRef}
          className="video"
          onEnded={() => setIsPlaying(false)}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="play-pause-button" onClick={handlePlayPauseClick}>
          {isPlaying ? <PauseCircleOutlineIcon /> : <PlayCircleOutlineIcon />}
        </div>
        <div className="overlay-text">
          Just <span className="highlight">Everything</span> You Need To Know
        </div>
      </div>

      {/* Info Section */}
      <div className="info-section">
        <div className="info-card">
          <CountUp end={1985} duration={2} />
          <p>ESTABLISHED</p>
        </div>
        <div className="info-card">
          <CountUp end={256} duration={2} suffix="+" />
          <p>ACRES GREEN CAMPUS</p>
        </div>
        <div className="info-card">
          <CountUp end={25000} duration={2} suffix="+" />
          <p>STUDENTS</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
