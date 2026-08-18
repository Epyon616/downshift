import { useContext } from 'react';
import SiteHeader from '../../SiteHeader/SiteHeader';
import { ConfigContext } from '../../Contexts';
import type { CaseStudyLayoutProps } from './CaseStudyLayout.types';
import { useScrollToLocationState } from '../../../hooks';
import './CaseStudyLayout.scss';

const CaseStudyLayout = ({ children }: CaseStudyLayoutProps) => {
  const { configs: { content: { brandName } } } = useContext(ConfigContext);
  useScrollToLocationState();
  return (
    <div className="case-study-layout" id="case-study-page-top" tabIndex={-1}>
      <SiteHeader />

      <main className="case-study-layout__main" id="main-content" tabIndex={-1}>{children}</main>

      <footer className="case-study-layout__footer">
        <small>© {new Date().getFullYear()} {brandName}</small>
      </footer>
    </div>
  );
};

export default CaseStudyLayout;
