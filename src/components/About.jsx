import PROFILE_PIC from "../assets/About/myPicture.png";
import { Fade } from "react-bootstrap";
import ProjectCarousel from "./ProjectCarousel";
import { travelImages } from "./data";
import "./About.css";

export default function About({ isClicked, isVisible, handleFade }) {
  function handleExit() {
    handleFade("about");
  }
  return (
    <div className="mb-5">
      <Fade in={isClicked} onExited={handleExit}>
        <div id="top" className={isVisible ? null : "d-none"}>
          <div className=" about-margin-top  row ">
            <div className="col-md-6">
              <img
                className=" rounded img-fluid centered-content"
                src={PROFILE_PIC}
                alt=""
              />
            </div>
            <div className="text-light col-md-6 mt-2 bt ">
              <br />
              <h4>Hello! My name is Blake Morse.</h4>
              <br />
              <p>
                I was born in Cincinnati, Ohio, and shortly after, my family
                moved to Guangzhou, China. Five years later, we returned to
                Cincinnati, where I stayed through high school. I am now a
                student at The Ohio State University, pursuing a degree in
                electrical and computer engineering.
              </p>
            </div>
          </div>

          <div className="mt-3  row ">
            <p className="text-light col-md-6 mt-2 bt ">
              <br />
              In my free time, I enjoy weightlifting, playing video games,
              electronics, watching football, snowboarding, and traveling.
              <br />
              <br />
              The following slideshow contains some highlights from recent
              years.
              <br />
            </p>
            <div className="col-md-6">
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
