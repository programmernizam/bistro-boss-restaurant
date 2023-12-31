import Container from "../pages/Shared/Container";

const CommonBanner = ({ bannerBg, heading, subheading, containerBg }) => {
  return (
    <section
      className="text-center px-8 py-28 md:px-20 md:py-32 lg:32 bg-center bg-cover"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <Container>
        <div className={`p-5 md:p-10 lg:p-20 ${containerBg}`}>
          <h2 className="text-3xl md:text-5xl mb-5">{heading}</h2>
          <p>{subheading}</p>
        </div>
      </Container>
    </section>
  );
};

export default CommonBanner;
