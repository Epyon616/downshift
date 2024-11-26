import { fireEvent, render, screen } from '@testing-library/react';
import TextInput from './TextInput';

describe('TextInput', () => {
  const mockHandleChange = jest.fn();
  
  test('should call handlechange method', () => {
    render(
      <TextInput 
        handleChange={mockHandleChange} 
        label="test" 
        value="" 
        type="text" 
        fieldName="test" 
        placeholderText="type your test" 
        required={false}
      />
    );

    const input = screen.getByLabelText('test');
    expect(mockHandleChange).not.toHaveBeenCalled();
    fireEvent.change(input, {target: {value: 'abcde'}});
    expect(mockHandleChange).toHaveBeenCalled();
  });
});