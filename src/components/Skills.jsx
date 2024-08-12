import PROFILE_PIC from "../assets/About/myPicture.png";
import { Fade } from "react-bootstrap";
import ProjectCarousel from "./ProjectCarousel";
import { travelImages } from "./data";
import working from "../assets/About/working.jpg";
import "./Skills.css";

export default function Skills({ isClicked, isVisible, handleFade }) {
  function handleExit() {
    handleFade("skills");
  }
  return (
    <div className="">
      <Fade in={isClicked} onExited={handleExit}>
        <div id="top" className={isVisible ? null : "d-none"}>
          <div className="about-margin-top text-light mb-3">
            <h5>
              Comprehensive Hardware and Software Expertise from Ohio State and
              Industry Experience
            </h5>
          </div>
          <div className=" row ">
            <img
              className=" img-fluid centered-content col-lg-6 "
              src={working}
              alt=""
            />
            <div className="text-light col-lg-6 mt-3">
              <h4>Hardware</h4>
              <p className="bt">
                <br />I have experience in digital logic, signals and systems,
                and PCB design, including testing and validation. Additionally,
                I have soldering experience with surface mount production lines
                using Fuji and Heller equipment.
                <br />
                <br />
              </p>
              <h4>Software</h4>
              <p className="bt">
                <br />
                I have experience in machine learning, including supervised
                learning, neural networks, and model evaluation. I’ve also
                worked on designing and programming microcontroller-based
                systems. In frontend development, I am proficient with HTML,
                CSS, JavaScript, and frameworks like React. Additionally, I have
                experience with version control systems like Git.
                <br />
                <br />
              </p>
              <h4>Interests</h4>
              <p className="bt">
                <br />
                My passions include machine learning, robotics, cybersecurity,
                chip design, PCB design, full-stack development, low-level
                programming, embedded systems, data analysis and visualization,
                network security, firmware development, hardware-software
                integration, IoT, and algorithm design.
              </p>
            </div>
          </div>
          <div className=" text-light mt-3 ">
            <h4>List</h4>
            <div className="bt ">
              <ul className="row ">
                <div className="col-lg-4 mt-3 ">
                  <li className="">
                    <h5>PCD Design (Altium)</h5>
                  </li>
                  <li>
                    <h5>Soldering</h5>
                  </li>
                  <li>
                    <h5>3D printing</h5>
                  </li>
                  <li>
                    <h5>CAD (SolidWorks, Fusion 360)</h5>
                  </li>
                  <li>
                    <h5>Spice</h5>
                  </li>
                  <li>
                    <h5>Fuji GPX-CII III Screen Printer</h5>
                  </li>
                  <li>
                    <h5>Fuji Aimex III Pick and Place</h5>
                  </li>
                  <li>
                    <h5>Fuji Aimex III Pick and Place</h5>
                  </li>
                  <li>
                    <h5>Drone Piloting</h5>
                  </li>
                </div>
                <div className="col-lg-4 mt-3">
                  <li>
                    <h5>Java</h5>
                  </li>
                  <li>
                    <h5>Python</h5>
                  </li>
                  <li>
                    <h5>C/C++</h5>
                  </li>
                  <li>
                    <h5>Assembly</h5>
                  </li>
                  <li>
                    <h5>Matlab</h5>
                  </li>
                  <li>
                    <h5>JavaScript/HTML/CSS</h5>
                  </li>
                  <li>
                    <h5>React</h5>
                  </li>
                  <li>
                    <h5>Pytorch, TensorFlow, Scikit-learn</h5>
                  </li>
                  <li>
                    <h5>Version conrol/Git</h5>
                  </li>
                </div>
                <div className="col-lg-4 mt-3">
                  <li>
                    <h5>Signal Processing</h5>
                  </li>
                  <li>
                    <h5>Digital Logic</h5>
                  </li>
                  <li>
                    <h5>Microcontrollers</h5>
                  </li>
                  <li>
                    <h5>Firmware Development</h5>
                  </li>
                  <li>
                    <h5>Embedded Systems Development</h5>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}