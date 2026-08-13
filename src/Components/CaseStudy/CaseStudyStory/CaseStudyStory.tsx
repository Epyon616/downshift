import type { CaseStudyStoryProps } from './CaseStudyStory.types';

import './CaseStudyStory.scss';

const CaseStudyStory = ({
  number,
  title,
  children,
}: CaseStudyStoryProps) => {
  return (
    <article className="case-study-story">
      <div className="case-study-story__number" aria-hidden="true">
        {number}
      </div>

      <div className="case-study-story__content">
        <h3>{title}</h3>
        {children}
      </div>
    </article>
  );
};

export default CaseStudyStory;