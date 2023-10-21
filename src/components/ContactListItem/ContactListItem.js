export const ContactListItem = ({ contactName, contactNumber }) => {
  return (
    <p>
      <span>{contactName}: </span>
      <span>{contactNumber}</span>
    </p>
  );
};
