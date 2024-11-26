type SubmitButtonType = {
  value: string, 
  handleSubmit: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void, 
  disabled: boolean
}

const SubmitButton = ({value, handleSubmit, disabled}: SubmitButtonType) => {
  return (
  <div>
    <div/>
    <input type="submit" value={value} onClick={(e) => handleSubmit(e)} disabled={disabled} />
  </div>
  ); 
}

export default SubmitButton;