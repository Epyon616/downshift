import eeLogo from '../../Assets/client-logos/ee-logo.png';
import signStixLogo from '../../Assets/client-logos/signstix-logo.png';
import collectPlusLogo from '../../Assets/client-logos/collect-plus.jpg';
import unboxedLogo from '../../Assets/client-logos/unboxed-logo.png';
import onTheBeachLogo from '../../Assets/client-logos/on-the-beach.png';
import visfoLogo from '../../Assets/client-logos/visfo-health.png';
import './Clients.scss';

const ClientList = () => {
  const { configs: { content: { clients } } } = useContext(ConfigContext);
  const logos = [visfoLogo, eeLogo, signStixLogo, collectPlusLogo, unboxedLogo, onTheBeachLogo];
  return (
  <div className="clients">
    <h2>
      {clients.title}
    </h2>
    <p>
      {clients.description}
    </p>
  
    <div className="logos">
      {logos.map((logo, index) => <img src={logo} alt={clients.names[index]} className="logo" key={clients.names[index]} />)}
    </div>
  </div>

  );
};

export default ClientList;
import { useContext } from 'react';
import { ConfigContext } from '../Contexts';
