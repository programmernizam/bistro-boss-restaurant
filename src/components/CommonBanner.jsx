import Container from "../pages/Shared/Container";

/* eslint-disable react/prop-types */
const CommonBanner = ({ bannerBg, heading, subheading, containerBg }) => {
  return (
    <section
      className="text-center p-32 bg-center bg-cover"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <Container>
        <div className={`p-20 ${containerBg}`}>
          <h2 className="text-5xl mb-5">{heading}</h2>
          <p>{subheading}</p>
        </div>
      </Container>
    </section>
  );
};

export default CommonBanner;
