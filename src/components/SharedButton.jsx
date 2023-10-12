import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SharedButton = ({ title, containerStyles, link }) => {
  return (
    <Link to={link}>
      <button
        className={`font-semibold border-b-4 rounded-xl px-8 py-2 border-gray-300 hover:border-secondary duration-500 ${containerStyles}`}
      >
        {title}
      </button>
    </Link>
  );
};

export default SharedButton;
