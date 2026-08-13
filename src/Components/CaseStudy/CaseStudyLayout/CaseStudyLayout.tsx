import SiteHeader from '../../SiteHeader/SiteHeader';
import type { CaseStudyLayoutProps } from './CaseStudyLayout.types';

import './CaseStudyLayout.scss';

const CaseStudyLayout = ({ children }: CaseStudyLayoutProps) => {
  return (
    <div className="case-study-layout">
      <SiteHeader />

      <main className="case-study-layout__main">{children}</main>

      <footer className="case-study-layout__footer">
        <small>© {new Date().getFullYear()} Downshift</small>
      </footer>
    </div>
  );
};

export default CaseStudyLayout;