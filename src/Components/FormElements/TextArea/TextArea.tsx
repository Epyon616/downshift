type TextAreaType = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void,
  label: string,
  value: string,
  fieldName: string,
  placeholderText: string
  required: boolean
}

const TextArea = ({
  handleChange, 
  label, 
  placeholderText, 
  fieldName, 
  value, 
  required
}:TextAreaType) => (
  <>
    <label htmlFor={fieldName}>{label}</label>
    <textarea 
      name={fieldName} 
      aria-label={fieldName}
      aria-labelledby={fieldName}
      placeholder={placeholderText} 
      onChange={(e) => handleChange(e)} 
      value={value} 
      required={required}
    />
  </>
);

export default TextArea;