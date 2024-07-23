import { Fade } from "react-bootstrap";
import ProjectThumbnails from "./ProjectThumbnails.jsx";
import { useState } from "react";
import ProjectCarousel from "./ProjectCarousel.jsx";
import "./Projects.css";

import { tttImages } from "./data.jsx";
import { ttImages } from "./data.jsx";
import { btdImages } from "./data.jsx";
import { mltImages } from "./data.jsx";

import { mltText } from "./data.jsx";
import { tttText } from "./data.jsx";
import { jdText } from "./data.jsx";
import { btdText } from "./data.jsx";

import jdVideo from "../assets/Video/jd.png";
import mltVideo from "../assets/Video/mlt.png";
import btdVideo from "../assets/Video/btd.jpg";
import tttVideo from "../assets/Video/ttt.png";

const array = [
  {
    key: "ttt",
    im: tttImages,
    text: tttText,
    title: "TikTok Tutor",
    video: "https://youtu.be/f_CC5m0ibgk",
    videoImg: tttVideo,
  },
  {
    key: "mlt",
    im: mltImages,
    text: mltText,
    title: "MATLAB Tetris",
    video: "https://youtu.be/tfbi7KxIgCE?si=Q4Nf0Lq4DQToiJgR",
    videoImg: mltVideo,
  },
  {
    key: "btd",
    im: btdImages,
    text: btdText,
    title: "Braille Teaching Device",
    video: "https://youtu.be/uWiS4M1JToc",
    videoImg: btdVideo,
  },
  {
    key: "jd",
    im: ttImages,
    text: jdText,
    title: "Just Dance: TikTok Edition",
    video: "https://youtu.be/20obm_IxM3c",
    videoImg: jdVideo,
  },
];

export default function Projects({ isClicked, isVisible, handleFade }) {
  const [proj, setProj] = useState("btd");

  function handleExit() {
    handleFade("projects");
  }
  function handleTumbnails(p) {
    setProj(p);
  }
  return (
    <div>
      <Fade in={isClicked} onExited={handleExit}>
        <div id="top" className={isVisible ? null : "d-none"}>
          <ProjectThumbnails
            selected={proj}
            displayNext={(p) => handleTumbnails(p)}
            className=""
          />
          <h2 className="title text-light">
            {array.filter((item) => item.key === proj)[0].title}
          </h2>
          <ProjectCarousel
            images={array.filter((item) => item.key === proj)[0].im}
          />

          <div className="mt-3 row">
            <p className="text-light col-lg-6">
              {array.filter((item) => item.key === proj)[0].text}
            </p>
            <div className="col-lg-6">
              <div className="overflow-hidden rounded">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={array.filter((item) => item.key === proj)[0].video}
                >
                  <img
                    src={array.filter((item) => item.key === proj)[0].videoImg}
                    alt=""
                    className=" img-fluid zoom"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
