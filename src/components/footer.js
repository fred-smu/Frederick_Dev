import React from "react";
import "../styles/footer.css";


const footer = () => {


    return (
        <div className="container">
            <div id = "footerRow" className="row">
                <footer className="col-12 footer-copyright text-center py-5">
                    <a className="fa fab fa-github fa-2x nav-link" href="https://github.com/fred-smu">.</a>
                    © Copyright
                    <a className="fa fab fa-linkedin fa-2x nav-link" href="https://www.linkedin.com/in/fredguthrieiii/">.</a>
                </footer>
            </div>
        </div>

    );
};

export default footer;