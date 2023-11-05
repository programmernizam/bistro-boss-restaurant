// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
// import required images
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
export default function CategorySlider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        spaceBetween={15}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-10 max-w-screen-xl pb-16"
      >
        <SwiperSlide>
          <img src={slide1} alt="slide" className="" />
          <h3 className="text-xl md:text-3xl lg:text-4xl text-white -mt-10 md:-mt-14 lg:-mt-16 uppercase pb-5">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide" className="" />
          <h3 className="text-lg font-semibold md:text-3xl lg:text-4xl text-white -mt-10 md:-mt-14 lg:-mt-16 uppercase pb-5">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide" className="" />
          <h3 className="text-lg font-semibold md:text-3xl lg:text-4xl text-white -mt-10 md:-mt-14 lg:-mt-16 uppercase pb-5">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="slide" className="" />
          <h3 className="text-lg font-semibold md:text-3xl lg:text-4xl text-white -mt-10 md:-mt-14 lg:-mt-16 uppercase pb-5">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="slide" className="" />
          <h3 className="text-lg font-semibold md:text-3xl lg:text-4xl text-white -mt-10 md:-mt-14 lg:-mt-16 uppercase pb-5">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
