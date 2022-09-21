import React from "react";
import "./Roadmap.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
function Roadmap() {
  return (
    <div id="roadmap" className="road2">
      <h1 className="title">Roadmap</h1>
      <Splide
        options={{
          pagination: false,
          arrows: false,
          width: "100%",
          type: "loop",
          gap: "2rem",
          perPage: 3,
          perMove: 1,
          autoplay: true,
          interval: 5000,
          pauseOnHover: false,
          drag: true,
          pauseOnFocus: false,
          breakpoints: {
            1109: {
              perPage: 2,
            },
            900: {
              perPage: 1,
            },
          },
        }}
      >
        <SplideSlide>
          {" "}
          <div className="row-card">
            <h1>Health Screening</h1>
            <img src="./Assets/card-doc.png" alt="" />
            <p>75 VILLAGES HEALTH SCREENING </p>
            <p>AAPI CHAMPION SPONSORS VILLAGE </p>
            <p>IDENTIFY VILLAGE CHAMPION </p>
            <p>
              GLOBAL TELECLINICS-SERVICE PARTNER TO AAPI SCREEN 150-200 PEOPLE
              IN THE VILLAGE ON 13 HEALTH PARAMETERS  
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          {" "}
          <div className="row-card">
            <h1>Data Analysis</h1>
            <img src="./Assets/data.png" alt="" />
            <p>TOP 5 DISEASES</p>
            <p>TOP 5 PRE-CONDITIONS</p>
            <p>LIFE STYLE HISTORY</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          {" "}
          <div className="row-card">
            <h1>Reports</h1>
            <img src="./Assets/chart.png" alt="" />
            <p>HIGH LEVEL SUMMARY REPORTS FOR SPONSOR</p>
            <p>COMPREHENSIVE FINAL REPORT OF 75 VILLAGES</p>
            <p>DEMOGRAPHIC DATA</p>
            <p>STATISTICAL ANALYSIS</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          {" "}
          <div className="row-card">
            <h1>FEASIBILITY STUDY</h1>
            <img src="./Assets/robo.png" alt="" />
            <p>RESOURCE AND INVENTORY</p>
            <p>PILOT</p>
            <p>SUSTAINABLE PPP MODEL</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="row-card">
            <h1>ADOPTION</h1>
            <img src="./Assets/puzzle.png" alt="" />
            <p>AAPI STAKEHOLDERS</p>
            <p>SOCIAL ENTREPRENUERS</p>
            <p>SERVICE PARTNERS</p>
            <p>MICRO CLINICS</p>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Roadmap;
