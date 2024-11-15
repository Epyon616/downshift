import { render , screen } from '@testing-library/react';
import Branding from './Brand';

describe('Branding', () => {
  test('should render correctly', () => {
      render(<Branding />);
      expect(screen.getByLabelText('DOWN')).toBeInTheDocument();
      expect(screen.getByLabelText('SHIFT')).toBeInTheDocument();
  });

 describe('size prop', () => {
  test('should not add an extra class if not defined', () => {
    const { container } = render(<Branding />);
    expect(container.firstChild).toHaveClass('branding');
  });

  test('should add an extra class when defined', () => {
    const { container } = render(<Branding size="xl" />);
    expect(container.firstChild).toHaveClass('branding xl');
  });
 });
});
