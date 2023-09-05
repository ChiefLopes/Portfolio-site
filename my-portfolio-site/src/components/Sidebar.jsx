import React from "react";
import { Link, NavLink} from "react-router-dom";
import image from "../assests/images/images (1).png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const SideBar = () => {
  return (
    <div className="nav-bar">
      <Link>
        <img className="sideBar-image" src={image} alt="" />
        <h2 className="logo-title">ChiefLopes</h2>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} size="2x" color="#8d3d3e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faUser} size="2x" color="#8d3d3e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faEnvelope} size="2x" color="#8d3d3e" />
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
