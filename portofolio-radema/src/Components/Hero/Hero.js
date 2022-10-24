import React from "react";
import Typical from "react-typical";
import "./Hero.css";

function Hero() {
  return (
    <div className="profile-container" id="Hero">
      <div className="profile-parent">
        <div className="profie-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm{" "}
              <span className="highlighted-text">Radema Panjaitan</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primaryname">
              {""}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Freshgraduate👩‍🎓",
                    3000,
                    "D3 Teknologi Komputer",
                    3000,
                    "Angkatan 2019",
                    3000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Saya merupakan freshgraduate dari IT DEL
              </span>
            </span>
          </div>
          <div className="profile-options">
            {/* <button className="btn primary-btn">
              {""}
              Hire Me {""}
            </button> */}
            <a
              href="Radema Panjaitan-Curriculum Vitae.pdf"
              download="Radema Panjaitan-Curriculum Vitae.pdf"
            >
              <button className="btn highlighted-btn">Get resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
