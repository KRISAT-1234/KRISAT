import React from "react";
import navContent from "../../Services/utils/json/navContent";
import ReactHtmlParser from "react-html-parser";
import "./navContent.scss";
import Faculty from "../Faculty/Faculty";

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
      {heading === "Hostel" && ReactHtmlParser(hostel.content)}
      {heading === "Infrastructure" && ReactHtmlParser(infras.content)}
      {heading === "Culturals" && ReactHtmlParser(culturals.content)}
      {heading === "Sports Activities" && ReactHtmlParser(sports.content)}
      {heading === "Hostel Rules" && ReactHtmlParser(hostelRules.content)}
      {heading === "College Rules" && ReactHtmlParser(collegeRules.content)}
      {heading === "Academic Rules" && ReactHtmlParser(academicRules.content)}
      {heading === "Faculty" && <Faculty />}
    </div>
  );
};

export default NavContent;
