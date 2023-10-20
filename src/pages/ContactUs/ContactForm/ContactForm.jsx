import SharedTitle from "../../../components/SharedTitle";
import Container from "../../Shared/Container";

const ContactForm = () => {
  return (
    <Container>
      <div className="text-center">
        <SharedTitle
          heading={"CONTACT FORM"}
          subheading={"---Send Us a Message---"}
        />
      </div>
    </Container>
  );
};

export default ContactForm;
