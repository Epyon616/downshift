import { screen } from '@testing-library/react';
import render from '../../test/renderWithConfig';
import Logo from './Logo';

describe('Logo', () => {
  it('renders the logo image as decorative', () => {
    const { container } = render(<Logo />);
    expect(container.querySelector('img')).toHaveAttribute('alt', '');
  });

  it('renders the brand name text', () => {
    render(<Logo />);
    expect(screen.getByText('shift')).toBeInTheDocument();
    expect(screen.getByText('down')).toBeInTheDocument();
  });

  it('renders the logo container', () => {
    const { container } = render(<Logo />);
    expect(container.querySelector('.logo-container')).toBeInTheDocument();
  });
});
