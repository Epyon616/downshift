import Branding from '../Brand';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Copyright &copy; 2024</p>
      <Branding size="xs" />
    </footer>
  );
};

export default Footer;