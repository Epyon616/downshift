import type { ReactElement } from 'react';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CaseStudyHero from './CaseStudyHero/CaseStudyHero';
import CaseStudyLayout from './CaseStudyLayout/CaseStudyLayout';
import CaseStudyNavigation from './CaseStudyNavigation/CaseStudyNavigation';
import CaseStudySection from './CaseStudySection/CaseStudySection';
import CaseStudyStory from './CaseStudyStory/CaseStudyStory';
import ConfigsProvider from '../Contexts/ConfigContext/ConfigContextProvider';
import configData from '../../Conf/config.json';

const withConfig = (component: ReactElement) => (
  <ConfigsProvider configJson={configData}>{component}</ConfigsProvider>
);

describe('case study components', () => {
  it('renders hero copy and its technology list', () => {
    render(
      withConfig(<CaseStudyHero
        category="SaaS"
        title="GuestFlow"
        subtitle="Restaurant bookings"
        introduction="A booking platform"
        technologies={['React', 'TypeScript']}
      />)
    );

    expect(screen.getByRole('heading', { level: 1, name: 'GuestFlow' })).toBeInTheDocument();
    expect(screen.getByText('Restaurant bookings')).toBeInTheDocument();
    expect(screen.getByText('A booking platform')).toBeInTheDocument();
    expect(within(screen.getByRole('list', { name: 'GuestFlow technologies' })).getAllByRole('listitem')).toHaveLength(2);
  });

  it('renders section and story children with the correct heading hierarchy', () => {
    render(
      <CaseStudySection label="The engineering" title="Building the platform">
        <CaseStudyStory number="01" title="Secure foundations">
          <p>Story content</p>
        </CaseStudyStory>
      </CaseStudySection>
    );

    expect(screen.getByText('The engineering')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Building the platform' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Secure foundations' })).toBeInTheDocument();
    expect(screen.getByText('01')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByText('Story content')).toBeInTheDocument();
  });

  it('renders supplied previous and next navigation links', () => {
    render(
      <MemoryRouter>
        {withConfig(<CaseStudyNavigation
          previous={{ label: 'Previous case study', title: 'Healthinote', to: '/work/healthinote' }}
          next={{ label: 'Next case study', title: 'GuestFlow', to: '/work/guestflow' }}
        />)}
      </MemoryRouter>
    );

    const navigation = screen.getByRole('navigation', { name: 'Case study navigation' });
    expect(within(navigation).getByRole('link', { name: /Healthinote/ })).toHaveAttribute('href', '/work/healthinote');
    expect(within(navigation).getByRole('link', { name: /GuestFlow/ })).toHaveAttribute('href', '/work/guestflow');
  });

  it('falls back to a portfolio link and omits next navigation', () => {
    render(
      <MemoryRouter>
        {withConfig(<CaseStudyNavigation />)}
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: /Back to portfolio/ })).toHaveAttribute('href', '/');
    expect(screen.getAllByRole('link')).toHaveLength(1);
  });

  it('wraps content with the site header, main landmark, footer and scroll target', () => {
    render(
      <MemoryRouter>
        {withConfig(<CaseStudyLayout>
          <p>Case study content</p>
        </CaseStudyLayout>)}
      </MemoryRouter>
    );

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toHaveTextContent('Case study content');
    expect(screen.getByRole('contentinfo')).toHaveTextContent(`© ${new Date().getFullYear()} Downshift`);
    expect(document.querySelector('#case-study-page-top')).toBeInTheDocument();
  });
});
