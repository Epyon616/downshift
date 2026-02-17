import './Hero.scss'

const HeroImage = () => {
  return (
    <div className="hero-image">
      <div className="overlay">
        <div className="hero-text">
          <span className="logo"></span><strong>down</strong>shift
        </div>
        <span className="scroll blink-smooth">Scroll <br /> &#x25BC;</span>
      </div>
    </div>
  );
};

export default HeroImage;