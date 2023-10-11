import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import FeaturedBanner from "../FeaturedBanner/FeaturedBanner";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
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
      <FeaturedProduct />
    </div>
  );
};

export default Home;
