import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/Lunix.png";
import logotxt from "../../assets/images/Lunixslo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faUser,
  faLink,
  faSms,
  faX,
  faFaceMeh,
} from "@fortawesome/free-solid-svg-icons";

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
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/ChiefLopes">
            <FontAwesomeIcon icon={faFaceMeh} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="linkedin.com/in/louis-peace-75631925b">
            <FontAwesomeIcon icon={faLink} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/ChiefLopes">
            <FontAwesomeIcon icon={faSms} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.twitter.com/ChiefLopes">
            <FontAwesomeIcon icon={faX} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
