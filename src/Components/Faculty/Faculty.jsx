import React from "react";
import PropTypes from "prop-types";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./Faculty.scss";
import FacultyData from "./FacultyData";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Faculty = () => {
  const [value, setValue] = React.useState(0);

  const { teachingFaculty, nonTechingFaculty } = FacultyData();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function sanitizeFileName(name) {
    return name
      .replace(/[^a-zA-Z0-9 ]/g, "") // remove everything except alphanumerics and space
      .trim()
      .replace(/\s+/g, "_");         // replace spaces with underscores
  }

  function getFileExtension(filePath) {
    const match = filePath.match(/\.([0-9a-z]+)(?:[\?#]|$)/i);
    return match ? `.${match[1]}` : '';
  }

  const resumeDownloadHandelr = (photoDetails) => {
    if (!photoDetails || !photoDetails?.resume) return;

    const extension = getFileExtension(photoDetails.resume);
    const filename = sanitizeFileName(photoDetails.name) + extension;
    const link = document.createElement("a");
    link.href = photoDetails.resume;
    link.download = filename; // Desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
        >
          <Tab label="Teaching faculty" {...a11yProps(0)} />
          <Tab label="Non-teaching faculty" {...a11yProps(1)} />
          {/* <Tab label="Farmer staff" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="photo-grid">
          {teachingFaculty.map((photo, index) => (
            <div key={index} className="photo-item">
              <div className="faculty-wrapper">
                <img onClick={() => resumeDownloadHandelr(photo)} src={photo.image} alt={`Photo ${index + 1}`} />
                <div className="faculty-detail-wrapper">
                  <div>
                    <strong>{photo.name}</strong>
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    {photo.designation}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    {photo.major}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="photo-grid">
          {nonTechingFaculty.map((photo, index) => (
            <div key={index} className="photo-item">
              <div className="faculty-wrapper">
                <img onClick={() => resumeDownloadHandelr(photo)} src={photo.image} alt={`Photo ${index + 1}`} />
                <div className="faculty-detail-wrapper">
                  <div>
                    <strong>{photo.name}</strong>
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    {photo.designation}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    {photo.major}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CustomTabPanel>
      {/* <CustomTabPanel value={value} index={2}>
        Coming soon...
      </CustomTabPanel> */}
    </Box>
  );
};

export default Faculty;
