import { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard";
import SharedTitle from "../../../components/SharedTitle";
import Container from "../../Shared/Container";

const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "offered");
        setProducts(popularItem);
      });
  }, []);
  return (
    <Container>
      <div className="text-center py-20">
        <SharedTitle
          heading={"CHEF RECOMMENDS"}
          subheading={"---Should Try---"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {products
            .map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
            .slice(0, 3)}
        </div>
      </div>
    </Container>
  );
};

export default FeaturedProduct;
