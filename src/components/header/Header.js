import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">CineFlix</span>
        </Link>
      </div>
      <div className="headerCenter">
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>POPULAR</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>TOP RATED</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>UPCOMING</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
