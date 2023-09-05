import React from "react";
import { Link, NavLink} from "react-router-dom";
import image from "../assests/images/images (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = () => {
  return (
    <div className="nav-bar">
      <Link>
        <img className="sideBar-image" src={image} alt="" />
        <h2 className="logo-title">ChiefLopes</h2>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to='/'></NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
