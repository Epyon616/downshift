import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import ConfigsProvider from '../Components/Contexts/ConfigContext/ConfigContextProvider';
import configData from '../Conf/config.json';

const renderApp = () =>
  render(
    <MemoryRouter>
      <ConfigsProvider configJson={configData}>
        <App />
      </ConfigsProvider>
    </MemoryRouter>
  );

describe('App', () => {
  it('provides a skip link that moves focus to main content', () => {
    renderApp();
    fireEvent.click(screen.getByRole('link', { name: 'Skip to main content' }));
    expect(screen.getByRole('main')).toHaveFocus();
  });

  it('renders the hero section', () => {
    const { container } = renderApp();
    expect(container.querySelector('.hero-image')).toBeInTheDocument();
  });

  it('renders the main content area', () => {
    const { container } = renderApp();
    expect(container.querySelector('main.content')).toBeInTheDocument();
  });

  it('sets a page-specific document title', () => {
    renderApp();
    expect(document.title).toBe(configData.content.pageTitles.home);
  });

  it('renders the footer', () => {
    const { container } = renderApp();
    const main = container.querySelector('main');
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
    expect(main).not.toContainElement(footer);
  });

  it('renders the about section', () => {
    const { container } = renderApp();
    expect(container.querySelector('section.about')).toBeInTheDocument();
  });

  it('renders the contact section', () => {
    const { container } = renderApp();
    expect(container.querySelector('#contact')).toBeInTheDocument();
  });
});
