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
import Dairy1 from "../../Assets/Images/Dairy/Image1.jpg";
import Dairy2 from "../../Assets/Images/Dairy/Image2.jpg";
import Dairy3 from "../../Assets/Images/Dairy/Image3.jpg";
import Sheep1 from "../../Assets/Images/Sheep/Sheep1.jpg";
import Sheep2 from "../../Assets/Images/Sheep/Sheep2.jpg";
import Pig1 from "../../Assets/Images/Piggery/Pig1.jpg";
import Pig2 from "../../Assets/Images/Piggery/Pig2.jpg";
import Duck1 from "../../Assets/Images/Poultry/Duck1.jpg";
import Duck2 from "../../Assets/Images/Poultry/Duck2.jpg";
import Climber1 from "../../Assets/Images/Climbers/climbers1.jpg";
import Climber2 from "../../Assets/Images/Climbers/climbers2.jpg";
import Climber3 from "../../Assets/Images/Climbers/climbers3.jpg";
import Climber4 from "../../Assets/Images/Climbers/climbers4.jpg";
import Creeper1 from "../../Assets/Images/Creepers/creepers1.jpg";
import Creeper2 from "../../Assets/Images/Creepers/creepers2.jpg";
import Creeper3 from "../../Assets/Images/Creepers/creepers3.jpg";
import Creeper4 from "../../Assets/Images/Creepers/creepers4.jpg";
import Creeper5 from "../../Assets/Images/Creepers/creepers5.jpg";
import Creeper6 from "../../Assets/Images/Creepers/creepers6.jpg";
import Flower1 from "../../Assets/Images/Flowers/flowers1.jpg";
import Flower2 from "../../Assets/Images/Flowers/flowers2.jpg";
import Flower3 from "../../Assets/Images/Flowers/flowers3.jpg";
import Flower4 from "../../Assets/Images/Flowers/flowers4.jpg";
import Fruit1 from "../../Assets/Images/Fruits/fruits1.jpg";
import Fruit2 from "../../Assets/Images/Fruits/fruits2.jpg";
import Fruit3 from "../../Assets/Images/Fruits/fruits3.jpg";
import Fruit4 from "../../Assets/Images/Fruits/fruits4.jpg";
import Indoor1 from "../../Assets/Images/Indoor/indoorPlants1.jpg";
import Indoor2 from "../../Assets/Images/Indoor/indoorPlants2.jpg";
import Indoor3 from "../../Assets/Images/Indoor/indoorPlants3.jpg";
import Indoor4 from "../../Assets/Images/Indoor/indoorPlants4.jpg";
import Indoor5 from "../../Assets/Images/Indoor/indoorPlants5.jpg";
import Indoor6 from "../../Assets/Images/Indoor/indoorPlants6.jpg";
import Indoor7 from "../../Assets/Images/Indoor/indoorPlants7.jpg";
import Indoor8 from "../../Assets/Images/Indoor/indoorPlants8.jpg";
import Indoor9 from "../../Assets/Images/Indoor/indoorPlants9.jpg";
import Indoor10 from "../../Assets/Images/Indoor/indoorPlants10.jpg";
import Indoor11 from "../../Assets/Images/Indoor/indoorPlants11.jpg";
import Indoor12 from "../../Assets/Images/Indoor/indoorPlants12.jpg";
import Indoor13 from "../../Assets/Images/Indoor/indoorPlants13.jpg";
import Indoor14 from "../../Assets/Images/Indoor/indoorPlants14.jpg";
import Indoor15 from "../../Assets/Images/Indoor/indoorPlants15.jpg";
import Indoor16 from "../../Assets/Images/Indoor/indoorPlants16.jpg";
import Indoor17 from "../../Assets/Images/Indoor/indoorPlants17.jpg";
import Indoor18 from "../../Assets/Images/Indoor/indoorPlants18.jpg";
import Indoor19 from "../../Assets/Images/Indoor/indoorPlants19.jpg";
import Indoor20 from "../../Assets/Images/Indoor/indoorPlants20.jpg";
import Medicinal1 from "../../Assets/Images/Medicinal/medicinal1.jpg";
import Medicinal2 from "../../Assets/Images/Medicinal/medicinal2.jpg";
import Medicinal3 from "../../Assets/Images/Medicinal/medicinal3.jpg";
import Outdoor0 from "../../Assets/Images/Outdoor/0.jpg";
import Outdoor1 from "../../Assets/Images/Outdoor/1.jpg";
import Outdoor2 from "../../Assets/Images/Outdoor/2.jpg";
import Outdoor3 from "../../Assets/Images/Outdoor/3.jpg";
import Outdoor4 from "../../Assets/Images/Outdoor/4.jpg";
import Outdoor5 from "../../Assets/Images/Outdoor/5.jpg";
import Outdoor6 from "../../Assets/Images/Outdoor/6.jpg";
import Outdoor7 from "../../Assets/Images/Outdoor/7.jpg";
import Outdoor8 from "../../Assets/Images/Outdoor/8.jpg";
import Outdoor9 from "../../Assets/Images/Outdoor/9.jpg";
import Outdoor10 from "../../Assets/Images/Outdoor/10.jpg";
import Outdoor11 from "../../Assets/Images/Outdoor/11.jpg";
import Outdoor12 from "../../Assets/Images/Outdoor/12.jpg";
import Outdoor13 from "../../Assets/Images/Outdoor/13.jpg";
import Outdoor14 from "../../Assets/Images/Outdoor/14.jpg";
import Outdoor15 from "../../Assets/Images/Outdoor/15.jpg";
import Outdoor16 from "../../Assets/Images/Outdoor/16.jpg";
import Outdoor17 from "../../Assets/Images/Outdoor/17.jpg";
import Outdoor18 from "../../Assets/Images/Outdoor/18.jpg";
import Outdoor19 from "../../Assets/Images/Outdoor/19.jpg";
import Outdoor20 from "../../Assets/Images/Outdoor/20.jpg";
import Outdoor21 from "../../Assets/Images/Outdoor/21.jpg";
import Outdoor22 from "../../Assets/Images/Outdoor/22.jpg";
import Outdoor23 from "../../Assets/Images/Outdoor/23.jpg";
import Outdoor24 from "../../Assets/Images/Outdoor/24.jpg";
import Outdoor25 from "../../Assets/Images/Outdoor/25.jpg";
import Shrub1 from "../../Assets/Images/Shrubs/shrub1.jpg";
import Shrub2 from "../../Assets/Images/Shrubs/shrub2.jpg";
import Shrub3 from "../../Assets/Images/Shrubs/shrub3.jpg";
import Shrub4 from "../../Assets/Images/Shrubs/shrub4.jpg";
import Tree1 from "../../Assets/Images/Trees/0.jpg";
import Tree2 from "../../Assets/Images/Trees/1.jpg";
import Tree3 from "../../Assets/Images/Trees/2.jpg";
import Tree4 from "../../Assets/Images/Trees/3.jpg";
import Tree5 from "../../Assets/Images/Trees/4.jpg";
import Tree6 from "../../Assets/Images/Trees/5.jpg";
import Tree7 from "../../Assets/Images/Trees/6.jpg";
import Tree8 from "../../Assets/Images/Trees/7.jpg";
import Tree9 from "../../Assets/Images/Trees/8.jpg";
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
    ifs,
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
    climbers,
    creepers,
    flowers,
    fruits,
    indoor,
    medicinalplants,
    outdoorPlants,
    shrubs,
    trees,
  } = navContent();

  const transform = (node) => {
    if (node.type === "tag" && node.name === "div") {
      if (node.attribs?.class === "image-gallery-diary") {
        return <ImageGallery images={[Dairy1, Dairy2, Dairy3]} />;
      } else if (node.attribs?.class === "image-gallery-sheep") {
        return <ImageGallery images={[Sheep1, Sheep2]} />;
      } else if (node.attribs?.class === "image-gallery-pig") {
        return <ImageGallery images={[Pig1, Pig2]} />;
      } else if (node.attribs?.class === "image-gallery-duck") {
        return <ImageGallery images={[Duck1, Duck2]} />;
      } else if (node.attribs?.class === "image-gallery-climbers") {
        return (
          <ImageGallery images={[Climber1, Climber2, Climber3, Climber4]} />
        );
      } else if (node.attribs?.class === "image-gallery-creepers") {
        return (
          <ImageGallery
            images={[
              Creeper1,
              Creeper2,
              Creeper3,
              Creeper4,
              Creeper5,
              Creeper6,
            ]}
          />
        );
      } else if (node.attribs?.class === "image-gallery-flowers") {
        return <ImageGallery images={[Flower1, Flower2, Flower3, Flower4]} />;
      } else if (node.attribs?.class === "image-gallery-fruits") {
        return <ImageGallery images={[Fruit1, Fruit2, Fruit3, Fruit4]} />;
      } else if (node.attribs?.class === "image-gallery-indoor") {
        return (
          <ImageGallery
            images={[
              Indoor1,
              Indoor2,
              Indoor3,
              Indoor4,
              Indoor5,
              Indoor6,
              Indoor7,
              Indoor8,
              Indoor9,
              Indoor10,
              Indoor11,
              Indoor12,
              Indoor13,
              Indoor14,
              Indoor15,
              Indoor16,
              Indoor17,
              Indoor18,
              Indoor19,
              Indoor20,
            ]}
          />
        );
      } else if (node.attribs?.class === "image-gallery-medicinal") {
        return <ImageGallery images={[Medicinal1, Medicinal2, Medicinal3]} />;
      } else if (node.attribs?.class === "image-gallery-outdoor") {
        return (
          <ImageGallery
            images={[
              Outdoor0,
              Outdoor1,
              Outdoor2,
              Outdoor3,
              Outdoor4,
              Outdoor5,
              Outdoor6,
              Outdoor7,
              Outdoor8,
              Outdoor9,
              Outdoor10,
              Outdoor11,
              Outdoor12,
              Outdoor13,
              Outdoor14,
              Outdoor15,
              Outdoor16,
              Outdoor17,
              Outdoor18,
              Outdoor19,
              Outdoor20,
              Outdoor21,
              Outdoor22,
              Outdoor23,
              Outdoor24,
              Outdoor25,
            ]}
          />
        );
      } else if (node.attribs?.class === "image-gallery-shrubs") {
        return <ImageGallery images={[Shrub1, Shrub2, Shrub3, Shrub4]} />;
      } else if (node.attribs?.class === "image-gallery-trees") {
        return (
          <ImageGallery
            images={[
              Tree1,
              Tree2,
              Tree3,
              Tree4,
              Tree5,
              Tree6,
              Tree7,
              Tree8,
              Tree9,
            ]}
          />
        );
      }
    }
  };

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
      {heading === "Animal Husbandry" &&
        ReactHtmlParser(animalHusb.content, { transform })}
      {heading === "Organic Field" && ReactHtmlParser(organicFarming.content)}
      {heading === "Wet Land" && ReactHtmlParser(wetland.content)}
      {heading === "Orchard" && ReactHtmlParser(orchard.content)}
      {heading === "Garden Land" && ReactHtmlParser(gardenLand.content)}
      {heading === "Dry Land" && ReactHtmlParser(dryLand.content)}
      {heading === "IFS" && ReactHtmlParser(ifs.content)}
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
      {heading === "Climbers" &&
        ReactHtmlParser(climbers.content, { transform })}
      {heading === "Creepers" &&
        ReactHtmlParser(creepers.content, { transform })}
      {heading === "Flowers" && ReactHtmlParser(flowers.content, { transform })}
      {heading === "Fruits" && ReactHtmlParser(fruits.content, { transform })}
      {heading === "Indoor Plants" &&
        ReactHtmlParser(indoor.content, { transform })}
      {heading === "Medicinal Plants" &&
        ReactHtmlParser(medicinalplants.content, { transform })}
      {heading === "Out Door Plants" &&
        ReactHtmlParser(outdoorPlants.content, { transform })}
      {heading === "Shrubs" && ReactHtmlParser(shrubs.content, { transform })}
      {heading === "Trees" && ReactHtmlParser(trees.content, { transform })}
    </div>
  );
};

export default NavContent;
