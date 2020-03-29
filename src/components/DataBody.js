import React from "react";
import "../styles/DataBody.css";
import ME from "../photo/tranback.png";




const DataBody = () => {
 
  // document.getElementById("NavAbout").className = " nav-item active ";
  // document.getElementById("NavContact").className = " nav-item";
  // document.getElementById("NavPortfolio").className = " nav-item";
  return (
    
    <div class="container">
      <div class="row">        <div class="col">
          <div class="card .bg-transparent" >
            <td>
            <img id="me" src= {ME}  class="card-img-top" alt="my_photo" />
            </td>
            <div class="card-body .bg-transparent">
              <h5 class="card-title">About me</h5>
              <p class="card-text">I am a full stack web developer with certificate from SMU, where I was educated and certified in: HTML5, CSS3, 
                JavaScript, jQuery, Node.js, Java, Express.js, React.js, Database Theory, MongoDB, MySQL, Git, and more. I have taken the developers 
                coding bootcamp because technology changes and improves every year and it was time for me to update my skills. I have decided to expand 
                my horizons though Webpage development. I have over 10 years of backend development with many languages like Java,C#, C++ and many 
                operation system like Unix and Windows along with many databases. I started my career in 1980 while I was in Military Intelligence working
                 in electronic warfare and advanced though programing, networking, operation and management. I also hold a master’s degree in information 
                 management. Changing programing languages is easy to me. I believe in pseudo-coding and then from there every programing language is just
                  a matter of syntax. My brand is “When you need the one person to pull everything together, 
                          I’m your man”.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataBody;
