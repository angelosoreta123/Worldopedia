const Dropdown = ({ className, value, onChange }) => {
  return (
    <select
      name="region"
      id="region"
      className={className}
      aria-label="Filter by Region"
      value={value}
      onChange={onChange}
    >
      <option value="All">All</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Antarctic">Antarctica</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default Dropdown;
