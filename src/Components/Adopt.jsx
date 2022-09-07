import React from "react";
import "./Adopt.css";
function Adopt() {
  return (
    <div id="roadmap" className="roadmap">
      <h1 className="title">Adopt a Village</h1>
      <div className="roadmap-grid">
        <div className="mob"></div>
        <div className="vertical-line"></div>
        <div className="mob"></div>
        <div className="grid-box grid1">
          <img src="./Assets/owner.png" alt="" />
          <h1>IDENTIFY AAPI SPONSER</h1>
        </div>
        <div className="wrapper">
          <div className="circle-grid"></div>
          <div className="vertical-line"></div>
        </div>
        <div className="mob"></div>

        <div className="mob"></div>
        <div className="wrapper">
          <div className="circle-grid"></div>
          <div className="vertical-line"></div>
        </div>
        <div className="grid-box grid2">
          <img src="./Assets/village.png" alt="" />
          <h1>Adopt a village</h1>
        </div>
        <div className="grid-box grid1">
          <img src="./Assets/doctor.png" alt="" />
          <h1>Identify village champion</h1>
        </div>
        <div className="wrapper">
          <div className="circle-grid"></div>
          <div className="vertical-line"></div>
        </div>
        <div className="mob"></div>

        <div className="mob"></div>
        <div className="wrapper">
          <div className="circle-grid"></div>
          <div className="vertical-line"></div>
        </div>
        <div className="grid-box grid2">
          <img src="./Assets/working.png" alt="" />
          <h1>Champions's work with global teleclinics</h1>
        </div>

        <div className="grid-box grid1">
          <img src="./Assets/tool.webp" alt="" />
          <h1>Screening of health conditions</h1>
          <p>
            PARAMETERS SCREENED: HEMOGLOBIN,LIPID PROFILE,CREATININE,HEMOGLOBIN
            A1C, HEIGHT,WEIGHT,BMI,BLOOD PRESSURE, TEMPERATURE,PULSE,PULSE
            OXIMETRY,,BLOOD SUGAR
          </p>
        </div>
        <div className="wrapper">
          <div className="circle-grid"></div>
          <div className="vertical-line"></div>
        </div>
        <div className="mob"></div>
        <div className="wrapper">
          <div className="circle-grid"></div>
          <div className="vertical-line"></div>
        </div>
        <div className="grid-box grid2">
          <img src="./Assets/ana.svg" alt="" />
          <h1>analyse data and provide virtual primary care</h1>
          <p>
            Data will help us identify health conditions, global teleclinics to
            provide In person/ virtual primary care support to positive patients
            with disease.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Adopt;
