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

  const photos = [
    "https://picsum.photos/id/237/300/200", // Random dog photo
    "https://picsum.photos/id/238/300/200", // Another random photo
    "https://picsum.photos/id/239/300/200", // More random photo
    "https://picsum.photos/id/240/300/200",
    "https://picsum.photos/id/241/300/200",
    "https://picsum.photos/id/242/300/200",
    "https://picsum.photos/id/243/300/200",
    "https://picsum.photos/id/244/300/200",
  ];

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
          <Tab label="Farmer staff" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="photo-grid">
          {teachingFaculty.map((photo, index) => (
            <div key={index} className="photo-item">
              <div className="faculty-wrapper">
                <img src={photo.image} alt={`Photo ${index + 1}`} />
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
          ))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="photo-grid">
          {nonTechingFaculty.map((photo, index) => (
            <div key={index} className="photo-item">
              <div className="faculty-wrapper">
                <img src={photo.image} alt={`Photo ${index + 1}`} />
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
          ))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Coming soon...
      </CustomTabPanel>
    </Box>
  );
};

export default Faculty;
