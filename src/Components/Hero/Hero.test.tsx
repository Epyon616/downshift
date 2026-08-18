import { screen } from '@testing-library/react';
import render from '../../test/renderWithConfig';
import HeroImage from './Hero';

describe('HeroImage', () => {
  it('renders the hero container', () => {
    const { container } = render(<HeroImage />);
    expect(container.querySelector('.hero-image')).toBeInTheDocument();
  });

  it('renders the Logo inside the hero', () => {
    const { container } = render(<HeroImage />);
    expect(container.querySelector('.logo-container')).toBeInTheDocument();
  });

  it('renders the scroll indicator', () => {
    render(<HeroImage />);
    expect(screen.getByText(/Scroll/i)).toBeInTheDocument();
  });
});
