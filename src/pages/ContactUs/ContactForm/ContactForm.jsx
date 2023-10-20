import { useForm } from "react-hook-form";
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
        onSubmit={handleSubmit}
        // action="https://formspree.io/f/mjvzgjnk"
        // method="POST"
      >
        {/* Name Filed */}
        <div className="grid grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">First Name</span>
            </label>
            <input
              className="input input-bordered"
              {...register("firstName", { required: true })}
            />
            <p className="text-error">
              {errors.firstName?.type === "required" &&
                "First Name is required"}
            </p>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Last Name</span>
            </label>
            <input
              className="input input-bordered"
              {...register("lastName", { required: true })}
            />
            <p className="text-error">
              {errors.lastName?.type === "required" && "Last Name is required"}
            </p>
          </div>
        </div>
        {/* Email Filed */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input
            className="input input-bordered"
            {...register("email", { required: true })}
          />
          <p className="text-error">
            {errors.email?.type === "required" && "Email is required"}
          </p>
        </div>
        {/* Message Filed*/}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Message</span>
          </label>
          <textarea
            className="input input-bordered h-28"
            {...register("message", { required: true })}
          ></textarea>
          <p className="text-error">
            {errors.message?.type === "required" && "message is required"}
          </p>
        </div>
        {/* Login Button */}
        <div className=" mt-6">
          <button
            type="submit"
            className="btn btn-secondary px-10 rounded-none text-white"
          >
            Send Message
          </button>
        </div>
      </form>
    </Container>
  );
};

export default ContactForm;
