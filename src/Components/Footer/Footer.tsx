import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Downshift</p>
    </footer>
  );
};

export default Footer;