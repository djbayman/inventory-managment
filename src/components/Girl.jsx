import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "../assets/hadeel/347122982_196856623271629_6431252294040947628_n.jpg";
import img2 from "../assets/hadeel/348216721_6333919050025496_8795046270708324111_n.jpg";
import img3 from "../assets/hadeel/348221181_643024000512393_4929133980291810706_n.jpg";
import img4 from "../assets/hadeel/449492183_460320453614674_961395230591193107_n.jpg";

const Girl = () => {
  const images = [img1, img4, img2];

  return (
    <div className="mx-auto" style={{ width: "900px" }}>
      <Slide>
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `url(${images[0]})`,
            }}
          ></div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[1]})` }}></div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[2]})` }}></div>
        </div>
      </Slide>
    </div>
  );
};

export default Girl;
