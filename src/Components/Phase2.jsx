import { useState } from "react";
import { data2 } from "../data2";
import Card from "./Card";
import Modal from "./Modal";

const Phase2 = () => {
  const [gallery, setGallery] = useState(false);
  const [images, setImages] = useState([]);
  const [state, setState] = useState("");
  return (
    <div id="results2" className="reports">
      <h1 className="title">PHASE 2 RESULTS AND REPORTS</h1>
      {gallery && <Modal setHeader={setGallery} images={images} />}
      <div className="btn-div">
        <button
          onClick={() => {
            setState("andhrapradesh");
          }}
          className="dark-yellow"
        >
          andhrapradesh
        </button>
      </div>
      <div className="cards">
        {state === "andhrapradesh" &&
          data2.andhrapradesh.map((elem, idx) => {
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

export default Phase2;
