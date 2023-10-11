import banner from "../../../assets/home/featured.jpg";
import SharedButton from "../../../components/SharedButton";
import Container from "../../Shared/Container";
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
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 items-center">
            <img src={banner} alt="banner" className="" />
            <div className="text-left text-white">
              <p>March 20, 2023</p>
              <h3 className="text-2xl font-semibold">WHERE CAN I GET SOME?</h3>
              <p className="my-5">
                Bistro Boss is a culinary haven where sophistication meets
                indulgence.A cozy ambiance beckons diners into a world of
                exquisite flavors and impeccable service. With a diverse menu
                and top-notch ingredients, every visit promises a delightful
                gastronomic affair, leaving patrons captivated and eager for
                their next culinary escapade.
              </p>
              <SharedButton title={"Read More"} containerStyles={"text-white"}/>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HighlightProduct;
