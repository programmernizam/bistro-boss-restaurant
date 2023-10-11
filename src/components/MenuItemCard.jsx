/* eslint-disable react/prop-types */
const MenuItemCard = ({ item }) => {
  const { name, recipe, image, price, category } = item;
  return (
    <div className="flex gap-8">
      <img
        src={image}
        alt="menuitems"
        className="w-[110px]"
        style={{ borderRadius: "0 200px 200px 200px" }}
      />
      <div className="w-full">
        <div className="flex justify-between items-start gap-5">
          <div className="text-start">
            <h3 className="text-xl font-semibold">{name} ------------------</h3>
            <p>{recipe}</p>
          </div>
          <h3 className="text-xl text-secondary font-bold text-right">
            ${price}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
