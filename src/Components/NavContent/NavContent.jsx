import React from "react";
import navContent from "../../Services/utils/json/navContent";
import ReactHtmlParser from "react-html-parser";
import "./navContent.scss";
import Faculty from "../Faculty/Faculty";
import Hostel from "../LifeKrisat/Hostel/Hostel";
import Sports from "../LifeKrisat/Hostel/Sports/Sports";
import ImageGallery from "../InnerNavGallery/ImageGallery";
import About1 from "../../Assets/Images/Gallery/AboutUs/Picture1.jpg";
import About2 from "../../Assets/Images/Gallery/AboutUs/Picture2.jpg";
import About3 from "../../Assets/Images/Gallery/AboutUs/Picture3.jpg";
import About4 from "../../Assets/Images/Gallery/AboutUs/Picture4.jpg";
import Sport1 from "../../Assets/Images/Sports/sports1.jpg";
import Sport2 from "../../Assets/Images/Sports/sports2.png";
import Nss1 from "../../Assets/Images/Gallery/NSS/Picture1.jpg";
import Nss2 from "../../Assets/Images/Gallery/NSS/Picture2.jpg";
import CP1 from "../../Assets/Images/Gallery/CropProduction/Picture3.jpg";
import CP2 from "../../Assets/Images/Gallery/CropProduction/Picture4.jpg";
import CP3 from "../../Assets/Images/Gallery/CropProduction/Picture5.jpg";
import CP4 from "../../Assets/Images/Gallery/CropProduction/Picture6.jpg";
import ShortTour1 from "../../Assets/Images/Gallery/ShortTour/Picture7.jpg";
import ShortTour2 from "../../Assets/Images/Gallery/ShortTour/Picture8.jpg";
import ShortTour3 from "../../Assets/Images/Gallery/ShortTour/Picture9.jpg";
import ShortTour4 from "../../Assets/Images/Gallery/ShortTour/Picture10.jpg";
import OutDoor1 from "../../Assets/Images/Gallery/OutDoorVisit/Picture11.jpg";
import OutDoor2 from "../../Assets/Images/Gallery/OutDoorVisit/Picture12.jpg";
import OutDoor3 from "../../Assets/Images/Gallery/OutDoorVisit/Picture13.jpg";
import OutDoor4 from "../../Assets/Images/Gallery/OutDoorVisit/Picture14.jpg";
import FieldClass1 from "../../Assets/Images/Gallery/FieldClasses/Picture15.jpg";
import FieldClass2 from "../../Assets/Images/Gallery/FieldClasses/Picture16.jpg";
import FieldClass3 from "../../Assets/Images/Gallery/FieldClasses/Picture17.jpg";
import AllIndia1 from "../../Assets/Images/Gallery/AllIndiaTour/Picture18.jpg";
import AllIndia2 from "../../Assets/Images/Gallery/AllIndiaTour/Picture19.jpg";

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
    library,
    hostelRules,
    collegeRules,
    academicRules,
    collegeView,
    laboratories,
    observatory,
    miRoom,
    smartClass,
    examHall,
    cafeteria,
    gym,
    mess,
  } = navContent();
  return (
    <div className="nav-content">
      {heading === "History" && ReactHtmlParser(history.content)}
      {heading === "About KRISAT" && (
        <>
          {ReactHtmlParser(aboutKrisat.content)}
          <br />
          <ImageGallery images={[About1, About2, About3, About4]} />
        </>
      )}
      {heading === "Vision & Mission" && ReactHtmlParser(missViss.content)}
      {heading === "Board Members" && ReactHtmlParser(boardMembers.content)}
      {heading === "Governing Council" && ReactHtmlParser(govCoun.content)}
      {heading === "From Principal Desk" && ReactHtmlParser(prinDsk.content)}
      {heading === "Courses Offered" && (
        <div className="crsOff">{ReactHtmlParser(crsOff.content)}</div>
      )}
      {heading === "NSS Programs" && (
        <>
          {ReactHtmlParser(nss.content)}
          <br />
          <ImageGallery images={[Nss1, Nss2]} />
        </>
      )}
      {heading === "Short Tour" && (
        <>
          {ReactHtmlParser(shortContent.content)}
          <br />
          <ImageGallery
            images={[ShortTour1, ShortTour2, ShortTour3, ShortTour4]}
          />
        </>
      )}
      {heading === "Crop Production" && (
        <>
          {ReactHtmlParser(cropProd.content)}
          <br />
          <ImageGallery images={[CP1, CP2, CP3, CP4]} />
        </>
      )}
      {heading === "Outdoor Visit" && (
        <>
          {ReactHtmlParser(outdoor.content)}
          <br />
          <ImageGallery images={[OutDoor1, OutDoor2, OutDoor3, OutDoor4]} />
        </>
      )}
      {heading === "Field Classes" && (
        <>
          {ReactHtmlParser(fieldClasses.content)}
          <br />
          <ImageGallery images={[FieldClass1, FieldClass2, FieldClass3]} />
        </>
      )}
      {heading === "All India Study Tour" && (
        <>
          {ReactHtmlParser(allindiaTour.content)}
          <br />
          <ImageGallery images={[AllIndia1, AllIndia2]} />
        </>
      )}
      {heading === "Animal Husbandry" && ReactHtmlParser(animalHusb.content)}
      {heading === "Organic Field" && ReactHtmlParser(organicFarming.content)}
      {heading === "Wet Land" && ReactHtmlParser(wetland.content)}
      {heading === "Orchard" && ReactHtmlParser(orchard.content)}
      {heading === "Garden Land" && ReactHtmlParser(gardenLand.content)}
      {heading === "Dry Land" && ReactHtmlParser(dryLand.content)}
      {heading === "Hostel" && <Hostel />}
      {heading === "Infrastructure" && ReactHtmlParser(infras.content)}
      {heading === "Laboratory" && ReactHtmlParser(laboratories.content)}
      {heading === "Observatory" && ReactHtmlParser(observatory.content)}
      {heading === "MI room" && ReactHtmlParser(miRoom.content)}
      {heading === "Smart Class" && ReactHtmlParser(smartClass.content)}
      {heading === "Exam Hall" && ReactHtmlParser(examHall.content)}
      {heading === "Cafeteria" && ReactHtmlParser(cafeteria.content)}
      {heading === "Gym" && ReactHtmlParser(gym.content)}
      {heading === "Mess" && ReactHtmlParser(mess.content)}
      {heading === "Sports Activities" && (
        <>
          <br />
          <ImageGallery images={[Sport1, Sport2]} />
        </>
      )}
      {heading === "Culturals" && <Sports />}
      {heading === "Hostel Rules" && ReactHtmlParser(hostelRules.content)}
      {heading === "College Rules" && ReactHtmlParser(collegeRules.content)}
      {heading === "Academic Rules" && ReactHtmlParser(academicRules.content)}
      {heading === "Faculty" && <Faculty />}
      {heading === "College Library" && ReactHtmlParser(library.content)}
      {heading === "College View" && ReactHtmlParser(collegeView.content)}
    </div>
  );
};

export default NavContent;
