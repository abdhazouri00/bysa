import React from "react";
import { NavLink } from "react-router";
import { assets } from "./../assets/assets";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-row justify-evenly">
        <li className="mt-4">
          <NavLink to="/">
            <div className="p-[10px]">
              <img src={assets.home} />
            </div>
          </NavLink>
        </li>
        <li className="mt-4">
          <NavLink to="/chats">
            <div className="p-[10px]">
              <img src={assets.message} />
            </div>
          </NavLink>
        </li>
        <li className="mt-4">
          <NavLink to="/newproject">
            <div className="p-[10px]">
              <img src={assets.plus} />
            </div>
          </NavLink>
        </li>
        <li className="mt-4">
          <NavLink to="/profile">
            <div className="p-[10px]">
              <img width="22px" height="26px" src={assets.profileImgNavbar} />
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
