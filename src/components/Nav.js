import React from "react";
// import "../styles/Nav.css";

function Nav() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand"  >Frederick Clayton Guthrie III</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li id="NavAbout" className={
                window.location.pathname === "/React-portfolio/" 
                  ? "nav-link active"
                  : "nav-link"
              }>
            <a className="nav-link About" href="/React-portfolio/">About </a>
          </li>
          <li id="NavContact" className={
                window.location.pathname === "/React-portfolio/contact"
                  ? "nav-link active"
                  : "nav-link"
              }>
            <a className="nav-link " href="/React-portfolio/contact">Contact <span class="sr-only">(current)</span></a>
          </li>
          <li  id="NavPortfolio" className={
                window.location.pathname === "/React-portfolio/portFolio" 
                  ? "nav-link active"
                  : "nav-link"
              }>
            <a className="nav-link " href="/React-portfolio/portFolio">Portfolio <span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
