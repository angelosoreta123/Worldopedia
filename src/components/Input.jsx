const Input = ({ className, value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search for a country..."
      value={value}
      onChange={onChange}
      className={className}
      name="country"
      id="country"
    />
  );
};

export default Input;
