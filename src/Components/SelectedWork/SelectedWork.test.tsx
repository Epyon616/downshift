import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
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
});
