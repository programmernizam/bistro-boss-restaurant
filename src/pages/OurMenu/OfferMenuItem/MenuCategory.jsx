import React from "react";
import CommonBanner from "../../../components/CommonBanner";
import MenuItemCard from "../../../components/MenuItemCardList";
import SharedButton from "../../../components/SharedButton";

const MenuCategory = ({ item, heading, bannerBg, subHeading }) => {
  return (
    <div>
      {heading && (
        <CommonBanner
          heading={heading}
          subheading={subHeading}
          bannerBg={bannerBg}
          containerBg={"bg-black/60 text-white"}
        />
      )}
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
