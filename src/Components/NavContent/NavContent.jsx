import React from "react";
import navContent from "../../Services/utils/json/navContent";
import ReactHtmlParser from "react-html-parser";
import "./navContent.scss";

const NavContent = ({ heading }) => {
  const { aboutKrisat, missViss, govCoun, prinDsk, crsOff } = navContent();
  return (
    <div className="nav-content">
      {(heading === "About KRISAT" || heading === "History") &&
        ReactHtmlParser(aboutKrisat.content)}
      {heading === "Vision & Mission" && ReactHtmlParser(missViss.content)}
      {heading === "Governing Council" && ReactHtmlParser(govCoun.content)}
      {heading === "From Principal Desk" && ReactHtmlParser(prinDsk.content)}
      {heading === "Courses Offered" && (
        <div className="crsOff">{ReactHtmlParser(crsOff.content)}</div>
      )}
    </div>
  );
};

export default NavContent;
