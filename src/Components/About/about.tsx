import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ConfigContext } from '../Contexts';
import leeRichmondImage from '../../Assets/lee_richmond.jpg';
import './about.scss';

const AboutSection = () => {
  const { configs: { content: { about } } } = useContext(ConfigContext);
  return (
  <section className="about">
    <div className="about-bio">
      <div>
        <h2>
          {about.title}
        </h2>
        {about.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <div>
        <img src={leeRichmondImage} alt={about.imageAlt} />
      </div>
    </div>

    <div className="capability-blocks">
      {about.capabilities.map((capability) => (
        <div key={capability.title}>
          <h3>{capability.title}</h3>
          <p>{capability.description}</p>
        </div>
      ))}
    </div>
    <div className="cta">
      <strong>
        <p>
          {about.cta[0]}
        </p>
        <p>
          {about.cta[1]}
        </p>
        <p>
          <Link to="/" state={{ scrollTo: 'contact' }}>{about.ctaLink}</Link>.
        </p>
      </strong>
    </div>
  </section>
  );
};

export default AboutSection;
