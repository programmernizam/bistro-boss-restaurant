import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
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
          {/* offered */}
          <MenuCategory item={offer} />
          {/* Dessert */}
          <MenuCategory
            item={dessert}
            heading={"Dessert"}
            subHeading={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            bannerBg={dessertBg}
          />
          {/* pizza */}
          <MenuCategory
            item={pizza}
            heading={"Pizza"}
            subHeading={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            bannerBg={pizzaBg}
          />
          {/* salad */}
          <MenuCategory
            item={salad}
            heading={"Salad"}
            subHeading={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            bannerBg={saladBg}
          />
          {/* soup */}
          <MenuCategory
            item={soup}
            heading={"Soup"}
            subHeading={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            bannerBg={soupBg}
          />
        </div>
      </Container>
    </div>
  );
};

export default OfferItem;
