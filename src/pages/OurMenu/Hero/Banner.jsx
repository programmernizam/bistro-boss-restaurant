import banner from "../../../assets/menu/banner3.jpg";
import CommonBanner from "../../../components/CommonBanner";
const Banner = () => {
  return (
    <div>
      <CommonBanner
        bannerBg={banner}
        containerBg={"bg-black/60 text-white"}
        heading={"OUR MENU"}
        subheading={"Would you like to try a dish?"}
      />
    </div>
  );
};

export default Banner;
