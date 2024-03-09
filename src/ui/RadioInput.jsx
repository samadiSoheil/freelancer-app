export default function RadioInput({ name, id, value, label, isChecke, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={isChecke}
        className="size-4 form-radio text-primary-900 focus:ring-primary-900 transition-all duration-100 cursor-pointer"
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
