export default function RegularInput({
  placeholder,
  name,
  type,
  onChange,
  value,
}) {
  return (
    <input
      className="regular-input"
      placeholder={placeholder}
      name={name}
      type={type}
      onChange={onChange}
      value={value}
    />
  );
}
