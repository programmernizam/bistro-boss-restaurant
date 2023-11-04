import SharedTitle from "../../../components/SharedTitle";
import useMenu from "../../../hooks/useMenu";
import Container from "../../Shared/Container";
import MenuCategory from "./MenuCategory";

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
          <MenuCategory item={offer} />
        </div>
      </Container>
    </div>
  );
};

export default OfferItem;
