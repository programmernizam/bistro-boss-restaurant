import SharedTitle from "../../../components/SharedTitle";
import Container from "../../Shared/Container";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json)
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container>
      <div className="py-20 text-center">
        <SharedTitle
          subheading={"---What Our Clients Say---"}
          heading={"TESTIMONIALS"}
        />
        <div>
          <Swiper
            pagination={true}
            navigation={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review._id}></SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
