import { useContext } from 'react';
import Logo from '../Logo';
import { ConfigContext } from '../Contexts';
import './Hero.scss'


const HeroImage = () => {
  const { configs: { content: { hero } } } = useContext(ConfigContext);
  return (
    <div className="hero-image">
      <div className="overlay">
        <div className="hero-text">
          <Logo />
        </div>
        <div className="intro">
          <h1>{hero.title}</h1>
          <p>{hero.skills}</p>
        </div>
        <span className="scroll blink-smooth">{hero.scrollLabel} <br /> <span className="scroll-indicator__arrow">&#x25BC;</span></span>
      </div>
    </div>
  );
};

export default HeroImage;
