import { FaClock, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import SharedTitle from "../../../components/SharedTitle";
import Container from "../../Shared/Container";
import ContactInfoCard from "./ContactInfoCard";

const ContactInfo = () => {
  return (
    <Container>
      <div className="text-center py-20">
        <SharedTitle heading={"OUR LOCATION"} subheading={"---Visit Us---"} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-5 lg:0">
          <ContactInfoCard
            icon={<FaPhoneVolume className="text-3xl text-white" />}
            title={"Phone"}
            description={"+880 1234567890"}
          />
          <ContactInfoCard
            icon={<FaLocationDot className="text-3xl text-white" />}
            title={"Address"}
            description={"123 ABS Street, Uni 21, Bangladesh"}
          />
          <ContactInfoCard
            icon={<FaClock className="text-3xl text-white" />}
            title={"Working Hours"}
            description={"Sun-Fri: 08:00 - 22:00"}
          />
        </div>
      </div>
    </Container>
  );
};

export default ContactInfo;
