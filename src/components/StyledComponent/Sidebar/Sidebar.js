import React from "react";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BsViewList } from "react-icons/bs";
import { MdLocalMovies } from "react-icons/md";
import { RiSlideshow3Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

export const Sidebar = () => {
  return (
    <div className="nav">
      <ul className="navbar-nav">
        <li className="nav-items">
          <NavLink to="/search">
            <div className="icon">
              <AiOutlineSearch />
            </div>
            {/* <span className="link-text">Search</span> */}
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink to="/">
            <div className="icon">
              <AiFillHome />
            </div>
            {/* <span className="link-text">Home</span> */}
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink to="/movies">
            <div className="icon">
              <MdLocalMovies />
            </div>
            {/* <span className="link-text">Movies</span> */}
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink to="/tv">
            <div className="icon">
              <RiSlideshow3Fill />
            </div>
            {/* <span className="link-text">TV Shows</span> */}
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink to="/wishlist">
            <div className="icon">
              <BsViewList />
            </div>
            {/* <span className="link-text">My List</span> */}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
