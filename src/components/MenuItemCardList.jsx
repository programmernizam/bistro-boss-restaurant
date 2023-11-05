const MenuItemCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex flex-col items-center p-5 md:items-start md:p-0 md:flex-row gap-8">
      <img
        src={image}
        alt="menuitems"
        className="w-full md:w-[110px] md:rounded-tl-none md:rounded-r-[200px] md:rounded-l-[200px]"
      />
      <div className="w-full">
        <div className="flex justify-between items-start gap-5">
          <div className="text-start">
            <h3 className="text-xl font-semibold">
              {name} <span className="hidden md:inline-block">------------------</span>
            </h3>
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
