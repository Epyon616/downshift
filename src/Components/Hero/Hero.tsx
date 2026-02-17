import './Hero.scss'
import downshiftLogo from '../../assets/ds-chevron.svg';

const HeroImage = () => {
  return (
    <div className="hero-image">
      <div className="overlay">
        <div className="hero-text">
          <img src={downshiftLogo} className="logo" /><strong>down</strong>shift
        </div>
        <span className="scroll blink-smooth">Scroll <br /> &#x25BC;</span>
      </div>
    </div>
  );
};

export default HeroImage;