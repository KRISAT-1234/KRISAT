import React from "react";
import "./Home.scss";
import content1 from "../../Assets/Images/1088523.jpg";
import banner from '../../Assets/Images/KRISAT.png'
import logo from '../../Assets/Images/logo/clgLogo.png'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Button } from "rsuite";
import SendIcon from '@mui/icons-material/Send';
import PhotoGallery from "../../Components/Gallery/PhotoGallery";
import NewsLetterLabel from "../../Components/NewsLetterLabel/NewsLetterLabel";
import { useNavigate } from "react-router-dom";
import HomeContent from "../../Services/utils/json/HomeContent";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";

const Home = () => {
  const { aboutContent } = HomeContent();
  console.log({ aboutContent })
  const navigate = useNavigate()
  return (
    <>
      <div className="home-banner">
         <div className="banner-inner-section">
          <img src={logo} alt="logo" />
          <span className="banner-content">
            <h1>Sowing Seeds of Future</h1>
            <p>
              Affiliated by Tamil Nadu Agricultural university, Coimbatore, as per G.O.(Ms).No.98, Agriculture(AU) Department dt.29.12.2016, Counsel of Tamilnadu.
            </p>
          </span>
         </div>
          <Button className="button" variant="contained" endIcon={<SendIcon />} onClick={()=>navigate("/LifeKRISAT/4")}>EXPLORE &nbsp; </Button>
      </div>
      <VideoPlayer videoSrc="https://www.w3schools.com/html/mov_bbb.mp4" />
      <div className="home-about">
        <div className="about-heading">
          <h2>About KRISAT</h2>
        </div>
        <div className="about-content">
        {aboutContent?.map((content, index) => {
          return (
              <Card sx={{ maxWidth: 395 }} className="content1" key={index}>
                <div className="content-header">
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={content.image}
                    className="card-img"
                  />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="card-heading"
                  >
                    {content.title}
                  </Typography>
                </div>
                <div className="content">
                  <CardContent className="content-content">
                    <Typography variant="body2" color="text.secondary">
                      <h4>{content.subHeading}</h4>
                      <p>{content.context}</p>
                    </Typography>
                  </CardContent>
                  <CardActions className="card-actions">
                    <Button size="small" className="button">
                      Learn More
                    </Button>
                  </CardActions>
                </div>
              </Card>
          );
        })}
        </div>
      </div>
      <PhotoGallery />
      <NewsLetterLabel />
    </>
  );
};

export default Home;
