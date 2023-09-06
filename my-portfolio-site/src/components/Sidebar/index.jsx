import React from "react"
import "./index.scss";
import { Link } from "react-router-dom";
import logo from '../../assets/images/dice.jpg'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
              <img className="sideBar-image" src={logo} alt="" />
              <h2>Mufasa.Don</h2>
      </Link>
    </div>
  );
};

export default Sidebar;
