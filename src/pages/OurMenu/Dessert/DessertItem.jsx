import { useEffect, useState } from "react";
import MenuItemCard from "../../../components/MenuItemCardList";
import SharedButton from "../../../components/SharedButton";
import Container from "../../Shared/Container";

const DessertItem = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const dessertItem = data.filter((item) => item.category === "dessert");
        setMenu(dessertItem);
      });
  }, []);
  return (
    <Container>
      <div className="text-center py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
          {menu.map((item) => (
            <MenuItemCard key={item._id} item={item} />
          ))}
        </div>
        <SharedButton title={"ORDER YOUR FAVORITE FOOD"} />
      </div>
    </Container>
  );
};

export default DessertItem;