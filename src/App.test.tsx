import { render } from '@testing-library/react';
import App from './App';
import ConfigsProvider from './Components/Contexts/ConfigContext/ConfigContextProvider';
import configData from './Conf/config.json';

const renderApp = () =>
  render(
    <ConfigsProvider configJson={configData}>
      <App />
    </ConfigsProvider>
  );

describe('App', () => {
  it('renders the header', () => {
    const { container } = renderApp();
    expect(container.querySelector('header')).toBeInTheDocument();
  });

  it('renders the hero section', () => {
    const { container } = renderApp();
    expect(container.querySelector('.hero-image')).toBeInTheDocument();
  });

  it('renders the main content area', () => {
    const { container } = renderApp();
    expect(container.querySelector('main.content')).toBeInTheDocument();
  });

  it('renders the footer', () => {
    const { container } = renderApp();
    expect(container.querySelector('footer')).toBeInTheDocument();
  });

  it('renders the about section', () => {
    const { container } = renderApp();
    expect(container.querySelector('section.about')).toBeInTheDocument();
  });

  it('renders the contact section', () => {
    const { container } = renderApp();
    expect(container.querySelector('#contact-me')).toBeInTheDocument();
  });
});
