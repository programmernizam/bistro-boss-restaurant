import React from "react";
import { Link } from "react-router-dom";
import CommonBanner from "../../../components/CommonBanner";
import MenuItemCard from "../../../components/MenuItemCardList";

const MenuCategory = ({ item, heading, bannerBg, subHeading }) => {
  return (
    <div>
      {heading && (
        <div className="mt-10">
          <CommonBanner
            heading={heading}
            subheading={subHeading}
            bannerBg={bannerBg}
            containerBg={"bg-black/60 text-white"}
          />
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
        {item.map((item) => (
          <MenuItemCard key={item._id} item={item} />
        ))}
      </div>
      <Link
        to={`/shop/${heading}`}
        className="font-semibold border-b-4 rounded-xl px-8 py-2 border-gray-300 hover:border-secondary duration-500"
      >
        ORDER YOUR FAVORITE FOOD
      </Link>
    </div>
  );
};

export default MenuCategory;
