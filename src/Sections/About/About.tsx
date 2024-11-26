import { useContext } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { ConfigContext } from '../../Components/Contexts';
import './About.scss';

const AboutSection = () => {
  const { configs: { name, aboutSection} } = useContext(ConfigContext);

  return (
    <div className="about-content">
      <h4 className="subtitle">{aboutSection.title} <em>{name}</em></h4>
      {ReactHtmlParser(aboutSection.description)}
    </div>
  );
}

export default AboutSection;