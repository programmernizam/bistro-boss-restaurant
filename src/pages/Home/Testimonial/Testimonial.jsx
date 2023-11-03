import SharedTitle from "../../../components/SharedTitle";
import Container from "../../Shared/Container";

import { BiSolidQuoteLeft } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "@smastrom/react-rating/style.css";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
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
            slidesPerView={1}
            pagination={true}
            navigation={true}
            loop={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="text-center mt-10 pb-10">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                    className="mx-auto"
                  />
                  <BiSolidQuoteLeft className="text-8xl mx-auto" />
                  <p>{review.details}</p>
                  <h4 className="text-xl font-semibold text-secondary">
                    {review.name}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
