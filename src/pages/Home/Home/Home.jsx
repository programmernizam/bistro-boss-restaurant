import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import FeaturedBanner from "../FeaturedBanner/FeaturedBanner";
import Banner from "../Hero/Banner";
import PopularItem from "../PopularMenuItem/PopularItem";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <FeaturedBanner />
      <PopularItem />
      <CallUs />
    </div>
  );
};

export default Home;
