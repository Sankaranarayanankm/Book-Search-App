import React from "react";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="title">
        <MenuBookRoundedIcon />
        <h1>BookFinder</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName='active' to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to="/about">About</NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
