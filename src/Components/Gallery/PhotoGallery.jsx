import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate } from "react-router-dom";
import "./PhotoGallery.scss";
import { PhotoContext } from "../../services/Context/PhotoProvider";
import moment from "moment";

const CalendarComponent = ({ date }) => {
  return (
    <>
      <div className="gallery-calendar-div">
        <section className="gallery-calendar-section">
          <CalendarMonthIcon className="gallery-calendar-icon" color="white" />
          <span>{date}</span>
        </section>
      </div>
    </>
  );
};

const CollectionNameComponent = ({ collectionName }) => {
  return (
    <>
      <div className="gallery-collection-div">
        <section className="gallery-collection-section">
          <span>{collectionName}</span>
        </section>
      </div>
    </>
  );
};

const PhotoGallery = () => {
  const { photos, setPhotos } = useContext(PhotoContext);
  const navigate = useNavigate();

  return (
    <>
      <Box
        onClick={() => navigate("/Gallery")}
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          margin: "50px 0px",
          transition: ".5s",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Box className="gallery-box-parent">
            <CalendarComponent date={photos[0] ? moment(photos[0]?.date).format("MMM DD yyyy") : ""} />
            <CollectionNameComponent collectionName={photos[0]?.label?.toUpperCase()} />
            <img
              style={{
                height: "25vh",
                width: "520px",
              }}
              className="gallery-img gallery-img-first"
              src={photos[0]?.src}
              loading="lazy"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
            }}
          >
            <Box className="gallery-box-parent">
              <CalendarComponent date={photos[1] ? moment(photos[1]?.date).format("MMM DD yyyy") : ""} />
              <CollectionNameComponent collectionName={photos[1]?.label?.toUpperCase()} />
              <img
                className="gallery-img gallery-img-second"
                style={{
                  height: "25vh",
                  width: "250px",
                }}
                src={photos[1]?.src}
                loading="lazy"
              />
            </Box>
            <Box className="gallery-box-parent">
              <CalendarComponent date={photos[2] ? moment(photos[2]?.date).format("MMM DD yyyy") : ""} />
              <CollectionNameComponent collectionName={photos[2]?.label?.toUpperCase()} />
              <img
                className="gallery-img gallery-img-third"
                style={{
                  height: "25vh",
                  width: "250px",
                }}
                src={photos[2]?.src}
                loading="lazy"
              />
            </Box>
          </Box>
        </Box>
        <Box className="gallery-box-parent">
          <CalendarComponent date={photos[3] ? moment(photos[3]?.date).format("MMM DD yyyy") : ""} />
          <CollectionNameComponent collectionName={photos[3]?.label?.toUpperCase()} />
          <img
            className="gallery-img vertical-img"
            style={{
              height: "50vh",
              width: "250px",
            }}
            src={photos[3]?.src}
            loading="lazy"
          />
        </Box>
      </Box>
    </>
  );
};

export default PhotoGallery;
