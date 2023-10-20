import { Helmet } from "react-helmet-async";
import ContactForm from "../ContactForm/ContactForm";
import ContactInfo from "../ContactInfo/ContactInfo";
import Banner from "../Hero/Banner";

const Contact = () => {
  return (
    <section>
      <Helmet>
        <title>Contact Us - Bistro Boss</title>
      </Helmet>
      <Banner />
      <ContactInfo />
      <ContactForm />
    </section>
  );
};

export default Contact;
