import MenuItemCard from "../../../components/MenuItemCardList";
import SharedButton from "../../../components/SharedButton";
import SharedTitle from "../../../components/SharedTitle";
import useMenu from "../../../hooks/useMenu";
import Container from "../../Shared/Container";
import DessertBanner from "../Dessert/DessertBanner";
import PizzaBanner from "../Pizza/PizzaBanner";
import SaladBanner from "../Salad/SaladBanner";
import SoupBanner from "../Soup/SoupBanner";

const OfferItem = () => {
  const [menu] = useMenu();
  const offer = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Container>
        <div className="text-center py-20">
          <SharedTitle
            subheading={"---Don't miss---"}
            heading={"TODAY'S OFFER"}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
            {offer.map((item) => (
              <MenuItemCard key={item._id} item={item} />
            ))}
          </div>
          <SharedButton title={"ORDER YOUR FAVORITE FOOD"} />
        </div>
      </Container>
      <DessertBanner dessert={dessert} />
      <PizzaBanner pizza={pizza} />
      <SaladBanner salad={salad} />
      <SoupBanner soup={soup} />
    </div>
  );
};

export default OfferItem;
