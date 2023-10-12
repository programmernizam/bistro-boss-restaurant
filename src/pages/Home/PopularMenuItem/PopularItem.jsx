import { useEffect, useState } from "react";
import MenuItemCard from "../../../components/MenuItemCardList";
import SharedButton from "../../../components/SharedButton";
import SharedTitle from "../../../components/SharedTitle";
import Container from "../../Shared/Container";

const PopularItem = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setMenu(popularItem);
      });
  }, []);
  return (
    <Container>
      <div className="text-center py-20">
        <SharedTitle
          heading={"From Our Menu"}
          subheading={"---Check it out---"}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  my-10">
          {menu.map((item) => (
            <MenuItemCard key={item._id} item={item} />
          ))}
        </div>
        <SharedButton title={"View Full  Menu"} link={"/our-menu"} />
      </div>
    </Container>
  );
};

export default PopularItem;
