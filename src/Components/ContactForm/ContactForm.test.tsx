import { fireEvent, render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  describe('When the fields are empty', () => {
    it('should not be possible to submit', () => {
      render(<ContactForm />);
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });

  describe('When the fields are not empty', () => {
    it('should not be possible to submit', async () => {
      render(<ContactForm />);
      const fields = screen.getAllByRole('textbox');

      fields.forEach((field) => {
        fireEvent.change(field, {target: {value: 'test' }});
      });

      await expect(screen.getByRole('button')).not.toBeDisabled();
    });
  });
});