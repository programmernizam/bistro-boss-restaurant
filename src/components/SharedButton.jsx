/* eslint-disable react/prop-types */
const SharedButton = ({ title }) => {
  return (
    <button className="font-semibold border-b-4 rounded-xl px-8 py-2 border-gray-300 hover:border-secondary duration-500">
      {title}
    </button>
  );
};

export default SharedButton;