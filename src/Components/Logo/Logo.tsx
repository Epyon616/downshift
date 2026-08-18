import downshiftLogo from '../../Assets/ds-chevron.svg';
import './Logo.scss';

const Logo = () => {
  const { configs: { content } } = useContext(ConfigContext);
  return (
    <div className="logo-container">
      <img src={downshiftLogo} className="logo" alt="" /><strong>{content.brandWordmarkStart}</strong>{content.brandWordmarkEnd}
    </div>
  );
};

export default Logo;
import { useContext } from 'react';
import { ConfigContext } from '../Contexts';
