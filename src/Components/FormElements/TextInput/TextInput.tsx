
type TextInputType = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void,
  label: string,
  value: string,
  type: string,
  fieldName: string,
  placeholderText: string
  required: boolean
}

const TextInput = ({ handleChange, label, value, type, fieldName, placeholderText, required }:TextInputType) => {
  return (
    <div>
    <label htmlFor={fieldName}>{label}:</label>
    <input type={type} name={fieldName} placeholder={placeholderText} onChange={handleChange} value={value} required={required} />
  </div>
  );
}

export default TextInput;