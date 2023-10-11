import SharedTitle from "../../../components/SharedTitle";
import CategorySlider from "./CategorySlider";

const Category = () => {
  return (
    <section className="py-20 text-center">
      <SharedTitle
        subheading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      />
      <CategorySlider />
    </section>
  );
};

export default Category;
