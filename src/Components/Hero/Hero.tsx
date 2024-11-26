import Branding from '../Brand';
import AboutSection from '../../Sections/About';
import './Hero.scss'

const HeroImage = () => {
  return (
    <div className="hero-image">
      <div className="overlay">
        <div className="hero-text">
          <Branding size="xl" />
          <AboutSection />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;