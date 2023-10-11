/* eslint-disable react/prop-types */
const CommonBanner = ({ bannerBg, heading, subheading }) => {
  return (
    <section
      className="text-center p-32 bg-center bg-cover"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="bg-white p-20">
        <h2 className="text-5xl mb-5">{heading}</h2>
        <p>{subheading}</p>
      </div>
    </section>
  );
};

export default CommonBanner;
