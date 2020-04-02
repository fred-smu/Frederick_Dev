import React from "react";
import { Link } from "react-router-dom";
// import "../styles/Nav.css";

function Nav() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">Frederick Clayton Guthrie III</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li id="NavAbout">
            
              <Link to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "https://fred-smu.github.io/React-portfolio/"
                  ? "nav-link active"
                  : "nav-link"
              }>About</Link>

          </li>
          <li id="NavContact" >
           
            <Link to="/contact"
            className={
              window.location.pathname === "/contact"
                ? "nav-link active"
                : "nav-link"
            }>Contact</Link>
          </li>
          <li  id="NavPortfolio">
          <Link to="/portFolio"
            className={
              window.location.pathname === "/portFolio" || window.location.pathname === "https://fred-smu.github.io/portFolio"
                ? "nav-link active"
                : "nav-link"
            }>PortFolio</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
