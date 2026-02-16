type SubmitButtonType = {
  value: string, 
  handleSubmit: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void, 
  disabled: boolean
}

const SubmitButton = ({value, handleSubmit, disabled}: SubmitButtonType) => (
  <>
    <input type="submit" value={value} onClick={(e) => handleSubmit(e)} disabled={disabled} />
  </>
); 

export default SubmitButton;