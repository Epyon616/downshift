import { Link } from 'react-router-dom';
import type { CaseStudyNavigationProps } from './CaseStudyNavigation.types';

import './CaseStudyNavigation.scss';

const CaseStudyNavigation = ({
  previous,
  next,
}: CaseStudyNavigationProps) => {
  return (
    <nav
      className="case-study-navigation"
      aria-label="Case study navigation"
    >
      <div className="case-study-navigation__item">
        {previous ? (
          <Link to={previous.to}>
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
              ← Selected work
            </span>

            <span className="case-study-navigation__title">
              Back to portfolio
            </span>
          </Link>
        )}
      </div>

      {next && (
        <div className="case-study-navigation__item case-study-navigation__item--next">
          <Link to={next.to}>
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