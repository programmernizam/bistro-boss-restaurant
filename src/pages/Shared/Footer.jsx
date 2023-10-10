import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Container from "./Container";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-neutral text-neutral-content ">
      <div className="grid grid-cols-1 md:grid-cols-2 text-center">
        <div className="py-10">
          <h3 className="text-3xl font-medium uppercase mb-2">Contact Us</h3>
          <ul className="flex flex-col gap-2">
            <li>123 ABS Street, Uni 21, Bangladesh</li>
            <li>+880 123456789</li>
            <li>Mon - Fri: 08:00 - 22:00</li>
            <li>Sat - Sun: 10:00 - 23:00</li>
          </ul>
        </div>
        <div className="bg-[#111827] py-10">
          <h3 className="text-3xl font-medium">Follow Us</h3>
          <p className="my-3">Join us on social media</p>
          <ul className="flex justify-center gap-3">
            <li>
              <FaFacebookF className="text-2xl" />
            </li>
            <li>
              <BsTwitter className="text-2xl" />
            </li>
            <li>
              <BsLinkedin className="text-2xl" />
            </li>
          </ul>
        </div>
      </div>
      <Container>
        <div className="footer footer-center p-4 bg-base-500 text-dark-content">
          <aside>
            <p>Copyright © {year} - All right reserved by ProgrammerNizam</p>
          </aside>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
