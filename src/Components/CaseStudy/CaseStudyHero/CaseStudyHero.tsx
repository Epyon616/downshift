import type { CaseStudyHeroProps } from './CaseStudyHero.types';
import './CaseStudyHero.scss';

const CaseStudyHero = ({
  category,
  title,
  subtitle,
  introduction,
  technologies,
}: CaseStudyHeroProps) => {
  const { configs: { content: { technologyListSuffix } } } = useContext(ConfigContext);
  return (
    <div className="case-study-hero">
      <span className="case-study-hero__category">{category}</span>
      <h1>{title}</h1>
      <p className="case-study-hero__subtitle">{subtitle}</p>
      <p className="case-study-hero__introduction">{introduction}</p>

      <ul
        className="case-study-hero__technologies"
        aria-label={`${title} ${technologyListSuffix}`}
      >
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </div>
  );
};

export default CaseStudyHero;
import { useContext } from 'react';
import { ConfigContext } from '../../Contexts';
