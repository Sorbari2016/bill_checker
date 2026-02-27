import Option from "./Options";

export default function Select({ name, options, value, onChange }) {  
  return (
    <select id={name} name={name} value={value} onChange={onChange}>
      {options.map((option) => (
        <Option key={option.value} value={option.value} label={option.label} />
      ))}
    </select>
  );
}