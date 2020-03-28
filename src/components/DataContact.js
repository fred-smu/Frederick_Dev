import React from "react";
import "../styles/DataDataContact.css";

const DataContact = () => {
  return (
    <div class="container">
      <h3>Contact</h3>
      <form class=""></form>
        <div class="form-group">
          <label id="lable" class="label" for="name">Name</label>
          <input type="email" class="form-control .bg-white" id="name" >
        </div>
        <div class="form-group">
          <label id="lable" class="label" for="email">Email</label>
          <input type="input" class="form-control .bg-white" id="email" >
        </div>
        <div class="form-group">
          <label id="lable" class="label" for="message">Message</label>
          <input style="height: 15rem;" type="textarea" class="form-control .bg-white" id="message" >
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default DataContact;
