import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link className="nav-link" id="favorites" to="/">
          <li>
            <h2>Search Movie</h2>
          </li>
        </Link>
        <Link className="nav-link" id="search-movie" to="/my-favorites">
          <li>
            <h2>Favorites</h2>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
