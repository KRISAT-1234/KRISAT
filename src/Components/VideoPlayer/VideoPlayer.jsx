import React from 'react';
import CountUp from 'react-countup';
import './VideoPlayer.scss'; // Import your SCSS file

const VideoPlayer = ({ videoSrc }) => {
  return (
    <div className="video-player-container">
      <div className="video-section">
        <video className="video" controls>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay-text">
          <h2>
            Just <span className="highlight">Everything</span> You Need To Know
          </h2>
        </div>
      </div>

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
