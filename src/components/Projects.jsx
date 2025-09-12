import { Fade } from "react-bootstrap";
import ProjectThumbnails from "./ProjectThumbnails.jsx";
import { useState } from "react";
import ProjectCarousel from "./ProjectCarousel.jsx";
import "./Projects.css";

import { tttImages } from "./data.jsx";
import { ttImages } from "./data.jsx";
import { btdImages } from "./data.jsx";
import { mltImages } from "./data.jsx";
import { adaImages } from "./data.jsx";
import { lpsImages } from "./data.jsx";
import { ahaImages } from "./data.jsx";

import { mltText } from "./data.jsx";
import { tttText } from "./data.jsx";
import { jdText } from "./data.jsx";
import { btdText } from "./data.jsx";
import { adaText } from "./data.jsx";
import { lpsText } from "./data.jsx";
import { ahaText } from "./data.jsx";

import jdVideo from "../assets/Video/jd.png";
import mltVideo from "../assets/Video/mlt.png";
import btdVideo from "../assets/Video/btd.jpg";
import tttVideo from "../assets/Video/ttt.png";
import sidewalk from "../assets/Carousel/ada4.jpg";
import lps from "../assets/Video/lps.png";
import aha from "../assets/Video/aha.png";

const array = [
    {
        key: "ttt",
        im: tttImages,
        text: tttText,
        title: "TikTok Tutor",
        video: "https://youtu.be/f_CC5m0ibgk",
        videoImg: tttVideo,
        hasLink: true,
    },
    {
        key: "mlt",
        im: mltImages,
        text: mltText,
        title: "MATLAB Tetris",
        video: "https://youtu.be/tfbi7KxIgCE?si=Q4Nf0Lq4DQToiJgR",
        videoImg: mltVideo,
        hasLink: true,
    },
    {
        key: "btd",
        im: btdImages,
        text: btdText,
        title: "Braille Teaching Device",
        video: "https://youtu.be/uWiS4M1JToc",
        videoImg: btdVideo,
        hasLink: true,
    },
    {
        key: "jd",
        im: ttImages,
        text: jdText,
        title: "Just Dance: TikTok Edition",
        video: "https://youtu.be/20obm_IxM3c",
        videoImg: jdVideo,
        hasLink: true,
    },
    {
        key: "ada",
        im: adaImages,
        text: adaText,
        title: "The ADA Cart",
        video: "",
        videoImg: sidewalk,
        hasLink: false,
    },
    {
        key: "lps",
        im: lpsImages,
        text: lpsText,
        title: "Paper: HPC Fast File Transfer",
        video: "https://buckeyemailosu-my.sharepoint.com/:b:/g/personal/morse_216_buckeyemail_osu_edu/ERIkZwcFS2xIpI3i04uXEQABtILgv-Xx9YlAALqqUYet9w?e=4KbJhp",
        videoImg: lps,
        hasLink: true,
    },
    {
        key: "aha",
        im: ahaImages,
        text: ahaText,
        title: "Paper: Hardware Acceleration for Polynomial Multiplication",
        video: "https://buckeyemailosu-my.sharepoint.com/:b:/g/personal/morse_216_buckeyemail_osu_edu/ERIkZwcFS2xIpI3i04uXEQABtILgv-Xx9YlAALqqUYet9w?e=4KbJhp",
        videoImg: aha,
        hasLink: true,
    },
];

export default function Projects({ isClicked, isVisible, handleFade }) {
    const [proj, setProj] = useState("btd");

    const projItem = array.filter((item) => item.key === proj)[0];
    function handleExit() {
        handleFade("projects");
    }
    function handleTumbnails(p) {
        setProj(p);
    }
    return (
        <div className="mb-5">
            <Fade in={isClicked} onExited={handleExit}>
                <div id="top" className={isVisible ? null : "d-none"}>
                    <ProjectThumbnails
                        selected={proj}
                        displayNext={(p) => handleTumbnails(p)}
                        className=""
                    />
                    <div className="container mb-3">
                        {" "}
                        <div className="bb"></div>
                    </div>
                    <h2 className="title text-light">
                        {array.filter((item) => item.key === proj)[0].title}
                    </h2>
                    <ProjectCarousel
                        images={array.filter((item) => item.key === proj)[0].im}
                    />
                    <div className="mt-3 row">
                        <p className="text-light col-lg-6 mt-3">
                            {array.filter((item) => item.key === proj)[0].text}
                        </p>
                        <div className="col-lg-6">
                            <div className="overflow-hidden rounded">
                                {projItem.hasLink ? (
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={projItem.video}
                                    >
                                        <img
                                            src={projItem.videoImg}
                                            alt=""
                                            className="img-fluid zoom"
                                        />
                                    </a>
                                ) : (
                                    <img
                                        src={projItem.videoImg}
                                        alt=""
                                        className="img-fluid "
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}
