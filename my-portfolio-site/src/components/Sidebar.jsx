import React from "react";
import { Link } from "react-router-dom";
import image from '../assests/images/images (1).png'


const SideBar = () => {
    return (
      <div className="nav-bar">
        <Link>
                <img className="sideBar-image" src={image} alt="" />
                <h2 className="logo-title">ChiefLopes</h2>
        </Link>
      </div>
    );
}

export default SideBar;