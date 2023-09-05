import React from "react";
import { Link } from "react-router-dom";
import image from '../assests/images/images (1).png'


const SideBar = () => {
    return (
      <div className="nav-bar">
        <Link>
          <img className="sideBar-image" src={image} alt="" />
        </Link>
      </div>
    );
}

export default SideBar;