import React from "react";
import "../styles/Nav.css";

function Nav() {
  
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href >Frederick Clayton Guthrie III</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li id="NavAbout" class="nav-item active ">
            <a class="nav-link About" href="./">About </a>
          </li>
          <li id="NavContact" class=" nav-item">
            <a class="nav-link " href="./contact">Contact <span class="sr-only">(current)</span></a>
          </li>
          <li  id = "NavPortfolio" class=" nav-item">
            <a class="nav-link " href="./portFolio">Portfolio <span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
