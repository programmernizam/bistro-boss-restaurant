/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  const { name, recipe, image } = product;
  return (
    <div className="bg-gray-200/50">
      <img src={image} alt="product" className="w-full" />
      <div className="card_content p-5">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="my-3">{recipe.slice(0, 70)}...</p>
        <button className="bg-[#E8E8E8] py-3 px-8 font-semibold uppercase text-[#BB8506] rounded-lg border-b-4 border-[#BB8506] hover:bg-neutral hover:border-neutral duration-500">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
