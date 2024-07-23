import btdImg1 from "../assets/btd1.jpeg";
import tttImg1 from "../assets/ttt1.png";
import jdImg1 from "../assets/tt2.png";
import mltImg1 from "../assets/mlt1.png";
import ThumbnailImage from "./ThumbnailImage.jsx";
import "./ProjectThumbnails.css";

export default function ProjectThumbnails({ selected, displayNext }) {
  function handleClick(item) {
    displayNext(item);
  }
  return (
    <div className="project-margin-top mb-4 ">
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
  );
}
