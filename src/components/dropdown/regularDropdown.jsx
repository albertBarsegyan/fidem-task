export default function RegularDropdown({ items, value, labelText, onChange }) {
  return (
    <select className="px-0 md:px-4 py-2" value={value} onChange={onChange}>
      <optgroup label={labelText}>
        {items.map((item) => (
          <option key={item.id} value={item.value}>
            {item.text}
          </option>
        ))}
      </optgroup>
    </select>
  );
}
