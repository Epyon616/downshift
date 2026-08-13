import { Link } from 'react-router-dom';
import logo from '../../Assets/ds-chevron.svg';
import './SiteHeader.scss';

const SiteHeader = () => {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link
          className="site-header__logo"
          to="/"
          aria-label="Downshift home"
        >
          <img src={logo} alt="Downshift Ltd" />
        </Link>

        <nav className="site-header__navigation" aria-label="Main navigation">
          <Link to="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;