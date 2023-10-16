import { FaClock, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import SharedTitle from "../../../components/SharedTitle";
import Container from "../../Shared/Container";
import ContactInfoCard from "./ContactInfoCard";

const ContactInfo = () => {
  return (
    <Container>
      <div className="text-center py-20">
        <SharedTitle heading={"OUR LOCATION"} subheading={"---Visit Us---"} />
        <div>
          <ContactInfoCard icon={FaPhoneVolume} />
          <ContactInfoCard icon={FaLocationDot} />
          <ContactInfoCard icon={FaClock} />
        </div>
      </div>
    </Container>
  );
};

export default ContactInfo;
