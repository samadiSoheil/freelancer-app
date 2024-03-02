export default function TextFiled({ label, name, value, onChange }) {
  return (
    <div>
      <label htmlFor={name} className="block mb-1">
        {label}
      </label>
      <input
        id={name}
        value={value}
        onChange={onChange}
        type="text"
        className="textFiled__input"
        autoComplete="off"
      />
    </div>
  );
}
