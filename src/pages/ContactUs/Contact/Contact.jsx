import { Helmet } from "react-helmet-async";
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
    </section>
  );
};

export default Contact;
