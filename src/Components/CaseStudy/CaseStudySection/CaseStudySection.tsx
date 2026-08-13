import type { CaseStudySectionProps } from './CaseStudySection.types';

import './CaseStudySection.scss';

const CaseStudySection = ({
  label,
  title,
  children,
}: CaseStudySectionProps) => {
  return (
    <section className="case-study-section">
      <div className="case-study-section__label">
        <span>{label}</span>
      </div>

      <div className="case-study-section__content">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default CaseStudySection;