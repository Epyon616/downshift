import downshiftLogo from '../../assets/ds-chevron.svg';
import './Logo.scss';

const Logo = () => (
  <div className="logo-container">
    <img src={downshiftLogo} className="logo" /><strong>down</strong>shift
  </div>
);

export default Logo;