import { render, screen } from '@testing-library/react';
import AboutSection from './about';

describe('AboutSection', () => {
  it('renders the section element', () => {
    const { container } = render(<AboutSection />);
    expect(container.querySelector('section.about')).toBeInTheDocument();
  });

  it('renders the heading', () => {
    render(<AboutSection />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders the profile image', () => {
    render(<AboutSection />);
    expect(screen.getByAltText(/Lee Richmond/i)).toBeInTheDocument();
  });

  it('renders the CTA link to contact section', () => {
    render(<AboutSection />);
    expect(screen.getByRole('link', { name: /let.s talk/i })).toHaveAttribute('href', '#contact-me');
  });
});
