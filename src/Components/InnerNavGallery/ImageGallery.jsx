import React, { useState } from "react";

// Gallery component that receives image array and starting index as props
const ImageGallery = ({ images, currentIndex }) => {
  const [selectedIndex, setSelectedIndex] = useState(currentIndex || 0);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (index) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const goNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goPrev = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      {/* Gallery Thumbnails */}
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className="thumbnail"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {/* Modal Viewer */}
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <div className="image-viewer">
              <button className="prev-btn" onClick={goPrev}>
                &#8249;
              </button>
              <img
                src={images[selectedIndex]}
                alt={`Full-size ${selectedIndex}`}
                className="full-image"
              />
              <button className="next-btn" onClick={goNext}>
                &#8250;
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .thumbnail {
          width: 200px;
          height: 200px;
          object-fit: cover;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .thumbnail:hover {
          transform: scale(1.1);
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          position: relative;
          padding: 20px;
          border-radius: 8px;
          width: 80vw; /* Fixed width */
          height: 80vh; /* Fixed height */
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 30px;
          background: #fff;
          border: none;
          color: #000;
          cursor: pointer;
          border-radius: 100%;
          width: 2%;
          z-index: 100;
        }

        .image-viewer {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 100%;
          height: 100%;
        }

        .full-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain; /* Ensures the image fits inside the container without distortion */
        }

        .prev-btn,
        .next-btn {
          font-size: 80px;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
        }

        .prev-btn {
          left: 10px;
        }

        .next-btn {
          right: 10px;
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;
