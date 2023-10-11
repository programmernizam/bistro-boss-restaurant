import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import images
import banner1 from "../../../assets/home/01.jpg";
import banner2 from "../../../assets/home/02.jpg";
import banner3 from "../../../assets/home/03.png";
import banner4 from "../../../assets/home/04.jpg";
import banner5 from "../../../assets/home/05.png";
import banner6 from "../../../assets/home/06.png";
const Banner = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={5000}
      thumbWidth={120}
      className="mt-[-90px] text-center"
      axis="horizontal"
    >
      <div>
        <img src={banner1} alt="banner" />
      </div>
      <div>
        <img src={banner2} alt="banner" />
      </div>
      <div>
        <img src={banner3} alt="banner" />
      </div>
      <div>
        <img src={banner4} alt="banner" />
      </div>
      <div>
        <img src={banner5} alt="banner" />
      </div>
      <div>
        <img src={banner6} alt="banner" />
      </div>
    </Carousel>
  );
};

export default Banner;
