import btdImg1 from "../assets/btd1.jpeg";
import tttImg1 from "../assets/ttt1.png";
import jdImg1 from "../assets/tt2.png";
import mltImg1 from "../assets/mlt1.png";
import adaCrop from "../assets/Carousel/adaCrop.png";
import lps1 from "../assets/Carousel/lps1.png";
import aha1 from "../assets/Carousel/aha3.png";

import ThumbnailImage from "./ThumbnailImage.jsx";
import "./ProjectThumbnails.css";

export default function ProjectThumbnails({ selected, displayNext }) {
    function handleClick(item) {
        displayNext(item);
    }
    return (
        <div className="project-margin-top mb-4 ">
            <div className="flex-container ">
                <div className="flex-row mb-3">
                    <ThumbnailImage
                        image={btdImg1}
                        onSelect={() => handleClick("btd")}
                        zoomed={selected === "btd" ? true : false}
                    />
                    <ThumbnailImage
                        image={tttImg1}
                        onSelect={() => handleClick("ttt")}
                        zoomed={selected === "ttt" ? true : false}
                    />
                    <ThumbnailImage
                        image={jdImg1}
                        onSelect={() => handleClick("jd")}
                        zoomed={selected === "jd" ? true : false}
                    />
                    <ThumbnailImage
                        image={mltImg1}
                        onSelect={() => handleClick("mlt")}
                        zoomed={selected === "mlt" ? true : false}
                    />
                </div>
                <div className="flex-row">
                    <ThumbnailImage
                        image={adaCrop}
                        onSelect={() => handleClick("ada")}
                        zoomed={selected === "ada" ? true : false}
                    />
                    <ThumbnailImage
                        image={lps1}
                        onSelect={() => handleClick("lps")}
                        zoomed={selected === "lps" ? true : false}
                    />
                    <ThumbnailImage
                        image={aha1}
                        onSelect={() => handleClick("aha")}
                        zoomed={selected === "aha" ? true : false}
                    />

                </div>
            </div>
        </div>
    );
}
