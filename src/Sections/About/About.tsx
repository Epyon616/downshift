import { useContext } from 'react';
import { ConfigContext } from '../../Components/Contexts';

const AboutSection = () => {
  const { configs } = useContext(ConfigContext);
  return (
    <div>
      <h2>The home of full stack developer <em>{configs.name}</em></h2>
      <p>My website is currently undergoing some exciting changes, but don't worry - it will be back online very soon!</p> 
      <p>Thanks for your patience and stay tuned for updates!</p>
      <p>In the meantime if you would like to discuss a project with me drop me a message using the form below.</p>
    </div>
  );
}

export default AboutSection;