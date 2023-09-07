import React from "react";
import "./index.scss";
import { Link, NavLink, Router} from "react-router-dom";
import logo from "../../assets/images/Lunix.png";
import logotxt from '../../assets/images/Lunixslo.png'
import { FontAwesome, FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={logo} alt="" />
        <img className="logotxt" src={logotxt} alt="" />
      </Link>
      <nav>
        <NavLink exact="true" className="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d3e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/">
          <FontAwesomeIcon icon={faUser} color="#4d4d3e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d3e" />
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
