import { Helmet } from "react-helmet-async";
import Banner from "../Hero/Banner";
import OfferItem from "../OfferMenuItem/OfferItem";

const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>Our Menu - Bistro Boss</title>
      </Helmet>
      <Banner />
      <OfferItem />
    </div>
  );
};

export default OurMenu;
