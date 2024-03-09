export default function TextFiled({ label, name, value, onChange, type }) {
  return (
    <div>
      <label htmlFor={name} className="block mb-4 font-VazirMedium  text-secondary-900">
        {label}
      </label>
      <input
        id={name}
        value={value}
        onChange={onChange}
        type={type}
        className="textFiled__input w-full"
        autoComplete="off"
      />
    </div>
  );
}
