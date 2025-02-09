import React from "react";
import Hostel1 from "../../../Assets/Images/Hostel/hostel1.jpg";
import Hostel2 from "../../../Assets/Images/Hostel/hostel2.jpg";
import Hostel3 from "../../../Assets/Images/Hostel/hostel3.png";
import Hostel4 from "../../../Assets/Images/Hostel/hostel4.jpg";
import ImageGallery from "../../InnerNavGallery/ImageGallery";

const Hostel = () => {
  return (
    <div>
      <br/>
      <p>
        We provide world class hostel facilities with spacious rooms. The hostel
        entrance is vast and greenly to go with the environment. The hostels are
        highly secure with experienced wardens and hostel staffs for students
        comfort living.
      </p>
      <h4>Boys Hostel</h4>
      <table>
        <thead>
          <tr>
            <td>S.No</td>
            <td>Hostel Name</td>
            <td>Three Sharing Rooms</td>
            <td>Four Sharing Rooms</td>
            <td>Capacity</td>
            <td>Occupancy</td>
            <td>Others</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Koutilya</td>
            <td>66</td>
            <td>4</td>
            <td>214</td>
            <td>103</td>
            <td>
              <ul>
                <li>1 Deputy Warden Room</li>
                <li>1 Store Room</li>
                <li>1 Sick Room</li>
                <li>1 Newspaper Reading Room</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <h4>Girls Hostel</h4>
      <table>
        <thead>
          <tr>
            <td>S.No</td>
            <td>Hostel Name</td>
            <td>Three Sharing Rooms</td>
            <td>Four Sharing Rooms</td>
            <td>Capacity</td>
            <td>Occupancy</td>
            <td>Others</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Sangamitra</td>
            <td>4</td> <td>98</td>
            <td>102</td>
            <td>170</td>
            <td>
              <ul>
                <li>2 Deputy Warden Room</li>
                <li>1 Store Room</li>
                <li>1 Sick Room</li>
                <li>1 Newspaper Reading Room</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <ImageGallery images={[Hostel1, Hostel2, Hostel3, Hostel4]} />
    </div>
  );
};

export default Hostel;
