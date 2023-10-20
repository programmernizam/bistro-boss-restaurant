import { useForm } from "react-hook-form";
import { BiLogoTelegram } from "react-icons/bi";
import SharedTitle from "../../../components/SharedTitle";
import Container from "../../Shared/Container";

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <Container>
      <div className="text-center">
        <SharedTitle
          heading={"CONTACT FORM"}
          subheading={"---Send Us a Message---"}
        />
      </div>
      <form
        className="bg-gray-200 p-20 mt-5 mb-20"
        onSubmit={handleSubmit}
        // action="https://formspree.io/f/mjvzgjnk"
        // method="POST"
      >
        {/* Name Filed */}
        <div className="grid grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name*</span>
            </label>
            <input
              className="input rounded"
              {...register("name", { required: true })}
            />
            <p className="text-error">
              {errors.name?.type === "required" && "Name is required"}
            </p>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email*</span>
            </label>
            <input
              className="input rounded"
              {...register("email", { required: true })}
            />
            <p className="text-error">
              {errors.email?.type === "required" && "Email is required"}
            </p>
          </div>
        </div>
        {/* Phone Filed */}
        <div className="form-control my-5">
          <label className="label">
            <span className="label-text font-semibold">Phone*</span>
          </label>
          <input
            className="input rounded"
            {...register("phone", { required: true })}
          />
          <p className="text-error">
            {errors.phone?.type === "required" && "Phone number is required"}
          </p>
        </div>
        {/* Message Filed*/}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Message*</span>
          </label>
          <textarea
            className="input rounded h-[300px]"
            {...register("message", { required: true })}
          ></textarea>
          <p className="text-error">
            {errors.message?.type === "required" && "message is required"}
          </p>
        </div>
        {/* Login Button */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="btn btn-secondary px-10 rounded-none text-white"
          >
            Send Message
            <BiLogoTelegram />
          </button>
        </div>
      </form>
    </Container>
  );
};

export default ContactForm;
