import React from "react";
import NavLink from "./NavLink";
import "./NavBar.css";
import image from "../images/image1.jpg";
import NotificationsIcon from "@material-ui/icons/Notifications";
const NavBar = () => {
  return (
    
    <div className="NavBar">
      <h2 id="logo">HA3</h2>
      <NavLink id="nav1" name="PATIENTS" />
      <NavLink name="CALENDAR" />
      <NavLink name="USERS" />
      <NavLink name="BILLING" />
      <div id="right_nav">
        <NotificationsIcon id="bellIcon" />
        <div id="notificationDot"> </div>

        <img className="img1" src={image} alt="person"></img>
      </div>
    </div>
  );
};

export default NavBar;