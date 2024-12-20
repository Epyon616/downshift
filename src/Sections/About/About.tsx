import { useContext } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { ConfigContext } from '../../Components/Contexts';
import GithubIcon from '../../assets/github.svg';
import LinkedInIcon from '../../assets/linkedin.svg';
import './About.scss';

const AboutSection = () => {
  const { configs } = useContext(ConfigContext);
  const  { name, aboutSection, links } = configs;
  const { github, linkedin } = links;

  return (
    <div className="about-content">
      <h4 className="subtitle">{aboutSection.title} <em>{name}</em></h4>
      {ReactHtmlParser(aboutSection.description)}
      <div>
        <a href={github} target="_blank"><img src={GithubIcon} className="icon" /></a>
        <a href={linkedin} target="_blank"><img src={LinkedInIcon} className="icon" /></a>
      </div>
    </div>
  );
}

export default AboutSection;