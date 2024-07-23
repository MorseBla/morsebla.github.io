import Carousel from "react-bootstrap/Carousel";
import "./ProjectCarousel.css";

export default function ProjectCarousel({ images }) {
  const array = images.map((image, index) => (
    <Carousel.Item key={index}>
      <img src={image} className=" img-fluid rounded"></img>
    </Carousel.Item>
  ));
  return (
    <div className="projects-menu">
      <Carousel variant="dark" className="w-75">
        {array}
      </Carousel>
    </div>
  );
}
