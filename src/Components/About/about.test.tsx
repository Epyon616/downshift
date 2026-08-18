import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ConfigsProvider from '../Contexts/ConfigContext/ConfigContextProvider';
import configData from '../../Conf/config.json';
import AboutSection from './about';

const renderAboutSection = () => render(
  <MemoryRouter>
    <ConfigsProvider configJson={configData}><AboutSection /></ConfigsProvider>
  </MemoryRouter>
);

describe('AboutSection', () => {
  it('renders the section element', () => {
    const { container } = renderAboutSection();
    expect(container.querySelector('section.about')).toBeInTheDocument();
  });

  it('renders the heading', () => {
    renderAboutSection();
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders the profile image', () => {
    renderAboutSection();
    expect(screen.getByAltText(/Lee Richmond/i)).toBeInTheDocument();
  });

  it('renders the CTA link to contact section', () => {
    renderAboutSection();
    expect(screen.getByRole('link', { name: /let.s talk/i })).toHaveAttribute('href', '/');
  });
});
