import React from "react";
import "../styles/DataPortfolio.css";
import APIQUIZ from "../photo/APIQUIZ.png";
import dogs from "../photo/bonnie & misty.png.jpg";
import family from "../photo/family.png";
import tempEngine from "../photo/tempEngine.png";
import weatherDash from "../photo/weatherDash.png";
import workday from "../photo/workday.png";

const DataPortfolio = () => {


    return (

        <picture class="mt-5 row justify-content-center">
            <div data-aos="fade-up-right" class="col-lg-5 col-md-5 col-sm-12 mb-3">
                <div class="col lg-12">
                    <td>
                        <img id="port" src={APIQUIZ}  class="card-img" alt="fredGquiz" />
                    </td>
                    <div class="card-img-overlay">
                        <div class=" mt-5">
                            <a href="https://github.com/fred-smu/APICodeQuiz/" class="btn btn-lg btn-block text-dark">Quiz
                            Game</a>
                        </div>
                    </div>
                </div>
            </div>


            <div data-aos="fade-up-right" class="col-lg-5 col-md-5 col-sm-12 mb-3">
                <div class="col lg-12">
                    <td>
                        <img id="port" src={weatherDash} class="card-img" alt="fredGweather" />
                    </td>
                    <div class="card-img-overlay">
                        <div class="h-100 mt-5">
                            <a href="https://github.com/fred-smu/weatherDash/"
                                class="btn text-dark btn-lg btn-block">Weather App</a>
                        </div>
                    </div>

                </div>
            </div>
            <div data-aos="fade-up-left" class="col-lg-5 col-md-5 col-sm-12 mb-3">

                <div class="col lg-12">
                    <td>
                        <img id="port" src= {tempEngine} class="card-img" alt="fredGEmployee" />
                    </td>
                    <div class="card-img-overlay">
                        <div class="h-100 mt-5">
                            <a href="https://github.com/fred-smu/Template-Engine---Employee-Summary"
                                class="btn  btn-lg btn-block text-light">Template-Engine---Employee-Summary</a>
                        </div>
                    </div>
                </div>
            </div>
     
            <div data-aos="fade-up-left" class="col-lg-5 col-md-5 col-sm-12 mb-3">
                <div class="col lg-12">
                    <td>
                        <img id="port" src= {workday} class="card-img" alt="FredGplanner" />
                    </td>
                    <div class="card-img-overlay">
                        <div class="h-100 mt-5">
                            <a href="https://github.com/fred-smu/WorkDayScheduler/"
                                class="btn btn-lg btn-block text-dark">Day Planner</a>
                        </div>
                    </div>

                </div>
            </div>
            <div data-aos="fade-up-right" class="col-lg-5 col-md-5 col-sm-12 mb-3">
                <div class="col lg-12">
                    <td>
                        <img id="port" src= {family} class="card-img" alt="fredGlifestyle" />
                    </td>
                    <div class="card-img-overlay">
                        <div class="h-100 mt-5">
                            <a href class="btn btn-lg btn-block text-light"> My Family</a>
                        </div>
                    </div>

                </div>
            </div>
            <div data-aos="fade-up-left" class="col-lg-5 col-md-5 col-sm-12 mb-3">
                <div class="col lg-12">
                    <td>
                        <img id="port" src= {dogs} class="card-img" alt="fredGlifestyle" />
                    </td>
                    <div class="card-img-overlay">
                        <div class="h-100 mt-5">
                            <a href class="btn btn-lg btn-block text-light"> Bonnie and Misty</a>
                        </div>
                    </div>

                </div>
            </div>
       </picture>
        

    );
};

export default DataPortfolio;
