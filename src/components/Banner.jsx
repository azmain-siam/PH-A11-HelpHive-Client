import Slider from "./Slider/Slider";
import "./Slider/SliderData";
import slides from "./Slider/SliderData.json";

import "swiper/css";

const Banner = () => {
  return (
    <div data-aos="fade-left" data-aos-duration="1000" className="mt-4">
      <Slider slides={slides} />
    </div>
  );
};

export default Banner;
