import { render, screen } from '@testing-library/react';
import SocialLinks from './SocialLinks';
import ConfigsProvider from '../Contexts/ConfigContext/ConfigContextProvider';
import configData from '../../Conf/config.json';

const renderWithConfig = () =>
  render(
    <ConfigsProvider configJson={configData}>
      <SocialLinks />
    </ConfigsProvider>
  );

describe('SocialLinks', () => {
  it('renders two social links', () => {
    renderWithConfig();
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });

  it('renders the GitHub link with correct href', () => {
    renderWithConfig();
    expect(screen.getByRole('link', { name: configData.links.github.label })).toHaveAttribute(
      'href',
      configData.links.github.link
    );
  });

  it('renders the LinkedIn link with correct href', () => {
    renderWithConfig();
    expect(screen.getByRole('link', { name: configData.links.linkedin.label })).toHaveAttribute(
      'href',
      configData.links.linkedin.link
    );
  });
});
