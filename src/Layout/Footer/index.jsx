import React from "react";
import "./Footer.scss";
import ClgIcon from "../../Assets/Icons/ClgIcon";
import { Box, Button } from "@mui/material";
import { FaMapLocation } from "react-icons/fa6";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import Divider from "@mui/material/Divider";
// import { AiFillInstagram } from "react-icons/ai";
// import { FaSquareFacebook } from "react-icons/fa6";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { TfiYoutube } from "react-icons/tfi";
// import { FaEarthAfrica } from "react-icons/fa6";
// import { IoMdMail } from "react-icons/io";
import { FaCopyright } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const linkClickHandler = (url) => {
    window.open(url);
  };

  return (
    <>
      <footer>
        <Box className="footer-first-item">
          <Box className="footer-clg-icon">
            <ClgIcon />
            <Box className="footer-clg-name">
              <h2>Krishna College of Agriclture & Technology</h2>
              <h5>Affiliated to Tamil Nadu Agricultural University</h5>
            </Box>
          </Box>
          <Box className="footer-clg-details">
            <Box>
              <Button className="footer-clg-code-btn">
                AISHE CODE C-58305
              </Button>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <span>Unique visitors: 78327</span>
            </Box>
            <Box className="footer-clg-locations">
              <FaMapLocation width={50} height={50} />
              <Box className="footer-clg-address">
                <span>Srirengapuram, Usilampatti</span>
                <span>Madurai 625 532</span>
              </Box>
            </Box>
            <Box className="footer-clg-contact">
              <span className="footer-contact-icon">
                <LocalPhoneIcon /> 9095900202/3/4
              </span>
              <span className="footer-contact-icon">
                <EmailIcon /> admin@krisat.edu.in
              </span>
            </Box>
          </Box>
        </Box>
        <Divider color="white" />
        {/* <Box className="footer-second-item">
          <Box className="footer-essential">
            <Box className="footer-quick-links">
              <span className="footer-quick-links-header">Quick Links</span>
              <ul className="footer-quick-links-ul">
                <a href="/KRISAT/AcademicActivities/0">
                  {" "}
                  <li>Academics Activities</li>{" "}
                </a>
                <a href="/KRISAT/RulesRegulations/0">
                  {" "}
                  <li>Rules and Regulations</li>{" "}
                </a>
                <a href="/KRISAT/Nursery/0">
                  {" "}
                  <li>Nursery</li>{" "}
                </a>
                <a href="/KRISAT/Farming/0">
                  {" "}
                  <li>Farm</li>{" "}
                </a>
              </ul>
            </Box>
            <Box className="footer-academics">
              <span className="footer-academics-header">Academics</span>
              <ul className="footer-academics-ul">
                <a href="/KRISAT/Academics/0">
                  {" "}
                  <li>Courses Offered</li>{" "}
                </a>
                <a href="/KRISAT/Academics/1">
                  {" "}
                  <li>Faculty</li>{" "}
                </a>
                <a href="/KRISAT/Academics/2">
                  {" "}
                  <li>College Library</li>{" "}
                </a>
              </ul>
            </Box>
          </Box>
          <Box className="footer-clg-information">
            <Box className="footer-social-pages">
              <FaSquareFacebook
                onClick={() =>
                  linkClickHandler(
                    "https://www.facebook.com/KrishnaCollegeofAgricultureandTechnology/"
                  )
                }
              />
              <FaLinkedin
                onClick={() =>
                  linkClickHandler("https://www.linkedin.com/company/krisat/")
                }
              />
              <IoMdMail
                onClick={() => {
                  window.open("mailto:admin@krisat.edu.in", "_self");
                }}
              />
            </Box>
            <Box>
              <Button className="footer-clg-code-btn">
                AISHE CODE C-58305
              </Button>
            </Box>
            <Box>
              <span>Unique visitors: 78327</span>
            </Box>
          </Box>
        </Box> */}
        <Divider variant="middle" color="white" />
        <Box className="footer-third-item">
          <Box className="footer-copy-right">
            <FaCopyright />
            <span>All rights reserved, 2025@KRISAT</span>
          </Box>
          <span>Terms of use</span>
          <span>Privacy policy</span>
          <span>Website partner:@</span>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
