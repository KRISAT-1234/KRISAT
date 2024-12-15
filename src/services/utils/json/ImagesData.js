const ImagesData = () => {
  const allImages = {
    NSS: require
      .context(
        "../../../Assets/Images/Gallery/NSS",
        false,
        /\.(png|jpe?g|svg)$/
      )
      .keys()
      .map(
        require.context(
          "../../../Assets/Images/Gallery/NSS",
          false,
          /\.(png|jpe?g|svg)$/
        )
      ),
    AboutUs: require
      .context(
        "../../../Assets/Images/Gallery/AboutUs",
        false,
        /\.(png|jpe?g|svg)$/
      )
      .keys()
      .map(
        require.context(
          "../../../Assets/Images/Gallery/AboutUs",
          false,
          /\.(png|jpe?g|svg)$/
        )
      ),
    ShortTour: require
      .context(
        "../../../Assets/Images/Gallery/ShortTour",
        false,
        /\.(png|jpe?g|svg)$/
      )
      .keys()
      .map(
        require.context(
          "../../../Assets/Images/Gallery/ShortTour",
          false,
          /\.(png|jpe?g|svg)$/
        )
      ),
    OutDoorVisit: require
      .context(
        "../../../Assets/Images/Gallery/OutDoorVisit",
        false,
        /\.(png|jpe?g|svg)$/
      )
      .keys()
      .map(
        require.context(
          "../../../Assets/Images/Gallery/OutDoorVisit",
          false,
          /\.(png|jpe?g|svg)$/
        )
      ),
    FieldClasses: require
      .context(
        "../../../Assets/Images/Gallery/FieldClasses",
        false,
        /\.(png|jpe?g|svg)$/
      )
      .keys()
      .map(
        require.context(
          "../../../Assets/Images/Gallery/FieldClasses",
          false,
          /\.(png|jpe?g|svg)$/
        )
      ),
    CropProduction: require
      .context(
        "../../../Assets/Images/Gallery/CropProduction",
        false,
        /\.(png|jpe?g|svg)$/
      )
      .keys()
      .map(
        require.context(
          "../../../Assets/Images/Gallery/CropProduction",
          false,
          /\.(png|jpe?g|svg)$/
        )
      ),
    AllIndiaTour: require
      .context(
        "../../../Assets/Images/Gallery/AllIndiaTour",
        false,
        /\.(png|jpe?g|svg)$/
      )
      .keys()
      .map(
        require.context(
          "../../../Assets/Images/Gallery/AllIndiaTour",
          false,
          /\.(png|jpe?g|svg)$/
        )
      ),
  };

  const getImagesSections = (folderName) => ({
    [folderName]: allImages[folderName],
  });

  const imageFolders = [
    { folder: "NSS", label: "NSS" },
    { folder: "AboutUs", label: "About us" },
    { folder: "ShortTour", label: "Short tour" },
    { folder: "OutDoorVisit", label: "Outdoor visit" },
    { folder: "FieldClasses", label: "Field classes" },
    { folder: "CropProduction", label: "Crop production" },
    { folder: "AllIndiaTour", label: "All india tour" },
  ];

  const images = imageFolders.map((folder) => {
    return {
      label: folder.label,
      images: getImagesSections(folder.folder)[folder.folder],
    };
  });

  return {
    images: images,
  };
};

export default ImagesData;
