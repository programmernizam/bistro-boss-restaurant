const ContactInfoCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white border-gray-100 border-[1px]">
      <div className="flex justify-center bg-secondary p-5">{icon}</div>
      <div className="px-5 py-20">
        <h3 className="text-xl">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ContactInfoCard;
