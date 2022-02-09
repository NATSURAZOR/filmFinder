import React, { useEffect, useState } from "react";
import Nav from "./Nav/Nav";
import Home from "./Search/FindMovie";
import About from "./AboutTheFilm/AboutTheMovie";
import Favorite from "./Favorites/Favorites";
import "./App.css";
import "./Nav/Nav.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" element={Home} />
        <Route path="/movie/:id" element={About} />
        <Route path="/my-favorites" element={Favorite} />
      </div>
    </Router>
  );
};

export default App;
