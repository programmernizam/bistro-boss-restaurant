import banner from "../../../assets/shop/banner2.jpg";
import CommonBanner from "../../../components/CommonBanner";
const Banner = () => {
  return (
    <div className="-mt-[90px]">
      <CommonBanner
        bannerBg={banner}
        heading={"OUR SHOP"}
        containerBg={"bg-black/60 text-white"}
        subheading={"Would you like to try a dish?"}
      />
    </div>
  );
};

export default Banner;
