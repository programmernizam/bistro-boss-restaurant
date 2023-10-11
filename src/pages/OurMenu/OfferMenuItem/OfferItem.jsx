import { useEffect, useState } from "react";
import MenuItemCard from "../../../components/MenuItemCardList";
import SharedButton from "../../../components/SharedButton";
import SharedTitle from "../../../components/SharedTitle";
import Container from "../../Shared/Container";
import DessertBanner from "../Dessert/DessertBanner";
import PizzaBanner from "../Pizza/PizzaBanner";
import SaladBanner from "../Salad/SaladBanner";
import SoupBanner from "../Soup/SoupBanner";

const OfferItem = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const offerItem = data.filter((item) => item.category === "offered");
        setMenu(offerItem);
      });
  }, []);
  return (
    <div>
      <Container>
        <div className="text-center py-20">
          <SharedTitle
            subheading={"---Don't miss---"}
            heading={"TODAY'S OFFER"}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
            {menu.map((item) => (
              <MenuItemCard key={item._id} item={item} />
            ))}
          </div>
          <SharedButton title={"ORDER YOUR FAVORITE FOOD"} />
        </div>
      </Container>
      <DessertBanner />
      <PizzaBanner />
      <SaladBanner />
      <SoupBanner />
    </div>
  );
};

export default OfferItem;
