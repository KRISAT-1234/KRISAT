import axios from "axios";

const useApiCalls = () => {
  const getGalleryPhotos = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list`);
    return response;
  };

  return {
    getGalleryPhotos,
  };
};

export default useApiCalls;
