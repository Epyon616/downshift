import { useContext } from 'react';
import { Email } from 'react-obfuscate-email';
import { ConfigContext } from '../Contexts';

const AboutSection = () => {
  const { configs } = useContext(ConfigContext);
  return (
    <div className="code-text">
      <h2>The home of full stack developer {configs.name}</h2>
      <p>My website is currently undergoing some exciting changes, but don't worry - it will be back online very soon!</p> 
      <p>Thanks for your patience and stay tuned for updates!</p>
      <p>In the meantime if you would like to discuss a project with me drop me an <Email email={configs.email.address} subject={configs.email.subject}>email</Email></p>
    </div>
  );
}

export default AboutSection;