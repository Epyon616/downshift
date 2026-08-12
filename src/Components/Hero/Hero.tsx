import Logo from '../Logo';
import './Hero.scss'


const HeroImage = () => {
  return (
    <div className="hero-image">
      <div className="overlay">
        <div className="hero-text">
          <Logo />
        </div>
        <div className="intro">
          <h1>SENIOR SOFTWARE ENGINEER</h1> 
          <p>React · TypeScript · Node.js · SaaS</p>
        </div>
        <span className="scroll blink-smooth">Scroll <br /> <span className="scroll-indicator__arrow">&#x25BC;</span></span>
      </div>
    </div>
  );
};

export default HeroImage;