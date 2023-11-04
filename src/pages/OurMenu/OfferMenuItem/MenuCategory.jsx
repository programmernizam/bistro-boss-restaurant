import React from "react";
import MenuItemCard from "../../../components/MenuItemCardList";
import SharedButton from "../../../components/SharedButton";

const MenuCategory = ({ item }) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
        {item.map((item) => (
          <MenuItemCard key={item._id} item={item} />
        ))}
      </div>
      <SharedButton title={"ORDER YOUR FAVORITE FOOD"} />
    </div>
  );
};

export default MenuCategory;
