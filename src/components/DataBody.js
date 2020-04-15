import React from "react";
import "../styles/DataBody.css";
import ME from "../photo/tranback.png";

const DataBody = () => {
   return (
    
    <div className="container">
      <div className="row">        <div className="col">
          <div id ="card" className="card .bg-transparent" >
            <a >
            <img id="me" src= {ME}  className="card-img-top" alt="my_photo" />
            </a>
            <div className="card-body .bg-transparent">
              <h5 className="card-title">About me</h5>
              <p className="card-text mb-3">
                "      I am a full stack web developer with certificate from SMU, 
                where I was educated and certified in: HTML5, CSS3, 
                JavaScript, jQuery, Node.js, Java, Express.js, React.js, 
                Database Theory, MongoDB, MySQL, Git, and more."</p>
                <p className="card-text2 mb-3">
                      I have taken the developers coding bootcamp because technology 
                  changes and improves every year and it was time for me to update 
                  my skills. I have decided to expand my horizons though Webpage 
                  development. I have over 10 years of backend development with 
                  many languages like Java,C#, C++ and many operation system like
                   Unix and Windows along with many databases. 
                   </p>
                   <p className="card-text3 mb-3">
                I started my career in 1980 while I was in Military Intelligence 
                working in electronic warfare and advanced though programing, 
                networking, operation and management. I also hold a master’s 
                degree in information management. Changing programing languages 
                is easy to me. I believe in pseudo-coding and then from there every
                 programing language is just a matter of syntax. </p>
                 <p className="card-text4 mb-3">
                 My brand is “When you need the one person to pull everything together, 
                          I’m your man”.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataBody;
