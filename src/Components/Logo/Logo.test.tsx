import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo', () => {
  it('renders the logo image', () => {
    render(<Logo />);
    expect(screen.getByRole('img')).toBeInTheDocument();
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
