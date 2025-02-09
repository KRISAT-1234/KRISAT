import React from "react";
import navContent from "../../Services/utils/json/navContent";
import ReactHtmlParser from "react-html-parser";
import "./navContent.scss";
import Faculty from "../Faculty/Faculty";
import Hostel from "../LifeKrisat/Hostel/Hostel";
import Sports from "../LifeKrisat/Hostel/Sports/Sports";
import ImageGallery from "../InnerNavGallery/ImageGallery";
import Cultural1 from "../../Assets/Images/Culturals/culturals1.jpg";
import Cultural2 from "../../Assets/Images/Culturals/culturals2.jpg";
import Cultural3 from "../../Assets/Images/Culturals/culturals3.jpg";
import Cultural4 from "../../Assets/Images/Culturals/culturals4.jpg";

const NavContent = ({ heading }) => {
  const {
    history,
    aboutKrisat,
    missViss,
    boardMembers,
    govCoun,
    prinDsk,
    crsOff,
    nss,
    shortContent,
    cropProd,
    outdoor,
    fieldClasses,
    allindiaTour,
    animalHusb,
    organicFarming,
    wetland,
    orchard,
    gardenLand,
    dryLand,
    hostel,
    infras,
    culturals,
    sports,
    hostelRules,
    collegeRules,
    academicRules,
  } = navContent();
  return (
    <div className="nav-content">
      {heading === "History" && ReactHtmlParser(history.content)}
      {heading === "About KRISAT" && ReactHtmlParser(aboutKrisat.content)}
      {heading === "Vision & Mission" && ReactHtmlParser(missViss.content)}
      {heading === "Board Members" && ReactHtmlParser(boardMembers.content)}
      {heading === "Governing Council" && ReactHtmlParser(govCoun.content)}
      {heading === "From Principal Desk" && ReactHtmlParser(prinDsk.content)}
      {heading === "Courses Offered" && (
        <div className="crsOff">{ReactHtmlParser(crsOff.content)}</div>
      )}
      {heading === "NSS Programs" && ReactHtmlParser(nss.content)}
      {heading === "Short Tour" && ReactHtmlParser(shortContent.content)}
      {heading === "Crop Production" && ReactHtmlParser(cropProd.content)}
      {heading === "Outdoor Visit" && ReactHtmlParser(outdoor.content)}
      {heading === "Field Classes" && ReactHtmlParser(fieldClasses.content)}
      {heading === "All India Study Tour" &&
        ReactHtmlParser(allindiaTour.content)}
      {heading === "Animal Husbandry" && ReactHtmlParser(animalHusb.content)}
      {heading === "Organic Field" && ReactHtmlParser(organicFarming.content)}
      {heading === "Wet Land" && ReactHtmlParser(wetland.content)}
      {heading === "Orchard" && ReactHtmlParser(orchard.content)}
      {heading === "Garden Land" && ReactHtmlParser(gardenLand.content)}
      {heading === "Dry Land" && ReactHtmlParser(dryLand.content)}
      {heading === "Hostel" && <Hostel />}
      {heading === "Infrastructure" && ReactHtmlParser(infras.content)}
      {heading === "Culturals" && (
        <>
          <br />
          <ImageGallery images={[Cultural1, Cultural2, Cultural3, Cultural4]} />
        </>
      )}
      {heading === "Sports Activities" && <Sports />}
      {heading === "Hostel Rules" && ReactHtmlParser(hostelRules.content)}
      {heading === "College Rules" && ReactHtmlParser(collegeRules.content)}
      {heading === "Academic Rules" && ReactHtmlParser(academicRules.content)}
      {heading === "Faculty" && <Faculty />}
    </div>
  );
};

export default NavContent;
