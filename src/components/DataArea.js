import React from "react";
// import Nav from "./Nav";
// import API from "../utils/API";
import DataBody from "./DataBody";
import "../styles/DataBody.css";
import DataPortfolio from "./DataPortfolio";
import "../styles/DataPortfolio.css";
import DataContact from "./DataContact";
import "../styles/DataContact.css";
// import SearchContext from "../utils/SearchContext";


const DataArea = () => {
 
  
    return (
     
      
      <div className="data-area">
        "hello"
        <DataBody />
        <DataPortfolio />
        <DataContact />
      </div>
     
    );
};

export default DataArea;