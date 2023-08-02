import { useState } from "react";
import { data } from "../data";
import Card from "./Card";
import Modal from "./Modal";

const Phase1 = () => {
  const [gallery, setGallery] = useState(false);
  const [images, setImages] = useState([]);
  const [state, setState] = useState("");
  return (
    <div id="results" className="reports">
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
        <button
          onClick={() => {
            setState("himachal");
          }}
          className="light-yellow "
        >
          himachal pradesh
        </button>
        <button
          onClick={() => {
            setState("jharkhand");
          }}
          className="dark-blue "
        >
          Jharkhand
        </button>
        <button
          onClick={() => {
            setState("bihar");
          }}
          className="dark-yellow "
        >
          Bihar
        </button>
        <button
          onClick={() => {
            setState("up");
          }}
          className="dark-brown"
        >
          UP
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
        {state === "up" &&
          data.up.map((elem, idx) => {
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
        {state === "himachal" &&
          data.himachal.map((elem, idx) => {
            return (
              <Card
                key={"idx" + idx + elem.name}
                {...elem}
                setGallery={setGallery}
                setImages={setImages}
              />
            );
          })}
        {state === "jharkhand" &&
          data.jharkhand.map((elem, idx) => {
            return (
              <Card
                key={"idx" + idx + elem.name}
                {...elem}
                setGallery={setGallery}
                setImages={setImages}
              />
            );
          })}
        {state === "bihar" &&
          data.bihar.map((elem, idx) => {
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
  );
};

export default Phase1;
