import React from "react";
// import "../styles/DataContact.css";

const DataContact = () => {
  // document.getElementById("NavAbout").className = " nav-item";
  // document.getElementById("NavContact").className = " nav-item active ";
  // document.getElementById("NavPortfolio").className = " nav-item";

  return (
    <div class="container">
      <h3>Contact</h3>
      <form class="">
        <div class="form-group">
          <label id="lable" class="label" for="email">Email</label>
          <input type="input" class="form-control .bg-white" id="email" />
        </div>
        <div class="form-group">
          <label id="lable" class="label" for="message">Message</label>
          <input type="textarea" class="form-control .bg-white contact1" id="message" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default DataContact;
/*****************************8
 *
 *




        </div>


 *
 */