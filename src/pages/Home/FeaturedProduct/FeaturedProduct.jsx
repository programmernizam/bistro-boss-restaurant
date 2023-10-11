import SharedTitle from "../../../components/SharedTitle";
import Container from "../../Shared/Container";

const FeaturedProduct = () => {
  return (
    <Container>
      <div className="text-center py-20">
        <SharedTitle
          heading={"CHEF RECOMMENDS"}
          subheading={"---Should Try---"}
        />
      </div>
    </Container>
  );
};

export default FeaturedProduct;
