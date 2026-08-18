import { Link } from 'react-router-dom';
import './SelectedWork.scss';
import { useContext } from 'react';
import { ConfigContext } from '../Contexts';
import { SelectedWorkProps } from '../Contexts/ConfigContext/types';

const SelectedWork = () => {
  const { configs: { work: { selectedWork }, content: { selectedWork: copy, technologyListSuffix } } } = useContext(ConfigContext);

  return (
    <section className="selected-work" aria-labelledby="selected-work-title" id="selected-work" tabIndex={-1}>
      <div className="selected-work__inner">
        <div className="selected-work__header">
          <h2 id="selected-work-title">{copy.title}</h2>

          <p>
            {copy.description}
          </p>
        </div>

        <div className="selected-work__projects">
          {selectedWork.map((project: SelectedWorkProps) => (
            <article className="project-card" key={project.title}>
              <div className="project-card__header">
                <h3>{project.title}</h3>
                <span>{project.category}</span>
              </div>

              <h4>{project.subtitle}</h4>

              <p className="project-card__description">{project.description}</p>

              <ul
                className="project-card__technologies"
                aria-label={`${project.title} ${technologyListSuffix}`}
              >
                {project.technologies.map((technology : string) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              <Link className="project-card__link" state={{ scrollTo: 'case-study-page-top' }} to={project.href} >
                {copy.linkLabel} <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
