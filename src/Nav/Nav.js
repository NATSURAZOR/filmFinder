import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
<<<<<<< HEAD
        <Link className="nav-link" id="favorites" to="/">
          <li>
            <h2>Search Movie</h2>
          </li>
        </Link>
        <Link className="nav-link" id="search-movie" to="/my-favorites">
          <li>
            <h2>Favorites</h2>
          </li>
=======
        <Link to="/">
          <li>Search Movie</li>
        </Link>
        <Link to="/my-favorites">
          <li>Favorites</li>
>>>>>>> 4d1a88e00d4db9fa2409577686fc512ce0922ffc
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
