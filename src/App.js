import React from "react";
import Nav from "./Nav/Nav";
import Home from "./Search/FindMovie";
import Detail from "./Movie Detail/MovieDetail";
import Favorite from "./Favorites/Favorites";
import "./Nav/Nav.css";
import "./Search/Search.css";
import "./Search/SearchMediaQuery.css";
import "./Movie Detail/MovieDetail.css";
import "./Movie Detail/MovieDetaicMediaQuery.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./Favorites/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Detail />} />
            <Route path="/my-favorites" element={<Favorite />} />
          </Routes>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
