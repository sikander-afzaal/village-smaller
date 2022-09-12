import React from "react";
import "./Adopt.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
function Adopt() {
  return (
    <div id="roadmap" className="roadmap">
      <h1 className="title">Adopt a Village</h1>
      <div className="roadmap-grid">
        <Splide
          options={{
            pagination: false,
            arrows: false,
            width: "100%",
            type: "loop",
            perPage: 2,
            perMove: 1,
            autoplay: true,
            interval: 2000,
            pauseOnHover: false,
            drag: true,
            pauseOnFocus: false,
            breakpoints: {
              900: {
                perPage: 1,
              },
            },
          }}
        >
          <Splide>
            <div className="grid-box grid1">
              <img src="./Assets/owner.png" alt="" />
              <h1>IDENTIFY AAPI SPONSOR</h1>
            </div>
          </Splide>
          <SplideSlide>
            <div className="grid-box grid2">
              <img src="./Assets/village.png" alt="" />
              <h1>Adopt a village</h1>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="grid-box grid1">
              <img src="./Assets/doctor.png" alt="" />
              <h1>Identify village champion</h1>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="grid-box grid2">
              <img src="./Assets/working.png" alt="" />
              <h1>Champions's work with global teleclinics</h1>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="grid-box grid1">
              <img src="./Assets/tool.webp" alt="" />
              <h1>Screening of health conditions</h1>
              <p>
                PARAMETERS SCREENED: HEMOGLOBIN,LIPID
                PROFILE,CREATININE,HEMOGLOBIN A1C, HEIGHT,WEIGHT,BMI,BLOOD
                PRESSURE, TEMPERATURE,PULSE,PULSE OXIMETRY,,BLOOD SUGAR
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="grid-box grid2">
              <img src="./Assets/ana.svg" alt="" />
              <h1>analyse data and provide virtual primary care</h1>
              <p>
                Data will help us identify health conditions, global teleclinics
                to provide In person/ virtual primary care support to positive
                patients with disease.
              </p>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default Adopt;
