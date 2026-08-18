import './Footer.scss';

const Footer = () => {
  const { configs: { content: { brandName } } } = useContext(ConfigContext);
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {brandName}</p>
    </footer>
  );
};

export default Footer;
import { useContext } from 'react';
import { ConfigContext } from '../Contexts';
