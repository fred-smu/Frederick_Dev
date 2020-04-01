import React from "react";
import "../styles/DataContact.css";

const DataContact = () => {
  return (
    <div class="container">
      <h3 id="contact22">Contact</h3>
      <form class="">
        <div class="form-group">
          <label id="contact22" class="label" for="email">Email</label>
          <input type="input" class="form-control .bg-white" id="email" />
        </div>
        <div class="form-group">
          <label id="contact22" class="label" for="message">Message</label>
          <textarea rows="14" cols="10" wrap="soft" type="textarea" class="form-control .bg-white contact1" id="message" />
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