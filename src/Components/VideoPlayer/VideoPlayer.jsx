import React, { useRef, useState } from "react";
import CountUp from "react-countup";
import "./VideoPlayer.scss";
import bg_Image from "../../Assets/Images/img_infra.jpg";
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
      <div className={`video-wrapper ${isPlaying ? "playing" : ""}`}>
        <video
          ref={videoRef}
          className="video"
          onEnded={() => setIsPlaying(false)}
          poster={bg_Image} // Added poster to show the thumbnail before play
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="play-pause-button" onClick={handlePlayPauseClick}>
          {isPlaying ? <PauseCircleOutlineIcon /> : <PlayCircleOutlineIcon />}
        </div>
        {!isPlaying && (
          <div className="overlay-text">
            Just <span className="highlight">Everything</span> You Need To Know
          </div>
        )}
      </div>

      {/* Info Section */}
      {!isPlaying && (
        <div className="info-section">
          <div className="info-card">
            <CountUp end={2016} duration={2} />
            <p>ESTABLISHED</p>
          </div>
          <div className="info-card">
            <CountUp end={56} duration={2} suffix="+" />
            <p>HECTARE GREEN CAMPUS</p>
          </div>
          <div className="info-card">
            <CountUp end={330} duration={2} suffix="+" />
            <p>STUDENTS</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
