import { render, screen } from '@testing-library/react';
import Notification from './Notification';

describe('Notification', () => {
  describe('when show notification is false', () => {
    it('should not have the show class', () => {
      render(<Notification showNotification={false} message='test' />);
      expect(screen.getByText('test')).not.toHaveClass('show');
    });

  });
  describe('when show notification is true', () => {
    it('should have the show class', () => {
      render(<Notification showNotification={true} message='test' />);
      expect(screen.getByText('test')).toHaveClass('show');
    });
  });
});