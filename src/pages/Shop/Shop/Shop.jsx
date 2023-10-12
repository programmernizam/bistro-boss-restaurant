import { Helmet } from "react-helmet-async";
import Banner from "../Hero/Banner";
import Product from "../Product/Product";

const Shop = () => {
  return (
    <section>
      <Helmet>
        <title>Our Shop - Bistro Boss</title>
      </Helmet>
      <Banner />
      <Product />
    </section>
  );
};

export default Shop;
