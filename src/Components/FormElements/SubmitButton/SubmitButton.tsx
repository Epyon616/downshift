type SubmitButtonType = {
  value: string, 
  disabled: boolean
}

const SubmitButton = ({value, disabled}: SubmitButtonType) => (
  <>
    <input type="submit" value={value} disabled={disabled} />
  </>
); 

export default SubmitButton;
