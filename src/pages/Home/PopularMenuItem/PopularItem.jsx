import { useEffect, useState } from "react";
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
        <div>
            
        </div>
      </div>
    </Container>
  );
};

export default PopularItem;
