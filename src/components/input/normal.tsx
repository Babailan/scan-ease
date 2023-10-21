export default function NormalInput({ placeholder, type, value, onChange }) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      className="w-full text-base border-2 border-silver outline-none py-1 px-3 rounded-md"
    />
  );
}
