import Carousel from "react-bootstrap/Carousel";

export default function CarouselImage({}) {
  return (
    <Carousel.Item>
      <img src={testImg} alt="" className=" img-fluid rounded"></img>
    </Carousel.Item>
  );
}
