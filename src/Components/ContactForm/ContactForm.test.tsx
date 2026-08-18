import { fireEvent, screen } from '@testing-library/react';
import render from '../../test/renderWithConfig';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  it('renders the contact number field used in the email message', () => {
    render(<ContactForm />);

    expect(screen.getByPlaceholderText('Your contact number')).toHaveAttribute(
      'name',
      'contactNo'
    );
  });

  it('provides correctly associated labels and required-field instructions', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText('Name')).toHaveAttribute('type', 'text');
    expect(screen.getByLabelText('Message')).toHaveAttribute('id', 'message');
    expect(screen.getByText('All fields are required.')).toHaveAttribute(
      'id',
      'required-fields-message'
    );
  });

  describe('When the fields are empty', () => {
    it('should not be possible to submit', () => {
      render(<ContactForm />);
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });

  describe('When the fields are not empty', () => {
    it('should be possible to submit', () => {
      render(<ContactForm />);
      const fields = screen.getAllByRole('textbox');

      fields.forEach((field) => {
        fireEvent.change(field, {target: {value: 'test' }});
      });

      expect(screen.getByRole('button')).not.toBeDisabled();
    });
  });
});
