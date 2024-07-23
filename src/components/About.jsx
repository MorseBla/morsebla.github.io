import PROFILE_PIC from "../assets/About/myPicture.png";
import { Fade } from "react-bootstrap";
import ProjectCarousel from "./ProjectCarousel";
import { travelImages } from "./data";

export default function About({ isClicked, isVisible, handleFade }) {
  function handleExit() {
    handleFade("about");
  }
  return (
    <div className="">
      <Fade in={isClicked} onExited={handleExit}>
        <div id="top" className={isVisible ? null : "d-none"}>
          <div className="overflow-hidden rounded-bottom">
            <img
              className="fullscreen-img img-fluid "
              src={PROFILE_PIC}
              alt=""
            />
          </div>

          <div className="mt-3 row">
            <p className="text-light col-lg-6">
              Hello! My name is Blake Morse. This website is still under
              development.
            </p>
            <div className="col-lg-6">
              <div className="overflow-hidden rounded">
                <ProjectCarousel images={travelImages} />
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
