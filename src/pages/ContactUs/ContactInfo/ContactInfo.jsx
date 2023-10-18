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
          <ContactInfoCard
            icon={<FaPhoneVolume />}
            title={"Phone"}
            description={"+880 1234567890"}
          />
          <ContactInfoCard
            icon={<FaLocationDot />}
            title={"Address"}
            description={"123 ABS Street, Uni 21, Bangladesh"}
          />
          <ContactInfoCard
            icon={<FaClock />}
            title={"Working Hours"}
            description={"Sun-Fri: 08:00 - 22:00"}
          />
        </div>
      </div>
    </Container>
  );
};

export default ContactInfo;
