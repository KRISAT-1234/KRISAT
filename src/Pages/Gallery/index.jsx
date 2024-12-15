import React, { useContext, useState } from "react";
import { Box } from "@mui/material";
import "./Gallery.scss";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import { IoIosCamera } from "react-icons/io";
import { PhotoContext } from "../../Services/Context/PhotoProvider";
import CommonModal from "../../Components/Common/Modal/Model";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const { photos } = useContext(PhotoContext);
  const [selectedImages, setSelectedImages] = useState(<></>);
  const getSelectedLabel = (index) => {
    return photos[index]?.label;
  };

  const imageClickHandler = (clickedPhoto) => {
    const imageListMarkup = (
      <ImageList sx={{ width: 'auto', height: 450 }} cols={3} rowHeight={164}>
        {clickedPhoto?.photos?.map((item) => (
          <ImageListItem key={item.src}>
            <img
              srcSet={`${item.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.src}?w=164&h=164&fit=crop&auto=format`}
              alt={item.label}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
    setSelectedImages(imageListMarkup);
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <Box className="image-slider-parent">
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0px 10px",
            }}
          >
            <IoIosCamera color="#1F3A7E" fontSize="44px" />
            <span
              color="#1F3A7E"
              style={{
                fontSize: "36px",
                color: "#1F3A7E",
              }}
            >
              Gallery
            </span>
          </div>
        </div>
        <div className="image-slider-second">
          <Box>
            <div className="styled-title">
              <h1>{getSelectedLabel(activeIndex)}</h1>
              <span className="arrow">&#10230;</span>
            </div>
          </Box>
          <ImageSlider
            images={photos}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            imageClickHandler={imageClickHandler}
          />
        </div>
      </Box>
      <CommonModal
        open={modalOpen}
        setOpen={setModalOpen}
        modalBody={selectedImages}
        modalTitle={photos[activeIndex]?.label}
      />
    </>
  );
};

export default Gallery;
