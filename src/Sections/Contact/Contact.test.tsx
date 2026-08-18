import { render, screen } from '@testing-library/react';
import ContactSection from './Contact';
import ConfigsProvider from '../../Components/Contexts/ConfigContext/ConfigContextProvider';
import configData from '../../Conf/config.json';

const renderWithConfig = () =>
  render(
    <ConfigsProvider configJson={configData}>
      <ContactSection />
    </ConfigsProvider>
  );

describe('ContactSection', () => {
  it('renders the section title from config', () => {
    renderWithConfig();
    expect(screen.getByRole('heading', { level: 2, name: configData.contactForm.title })).toBeInTheDocument();
  });

  it('renders the tagline from config', () => {
    renderWithConfig();
    expect(screen.getByText(configData.contactForm.tagline)).toBeInTheDocument();
  });

  it('renders the contact form', () => {
    renderWithConfig();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('has the correct anchor id for navigation', () => {
    const { container } = renderWithConfig();
    expect(container.querySelector('#contact')).toBeInTheDocument();
  });
});
