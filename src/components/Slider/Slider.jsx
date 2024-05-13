import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
import PropTypes from "prop-types";
import "swiper/swiper-bundle.css";

const Slider = ({ slides }) => {
  return (
    <div className="cursor-default rounded-2xl overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.image}
            style={{ backgroundImage: `url(${slide.image})` }}
            className="slider bg-cover bg-center bg-no-repeat w-full"
          >
            <div
              data-aos="fade-zoom-in"
              className="h-[300px] md:h-[450px] lg:h-[550px]"
            >
              <div className="h-[300px] md:h-full w-full bg-black bg-opacity-50 text-center flex flex-col justify-center items-center">
                <h3 className="text-white font-spartan text-2xl md:text-6xl font-bold mb-3">
                  <Typewriter
                    words={[slide.title]}
                    loop={100}
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={30}
                    delaySpeed={3000}
                    cursorColor="#E9424F"
                  />
                </h3>
                <p className="text-[#FFFFFFCC] text-xs md:text-base w-[75%] md:w-[700px]">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

Slider.propTypes = {
  slides: PropTypes.array,
};
