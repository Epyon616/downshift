import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ConfigContext } from '../Contexts';
import logo from '../../Assets/ds-chevron.svg';
import './SiteHeader.scss';

const SiteHeader = () => {
  const { configs: { content: { siteHeader } } } = useContext(ConfigContext);
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link
          className="site-header__logo"
          to="/"
          aria-label={siteHeader.homeLabel}
        >
          <img src={logo} alt={siteHeader.logoAlt} />
        </Link>

        <nav className="site-header__navigation" aria-label={siteHeader.navigationLabel}>
          <Link to="/" state={{ scrollTo: 'contact' }}>{siteHeader.contactLabel}</Link>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
