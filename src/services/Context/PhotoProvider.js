import React, { createContext, useEffect, useState } from "react";
import useApiCalls from "../utils/Hooks/use-ApiCalls";
import useRandomDateGenerator from "../utils/Hooks/use-RandomDateGenerator";
import moment from "moment";
import ImagesData from "../utils/json/ImagesData";

export const PhotoContext = createContext();

export const PhotoContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const { getGalleryPhotos } = useApiCalls();
  const { randomDate, getRandomCollegeEvent } = useRandomDateGenerator();
  const { images } = ImagesData();
  useEffect(() => {
    const fetchData = async () => {
      const collegeImages = images.map((item, index) => {
        return {
          id: index + 1,
          src: item.images[0],
          label: item.label,
          date: undefined,
          photos: item.images.map((nestedItem, nestedIndex) => {
            return {
              id: `${index + 1}-${nestedIndex + 1}`,
              src: nestedItem,
              label: item.label,
              date: undefined,
            };
          }),
        };
      });

      setPhotos(collegeImages);
    };

    fetchData();
  }, []);

  return (
    <PhotoContext.Provider
      value={{
        photos,
        setPhotos,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};
