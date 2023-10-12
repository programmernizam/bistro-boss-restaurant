import { Helmet } from "react-helmet-async";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import FeaturedBanner from "../FeaturedBanner/FeaturedBanner";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import Banner from "../Hero/Banner";
import PopularItem from "../PopularMenuItem/PopularItem";
import HighlightProduct from "../ProductHighlightBanner/HighlightProduct";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Bistro Boss</title>
      </Helmet>
      <Banner />
      <Category />
      <FeaturedBanner />
      <PopularItem />
      <CallUs />
      <FeaturedProduct />
      <HighlightProduct />
      <Testimonial />
    </div>
  );
};

export default Home;
