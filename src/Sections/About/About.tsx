import { useContext } from 'react';
import { ConfigContext } from '../../Components/Contexts';
import './About.scss';

const AboutSection = () => {
  const { configs } = useContext(ConfigContext);
  return (
    <div className="about-content">
      <h4 className="subtitle">The home of full stack developer <em>{configs.name}</em></h4>
      <p>My website is currently undergoing some exciting changes, but don't worry - it will be back online very soon!</p> 
      <p>In the meantime if you would like to discuss a project with me drop me a message using the form below.</p>
      <p>Thanks for your patience and stay tuned for updates!</p>
    </div>
  );
}

export default AboutSection;