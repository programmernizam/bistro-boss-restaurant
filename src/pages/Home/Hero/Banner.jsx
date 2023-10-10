import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
// import images
import banner1 from "../../../assets/home/01.jpg";
const Banner = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper mt-[-90px]">
        <SwiperSlide className="">
          <img src={banner1} alt="banner" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
