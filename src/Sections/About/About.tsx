import { useContext } from 'react';
import { ConfigContext } from '../../Components/Contexts';
import { IconLink } from '../../Components/Links';
import ContentBlock from '../../Components/ContentBlock';
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
      <ContentBlock content={aboutSection.description} />
      <div>
        <IconLink href={github.link} label={github.label} icon={GithubIcon} />
        <IconLink href={linkedin.link} label={linkedin.label} icon={LinkedInIcon} />
      </div>
    </div>
  );
}

export default AboutSection;