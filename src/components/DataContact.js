import React from "react";
import "../styles/DataContact.css";

const DataContact = () => {
  return (
    <div className="container">
      <h3 id="contact22">Contact</h3>
      <form className="">
        <div className="form-group">
          <label id="contact22" className="label" for="email">Email</label>
          <input type="input" className="form-control .bg-white" id="email" />
        </div>
        <div className="form-group">
          <label id="contact22" className="label" for="message">Message</label>
          <textarea rows="14" cols="10" wrap="soft" type="textarea" className="form-control .bg-white contact1" id="message" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default DataContact;
