import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import configData from '../../Conf/config.json';
import ConfigsProvider from '../Contexts/ConfigContext/ConfigContextProvider';
import SelectedWork from './SelectedWork';

const renderSelectedWork = () => render(
  <MemoryRouter>
    <ConfigsProvider configJson={configData}>
      <SelectedWork />
    </ConfigsProvider>
  </MemoryRouter>
);

const LocationState = () => {
  const location = useLocation();
  return <output>{JSON.stringify(location.state)}</output>;
};

describe('SelectedWork', () => {
  it('renders every configured project', () => {
    renderSelectedWork();

    const projects = screen.getAllByRole('article');
    expect(projects).toHaveLength(configData.work.selectedWork.length);

    configData.work.selectedWork.forEach((project) => {
      expect(
        screen.getByRole('heading', { name: project.title })
      ).toBeInTheDocument();
    });
  });

  it('renders each project technology and case-study link', () => {
    renderSelectedWork();

    configData.work.selectedWork.forEach((project) => {
      const technologies = screen.getByRole('list', {
        name: `${project.title} technologies`,
      });

      project.technologies.forEach((technology) => {
        expect(within(technologies).getByText(technology)).toBeInTheDocument();
      });

      const projectHeading = screen.getByRole('heading', { name: project.title });
      const projectCard = projectHeading.closest('article');
      expect(projectCard).not.toBeNull();
      expect(
        within(projectCard!).getByRole('link', { name: /view case study/i })
      ).toHaveAttribute('href', project.href);
    });
  });

  it('requests scrolling to the top of a case study when a project is opened', () => {
    render(
      <MemoryRouter>
        <>
          <ConfigsProvider configJson={configData}>
            <SelectedWork />
          </ConfigsProvider>
          <LocationState />
        </>
      </MemoryRouter>
    );

    fireEvent.click(screen.getAllByRole('link', { name: /view case study/i })[0]);

    expect(screen.getByText('{"scrollTo":"case-study-page-top"}')).toBeInTheDocument();
  });
});
