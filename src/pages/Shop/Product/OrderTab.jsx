/* eslint-disable react/prop-types */
import ProductCard from "../../../components/ProductCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center mt-5">
      {items.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default OrderTab;
