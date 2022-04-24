export default function RegularButton({ text, handleClick, type }) {
  return (
    <button
      className="border border-gray-600 px-4 py-2 text-gray-600"
      type={type}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
