import React, { createContext, useEffect, useState } from "react";
import useApiCalls from "../utils/Hooks/use-ApiCalls";
import useRandomDateGenerator from "../utils/Hooks/use-RandomDateGenerator";
import moment from "moment";
export const PhotoContext = createContext();

export const PhotoContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const { getGalleryPhotos } = useApiCalls();
  const { randomDate, getRandomCollegeEvent } = useRandomDateGenerator();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getGalleryPhotos();
      if (response.status == 200) {
        const transformedResponse = response.data.map((item) => {
          return {
            ...item,
            date: randomDate(),
            src: item.download_url,
            label: getRandomCollegeEvent(),
            photos: [...response.data].map((p) => {
              return {
                ...p,
                date: randomDate(),
                src: p.download_url,
                label: getRandomCollegeEvent(),
              };
            }),
          };
        });

        console.log("date ", moment(new Date()).format("MMM DD yyyy"));

        console.log(transformedResponse);

        setPhotos(transformedResponse);
      }
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
