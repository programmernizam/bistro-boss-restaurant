import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import FeaturedBanner from "../FeaturedBanner/FeaturedBanner";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import Banner from "../Hero/Banner";
import PopularItem from "../PopularMenuItem/PopularItem";
import HighlightProduct from "../ProductHighlihtBanner/HighlightProduct";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <FeaturedBanner />
      <PopularItem />
      <CallUs />
      <FeaturedProduct />
      <HighlightProduct />
    </div>
  );
};

export default Home;
