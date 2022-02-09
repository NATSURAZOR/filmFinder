import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Search Movie</li>
        </Link>
        <Link to="/my-favorites">
          <li>Favorites</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
