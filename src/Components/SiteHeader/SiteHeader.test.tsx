import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import ConfigsProvider from '../Contexts/ConfigContext/ConfigContextProvider';
import configData from '../../Conf/config.json';

const LocationState = () => {
  const location = useLocation();
  return <output>{JSON.stringify(location.state)}</output>;
};

describe('SiteHeader', () => {
  it('links the logo to the home page', () => {
    render(<MemoryRouter><ConfigsProvider configJson={configData}><SiteHeader /></ConfigsProvider></MemoryRouter>);

    expect(screen.getByRole('link', { name: 'Downshift home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('img', { name: 'Downshift Ltd' })).toBeInTheDocument();
  });

  it('navigates home with contact as the requested scroll target', () => {
    render(
      <MemoryRouter initialEntries={['/work/healthinote']}>
        <>
          <ConfigsProvider configJson={configData}><SiteHeader /></ConfigsProvider>
          <LocationState />
        </>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('link', { name: 'Contact' }));

    expect(screen.getByText('{"scrollTo":"contact"}')).toBeInTheDocument();
  });
});
