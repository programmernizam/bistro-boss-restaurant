import "./ProductHighlight.css";
const HighlightProduct = () => {
  return (
    <section className="text-center py-20 bg_overlay z-0">
      <div className="relative z-10">
        <p className="text-secondary font-bold italic text-xl">
          ---Check it out---
        </p>
        <h3 className="text-[40px] text-white border-y-4 inline-block px-10 mt-5 border-[#E8E8E8]">
          FROM OUR MENU
        </h3>
      </div>
    </section>
  );
};

export default HighlightProduct;
