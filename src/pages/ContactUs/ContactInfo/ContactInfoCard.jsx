const ContactInfoCard = ({ icon, title, description }) => {
  return (
    <div>
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ContactInfoCard;
