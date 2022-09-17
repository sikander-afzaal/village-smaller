import React from "react";
import "./Adopt.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
function Adopt() {
  return (
    <div id="adopt" className="roadmap">
      <h1 className="title">Adopt a Village</h1>
      <div className="roadmap-grid">
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
            interval: 2000,
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
              <img src="./Assets/find.svg" alt="" />
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
              <ul>
                <li>
                  Vitals: Blood Pressure, Pulse, Pulse Oximetry, Height, Weight,
                  BMI
                </li>
                <li>
                  Labs: Hemoglobin, Blood Sugar, HBA1C, Creatinine, Lipid
                  Profile
                </li>
              </ul>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="grid-box grid2">
              <img src="./Assets/ana.svg" alt="" />
              <h1>analyse data and provide virtual primary care</h1>
              <p>
                Data will help us identify health conditions and Global
                Teleclinics will provide in person and virtual primary care for
                patients with disease
              </p>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default Adopt;
