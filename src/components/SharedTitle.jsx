
const SharedTitle = ({ subheading, heading }) => {
  return (
    <div>
      <p className="text-secondary font-bold italic text-xl">{subheading}</p>
      <h3 className="text-[40px] border-y-4 inline-block px-10 mt-5 border-[#E8E8E8]">
        {heading}
      </h3>
    </div>
  );
};

export default SharedTitle;
