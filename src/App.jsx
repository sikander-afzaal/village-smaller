import "./App.css";
import Adopt from "./Components/Adopt";
import Roadmap from "./Components/Roadmap";
import Card from "./Components/Card";
import { data } from "./data";
import { useState } from "react";
import Modal from "./Components/Modal";
function App() {
  const [gallery, setGallery] = useState(false);
  const [images, setImages] = useState([]);
  const [state, setState] = useState("");
  return (
    <div className="App">
      <div className="wrapper">
        <div className="navbar">
          <div className="logo-box">
            <img src="./Assets/logo.png" alt="" />
          </div>
          <div className="nav-links">
            <a href="#">Phases</a>
            <a href="#">Adopt</a>
            <a href="#">Roadmap</a>
            <a href="#">Reports</a>
          </div>
          <div className="logo-box">
            <img src="./Assets/logo2.png" alt="" />
          </div>
        </div>
        <div className="top-wrap">
          <div className="right-top">
            <h1>AMERICAN ASSOCIATION OF PHYSICIANS OF INDIAN ORIGIN</h1>
            <div className="row">
              <div className="profile-card">
                <img src="/Assets/profile1.jpeg" alt="" />
                <h2>Dr. Anupama Gotimukula</h2>
                <p>
                  AAPI PRESIDENT <br /> 2021-2022
                </p>
              </div>
              <div className="profile-card">
                <img src="/Assets/profile2.png" alt="" />
                <h2>Dr. Ravi Kolli</h2>
                <p>
                  AAPI PRESIDENT <br /> 2022-2023
                </p>
              </div>
              <div className="profile-card">
                <img src="/Assets/profile3.jpeg" alt="" />
                <h2>Dr.Satish Kathula</h2>
                <p>
                  Chair, Adopt a Village <br /> Program
                </p>
              </div>
            </div>
            <h2>In partnership with Global Teleclinics (GTC)</h2>
            <div className="profile-row">
              <div className="profile-card">
                <img className="gokula" src="/Assets/gokula.jpg" alt="" />
                <h2>Dr. Murthy Gokula</h2>
                <p>Founder & Director GTC</p>
              </div>
              <div className="profile-card">
                <img className="gokula" src="/Assets/gunu.jpeg" alt="" />
                <h2>Gunukula Laxma Reddy</h2>
                <p>Director-Field Operations GTC</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero">
          <div className="left-hero">
            <h1>AAPI ADOPT A VILLAGE PROJECT</h1>
            <h3>
              DIGITAL INTEGRATED PREVENTION AND MANAGEMENT PROGRAM(DIPAM){" "}
            </h3>
            <img
              style={{ borderRadius: "20px" }}
              src="./Assets/hands.webp"
              alt=""
            />
            <p style={{ fontWeight: "bold", color: "black" }}>
              BRING LIGHT THROUGH HEALING HANDS{" "}
            </p>
          </div>

          <div className="quote">
            <h4>
              Ask not what your country can do for you. ask what you can do for
              your country. <br /> Join us to Adopt a village and contribute to
              the change
            </h4>
            <a
              style={{ textDecoration: "none" }}
              href="https://aapiusa.org/adopt-a-village/"
              target={"blank"}
            >
              <button className="donate">Donate Now</button>
            </a>
          </div>
        </div>
        <div className="objectives">
          <div className="objective">
            <h1>Mission:</h1>
            <p>
              To bring Non-Communicable Diseases (NCDs) screening and prevention
              to rural people at their door steps of India
            </p>
          </div>
          <div className="objective">
            <h1>Vision:</h1>
            <p>
              Raise awareness of disease management and reversal of
              Non-Communicable Diseases to Improve health outcomes and connect
              rural India with medical providers and partners.
            </p>
          </div>
          <div className="objective">
            <h1>Goal:</h1>
            <p>
              Screen 75 villages for; Hypertension, Diabetes, Anemia, Chronic
              Kidney disease, Hyperlipidemia on the eve of 75 years of
              Independence .
            </p>
          </div>
          <div className="objective">
            <h1>Progress so Far:</h1>
            <p>Screened number of villages:49 </p>
            <p>Total Patients screened:{">"}6000</p>
          </div>
        </div>
        <div className="phases-wrapper">
          <h2>Phases</h2>
          <div className="phases">
            <div className="objective">
              <h1>Phase 1</h1>
              <p>Screen for Disease using labs</p>
            </div>
            <div className="objective">
              <h1>Phase 2</h1>
              <p>
                Start primary & preventive care for the positive patients with
                disease
              </p>
            </div>
            <div className="objective">
              <h1>Phase 3</h1>
              <p>
                Create a self sustaining model through low cost self pay model
              </p>
            </div>
          </div>
        </div>
        <Adopt />
        <Roadmap />
        <div className="reports">
          <h1 className="title">PHASE 1 RESULTS AND REPORTS</h1>
          {gallery && <Modal setHeader={setGallery} images={images} />}
          <div className="btn-div">
            <button
              onClick={() => {
                setState("telangana");
              }}
              className="dark-green"
            >
              Telangana
            </button>
            <button
              onClick={() => {
                setState("gujrat");
              }}
              className="dark-blue"
            >
              Gujarat
            </button>
            <button
              onClick={() => {
                setState("andhrapradesh");
              }}
              className="dark-yellow"
            >
              andhrapradesh
            </button>
            <button
              onClick={() => {
                setState("karnataka");
              }}
              className="dark-brown"
            >
              karnataka
            </button>
          </div>
          <div className="cards">
            {state === "telangana" &&
              data.telangana.map((elem, idx) => {
                return (
                  <Card
                    key={"idx" + idx + elem.name}
                    {...elem}
                    setGallery={setGallery}
                    setImages={setImages}
                  />
                );
              })}
            {state === "gujrat" &&
              data.gujrat.map((elem, idx) => {
                return (
                  <Card
                    key={"idx" + idx + elem.name}
                    {...elem}
                    setGallery={setGallery}
                    setImages={setImages}
                  />
                );
              })}
            {state === "andhrapradesh" &&
              data.andhrapradesh.map((elem, idx) => {
                return (
                  <Card
                    key={"idx" + idx + elem.name}
                    {...elem}
                    setGallery={setGallery}
                    setImages={setImages}
                  />
                );
              })}
            {state === "karnataka" &&
              data.karnataka.map((elem, idx) => {
                return (
                  <Card
                    key={"idx" + idx + elem.name}
                    {...elem}
                    setGallery={setGallery}
                    setImages={setImages}
                  />
                );
              })}
          </div>
        </div>
        <div className="phase2">
          <h1 className="title">Phase 2 of the Project</h1>
          <p style={{ fontWeight: "bold" }}>
            DIGITAL INTEGRATED PREVENTION AND MANAGEMENT PROGRAM(DIPAM)
          </p>
          <div className="card-grid">
            <h2 className="down right">
              SCREENING DONE WITH LAB TESTS IN VILLAGE
            </h2>
            <h2 className="down right">
              MD/MBBS DOCTOR WILL DO IN PERSON VISIT OF ALL PATIENTS IN THE
              VILLAGE MONTHLY AND DOCUMENT IN EMR
            </h2>
            <h2 className="down">
              PATIENT CAN CALL DIGITAL CLINIC DAILY EVENING (6-8 PM IST) FOR
              MEDICAL ISSUES DURING THE 3 MONTH PILOT PROGRAM
            </h2>
            <h2 className="down">
              POSITIVE PATIENTS FOR NON-COMMUNICABLE DISEASES WILL HAVE A CHART
              IN EMR
            </h2>
            <h2 className="mob-down">
              GTC-AAPI SAATHI WILL FOLLOW UP WEEKLY WITH THE PATIENT AND MONITOR
              EFFECTIVENESS, COMPLIANCE, SIDE EFFECTS OF MEDICATIONS.
            </h2>{" "}
            <h2 className="mob-down">
              MEDICATIONS AND HEALTH EDUCATION GIVEN TO PATIENT ON DISEASE AND
              MEDICATIONS THROUGH SAATHI APP
            </h2>
            <h2>LABS WILL BE REPEATED IN 3 MONTHS</h2>
          </div>
        </div>
        <div className="list">
          <h1 className="title">AAPI-GTC DIPAM CLINIC PROCESS</h1>
          <ul>
            <li className="list-box">
              {" "}
              GTC will have a white Labeled platform to document visits in EMR
              from Nano Health
            </li>

            <li className="list-box">
              In person and Telemedicine visits will deliver disease management
              and disease reversal
            </li>

            <li className="list-box">
              Doctor and other care team members will document in the EMR
            </li>

            <li className="list-box">
              Labs will be uploaded for all the patient with disease
            </li>

            <li className="list-box">
              History & Physical done in the First month. Follow up monthly
              telemedicine visits. Acute visits and daily communication through
              AAPI-GTC DIPAM Telemedicine platform
            </li>

            <li className="list-box">
              Health care worker/champion (SAATHI) will be hired by GTC to
              follow up with the villagers to improve compliance and follow up
            </li>
          </ul>
        </div>
        <div className="list">
          <h1 className="title">Phase 3 Project</h1>
          <ul>
            <li className="list-box">
              {" "}
              IMPLEMENT THE SIX PILLARS OF LIFE STYLE MEDICINE IN VILLAGE{" "}
            </li>

            <li className="list-box">
              {" "}
              <p>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#88D5D5",
                    display: "inline-block",
                  }}
                >
                  NUTRITION
                </span>
                : Plant based whole food whole grain diet
              </p>
            </li>

            <li className="list-box">
              {" "}
              <p>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#F7E7DB",
                    display: "inline-block",
                  }}
                >
                  ADDICTIONS
                </span>
                : Avoid smoking, alcohol, illegal drugs and other addictions{" "}
              </p>
            </li>

            <li className="list-box">
              <p>
                {" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#F4D2BD",
                    display: "inline-block",
                  }}
                >
                  EXERCISE
                </span>{" "}
                :YOGA AND WALKING
              </p>
            </li>

            <li className="list-box">
              {" "}
              <p>
                {" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#FCB4E2",
                    display: "inline-block",
                  }}
                >
                  STRESS MANAGEMENT
                </span>{" "}
                : Heartfulness meditation{" "}
              </p>
            </li>

            <li className="list-box">
              {" "}
              <p>
                {" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#F7E37B",
                    display: "inline-block",
                  }}
                >
                  SLEEP
                </span>{" "}
                : Sleep Hygiene{" "}
              </p>
            </li>

            <li className="list-box">
              {" "}
              <span
                style={{
                  fontWeight: "bold",
                  color: "#FFBA67",
                  display: "inline-block",
                }}
              >
                SOCIAL RELATIONSHIPS
              </span>{" "}
            </li>

            <li className="list-box"> FOCUS ON SUSTAINABILITY </li>

            <li className="list-box">
              {" "}
              CREATE A REVENUE MODEL BY CHARGING THE PATIENT THE SAME AMOUNT AS
              THE LOCAL RMP DOCTOR CHARGES THE PATIENTS IN THE VILLAGE
            </li>
          </ul>
        </div>
        <div className="list">
          <h1 className="title">OUTCOMES MEASURED </h1>
          <ul>
            <li className="list-box"> BASELINE POSITIVE PATIENTS </li>

            <li className="list-box"> NUMBER OF MEDICATIONS SUPPLIED </li>

            <li className="list-box">
              {" "}
              NUMBER OF PATIENTS MANAGED FOR SIX NCDs{" "}
            </li>

            <li className="list-box">
              {" "}
              COMPLIANCE OF PATIENTS WITH MEDICATIONS{" "}
            </li>

            <li className="list-box">
              {" "}
              CHANGE IN LAB PARAMETERS AND OTHER BIOMETRICS{" "}
            </li>

            <li className="list-box"> HEALTH EDUCATION SESSIONS PROVIDED </li>

            <li className="list-box">
              {" "}
              PHONE CALLS TO DOCTOR AND HEALTH CARE WORKERS{" "}
            </li>

            <li className="list-box"> NUMBER OF PATIENTS DISEASE MANAGED </li>

            <li className="list-box"> NUMBER OF PATIENTS DISEASES REVERSED </li>
          </ul>
        </div>
        <div className="list">
          <h1 className="title">TIPS TO SUCCEED WITH DIPAM PROGRAM </h1>
          <ul>
            <li className="list-box">
              {" "}
              COLABORATE WITH LOCAL PHC STAFF, PHYSICIANS, RMPs, & OTHERS
            </li>

            <li className="list-box"> STRONG TECH SUPPORT </li>

            <li className="list-box">
              {" "}
              PROVIDE ASSISTED TELEMEDICINE VISITS WITH HELP OF HEALTH CARE
              WORKER/SAATHI{" "}
            </li>

            <li className="list-box">
              {" "}
              MONTHLY VISIT BY HEALTH CARE WORKER/SAATHI{" "}
            </li>

            <li className="list-box">
              {" "}
              TIME BOUND EFFECTIVE COORDINATED CARE{" "}
            </li>

            <li className="list-box"> MESSAGING AND MARKETING TO VILLAGERS </li>

            <li className="list-box">
              {" "}
              PROVIDE INCENTIVES WHEN PATIENTS SUCCEED IN DISEASE MANAGEMENT AND
              REVERSAL{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
