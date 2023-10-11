import banner from "../../../assets/home/chef-service.jpg";
import Container from "../../Shared/Container";
const FeaturedBanner = () => {
  return (
    <Container>
      <section
        className="text-center p-32 bg-center bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="bg-white p-20">
          <h2 className="text-5xl mb-5">Bistro Boss</h2>
          <p>
            Bistro Boss is a culinary haven where sophistication meets
            indulgence. A cozy ambiance beckons diners into a world of exquisite
            flavors and impeccable service. With a diverse menu and top-notch
            ingredients, every visit promises a delightful gastronomic affair,
            leaving patrons captivated and eager for their next culinary
            escapade.
          </p>
        </div>
      </section>
    </Container>
  );
};

export default FeaturedBanner;
