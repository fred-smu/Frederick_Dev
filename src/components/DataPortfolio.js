import React from "react";
import "../styles/DataPortfolio.css";
import APIQUIZ from "../photo/APIQUIZ.png";
import tempEngine from "../photo/tempEngine.png";
import weatherDash from "../photo/weatherDash.png";
import workday from "../photo/workday.png";
import budget from "../photo/budgetTracker.png";
import TP from "../photo/login.png";
import Project1 from "../photo/project1.png";
import burger from "../photo/burger.png";


const DataPortfolio = () => {


     return (

        <picture className="mt-5 row justify-content-center">
            <div className="col-lg-5 col-md-5 col-sm-12 mb-3">
                <div className="col lg-12">
                        <img id="port" src= {burger} className="card-img" alt="fredGlifestyle" />
                    <div className="card-img-overlay">
                        <div className="h-100 mt-5">
                             <a href="https://github.com/fred-smu/burger" 
                            className="btn btn-lg btn-block text-dark"> GitHub Link: Burger</a>
                            <a href="https://gentle-peak-62776.herokuapp.com/" 
                            className="btn btn-lg btn-block text-dark"> Deployed Link: Burger</a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 mb-3">
                <div className="col lg-12">
                    {/* <td> */}
                        <img id="port" src= {TP} className="card-img" alt="fredGlifestyle" />
                    {/* </td> */}
                    <div className="card-img-overlay">
                        <div className="h-100 mt-5">
                        
                            <a href="https://github.com/fred-smu/TP-Express" 
                            className="btn btn-lg btn-block text-dark"> GitHub Link: TP Express</a>
                            <a href="https://arcane-chamber-47434.herokuapp.com/" 
                            className="btn btn-lg btn-block text-dark"> Deployed Link: TP Express</a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 mb-3">
                <div className="col lg-12">
                    {/* <td> */}
                        <img id="port" src= {Project1} className="card-img" alt="fredGlifestyle" />
                    {/* </td> */}
                    <div className="card-img-overlay">
                        <div className="h-100 mt-5">
                            <a href="https://github.com/fred-smu/project1.1" 
                            className="btn btn-lg btn-block text-dark">GitHub Link: Project1.1</a>
                            {/* <a href="https://lit-escarpment-52457.herokuapp.com/" 
                            className="btn btn-lg btn-block text-dark">Deployed Link: Project1.1</a> */}
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 mb-3">
                <div className="col lg-12">
                        <img id="port" src= {budget} className="card-img" alt="fredGlifestyle" />
                    <div className="card-img-overlay">
                        <div className="h-100 mt-5">
                            <a href="https://github.com/fred-smu/Budget-Trackers" 
                            className="btn btn-lg btn-block text-dark">GitHub Link: Budget Tracker</a>
                            <a href="https://lit-escarpment-52457.herokuapp.com/" 
                            className="btn btn-lg btn-block text-dark">Deployed Link: Budget Tracker</a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 mb-3">
                <div className="col lg-12">
                    
                        <img id="port" src={APIQUIZ}  className="card-img" alt="fredGquiz" />
                    
                    <div className="card-img-overlay">
                        <div className=" mt-5">
                            <a href="https://github.com/fred-smu/APICodeQuiz/" 
                            className="btn btn-lg btn-block text-dark">GitHub Link:Quiz Game</a>
                        </div>
                    </div>

                </div>
            </div>

           
             <div className="col-lg-5 col-md-5 col-sm-12 mb-3">
                <div className="col lg-12">
                    {/* <td> */}
                        <img id="port" src={weatherDash} className="card-img" alt="fredGweather" />
                    {/* </td> */}
                    <div className="card-img-overlay">
                        <div className="h-100 mt-5">
                            <a href="https://github.com/fred-smu/weatherDash/"
                                className="btn text-dark btn-lg btn-block">GitHub Link:Weather App</a>
                        </div>
                    </div>

                </div>
            </div>
             <div className="col-lg-5 col-md-5 col-sm-12 mb-3">

                <div className="col lg-12">
                    {/* <td> */}
                        <img id="port" src= {tempEngine} className="card-img" alt="fredGEmployee" />
                    {/* </td> */}
                    <div className="card-img-overlay">
                        <div className="h-100 mt-5">
                            <a href="https://github.com/fred-smu/Template-Engine---Employee-Summary"
                                className="btn  btn-lg btn-block text-light">GitHub Link:Template-Engine---Employee-Summary</a>
                        </div>
                    </div>
                </div>
            </div>
     
             <div className="col-lg-5 col-md-5 col-sm-12 mb-3">
                <div className="col lg-12">
                    {/* <td> */}
                        <img id="port" src= {workday} className="card-img" alt="FredGplanner" />
                    {/* </td> */}
                    <div className="card-img-overlay">
                        <div className="h-100 mt-5">
                            <a href="https://github.com/fred-smu/WorkDayScheduler/"
                                className="btn btn-lg btn-block text-dark">GitHub Link:Day Planner</a>
                        </div>
                    </div>

                </div>
            </div>

            {/* <div className="col-lg-5 col-md-5 col-sm-12 mb-3">
                <div className="col lg-12">
                    
                        <img id="port" src= {family} className="card-img" alt="fredGlifestyle" />
                    
                    <div className="card-img-overlay">
                        <div className="h-100 mt-5">
                            <a href={family} className="btn btn-lg btn-block text-light"> My Family</a>
                        </div>
                    </div>

                </div>
            </div>
             <div className="col-lg-5 col-md-5 col-sm-12 mb-3">
                <div className="col lg-12">
                    
                        <img id="port" src= {dogs} className="card-img" alt="fredGlifestyle" />
                    
                    <div className="card-img-overlay">
                        <div className="h-100 mt-5">
                            <a href={dogs} className="btn btn-lg btn-block text-light"> Bonnie and Misty</a>
                        </div>
                    </div>

                </div>
            </div> */}
       </picture>

     
       
    );
};

export default DataPortfolio;
