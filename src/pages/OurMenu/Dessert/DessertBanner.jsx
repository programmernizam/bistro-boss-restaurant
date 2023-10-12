/* eslint-disable react/prop-types */
import banner from "../../../assets/home/chef-service.jpg";
import CommonBanner from "../../../components/CommonBanner";
import DessertItem from "./DessertItem";

const DessertBanner = ({ dessert }) => {
  return (
    <section>
      <CommonBanner
        containerBg={"bg-black/60 text-white"}
        bannerBg={banner}
        heading={"DESSERTS"}
        subheading={
          "Bistro Boss is a culinary haven where sophistication meets indulgence.A cozy ambiance beckons diners into a world of exquisite flavors and impeccable service. With a diverse menu and top-notch ingredients, every visit promises a delightful gastronomic affair, leaving patrons captivated and eager for their next culinary escapade."
        }
      />
      <DessertItem dessert={dessert} />
    </section>
  );
};

export default DessertBanner;
