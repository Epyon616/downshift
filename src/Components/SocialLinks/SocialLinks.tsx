import { useContext } from 'react';
import { ConfigContext } from '../Contexts';
import { IconLink } from '../Links';
import GithubIcon from '../../assets/github.svg';
import LinkedInIcon from '../../assets/linkedin.svg';
import './SocialLinks.scss';

const SocialLinks = () => {
  const { configs } = useContext(ConfigContext);
  const  { links } = configs;
  const { github, linkedin } = links;

  return (
    <div className="social-links">
      <IconLink href={github.link} label={github.label} icon={GithubIcon} />
      <IconLink href={linkedin.link} label={linkedin.label} icon={LinkedInIcon} />
    </div>
  );
}

export default SocialLinks;