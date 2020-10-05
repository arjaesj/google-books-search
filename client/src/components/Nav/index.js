import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav id="nav" className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
        Google Books Search
      </a>
      <Link id="search" to="/" className={window.location.pathname === "/" || window.location.pathname === "/" ? "nav-link active" : "nav-link" } > Search Books </Link>
      <Link id="saved" to="/saved" className={window.location.pathname === "/saved" || window.location.pathname === "/saved" ? "nav-link active" : "nav-link" } > Saved Books </Link>
    </nav>
  );
}

export default Nav;
