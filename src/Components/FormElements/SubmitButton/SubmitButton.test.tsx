import { render } from '@testing-library/react';
import SubmitButton from './SubmitButton';

describe('SubmitButton', () => {
  const mockSubmit = jest.fn();
  let button;

  describe('when disabled is true', () => {
    test('should render the button disabled', () => {
      render(<SubmitButton value="test button" handleSubmit={mockSubmit} disabled /> );
      button = document.querySelector('input');
      expect(button).toBeDisabled();
    })
  });

  describe('when disabled is false', () => {
    test('should not render the button disabled', () => {
      render(<SubmitButton value="test button" handleSubmit={mockSubmit} disabled={false} /> );
      button = document.querySelector('input');
      expect(button).not.toBeDisabled();
    })
  });
});