import banner from "../../../assets/contact/banner.jpg";
import CommonBanner from "../../../components/CommonBanner";
const Banner = () => {
  return (
    <div className="-mt-[90px]">
      <CommonBanner
        containerBg={"bg-black/60 text-white"}
        bannerBg={banner}
        heading={"CONTACT US"}
        subheading={"Would you like to try a dish?"}
      />
    </div>
  );
};

export default Banner;
