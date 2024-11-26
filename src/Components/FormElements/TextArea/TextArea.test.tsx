import { fireEvent, render, screen } from '@testing-library/react';
import TextArea from './TextArea';

describe('TextArea', () => {
  const mockHandleChange = jest.fn();
  
  test('should call handlechange method', () => {
    render(
      <TextArea 
        handleChange={mockHandleChange} 
        label="test" 
        value="" 
        fieldName="test" 
        placeholderText="type your test" 
        required={false}
      />
    );

    const textarea = screen.getByLabelText('test');
    expect(mockHandleChange).not.toHaveBeenCalled();
    fireEvent.change(textarea, {target: {value: 'abcde'}});
    expect(mockHandleChange).toHaveBeenCalled();
  });
});