import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ConfigContext } from '../../Contexts';
import type { CaseStudyNavigationProps } from './CaseStudyNavigation.types';

import './CaseStudyNavigation.scss';

const CaseStudyNavigation = ({
  previous,
  next,
}: CaseStudyNavigationProps) => {
  const { configs: { content: { caseStudyNavigation: copy } } } = useContext(ConfigContext);
  return (
    <nav
      className="case-study-navigation"
      aria-label={copy.navigationLabel}
    >
      <div className="case-study-navigation__item">
        {previous ? (
          <Link to={previous.to} state={{ scrollTo: 'case-study-page-top' }}>
            <span className="case-study-navigation__label">
              ← {previous.label}
            </span>

            <span className="case-study-navigation__title">
              {previous.title}
            </span>
          </Link>
        ) : (
          <Link to="/" state={{ scrollTo: 'selected-work' }}>
            <span className="case-study-navigation__label">
              ← {copy.selectedWorkLabel}
            </span>

            <span className="case-study-navigation__title">
              {copy.portfolioLabel}
            </span>
          </Link>
        )}
      </div>

      {next && (
        <div className="case-study-navigation__item case-study-navigation__item--next">
          <Link to={next.to} state={{ scrollTo: 'case-study-page-top' }}>
            <span className="case-study-navigation__label">
              {next.label} →
            </span>

            <span className="case-study-navigation__title">
              {next.title}
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default CaseStudyNavigation;
