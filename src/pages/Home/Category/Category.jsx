import CategorySlider from "./CategorySlider";

const Category = () => {
  return (
    <section className="py-20 text-center">
      <p className="text-secondary font-bold italic text-xl">
        ---From 11:00am to 10:00pm---
      </p>
      <h3 className="text-[40px] border-y-4 inline-block px-10 mt-5 border-[#E8E8E8]">
        ORDER ONLINE
      </h3>
      <CategorySlider />
    </section>
  );
};

export default Category;
