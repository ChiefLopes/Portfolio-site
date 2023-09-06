import React from "react"
import "./index.scss";
import { Link } from "react-router-dom";
import logo from '../../assets/images/dice.jpg'

const Sidebar = () => {
  return (
    <div>
          <Link className="logo" to='/'>
              <img src={logo} alt="" />
          </Link>
    </div>
  );
};

export default Sidebar;
