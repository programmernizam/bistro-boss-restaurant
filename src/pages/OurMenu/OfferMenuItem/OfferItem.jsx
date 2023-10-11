import { useEffect, useState } from "react";
import MenuItemCard from "../../../components/MenuItemCardList";
import SharedTitle from "../../../components/SharedTitle";
import Container from "../../Shared/Container";

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
    <Container>
      <section className="text-center py-20">
        <SharedTitle
          subheading={"---Don't miss---"}
          heading={"TODAY'S OFFER"}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          {menu.map((item) => (
            <MenuItemCard key={item._id} item={item} />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default OfferItem;
