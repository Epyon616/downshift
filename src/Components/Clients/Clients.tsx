import eeLogo from '../../assets/client-logos/ee-logo.png';
import signStixLogo from '../../assets/client-logos/signstix-logo.png';
import collectPlusLogo from '../../assets/client-logos/collect-plus.jpg';
import unboxedLogo from '../../assets/client-logos/unboxed-logo.png';
import onTheBeachLogo from '../../assets/client-logos/on-the-beach.png';
import visfoLogo from '../../assets/client-logos/visfo-health.png';
import './Clients.scss';

const ClientList = () => (
  <>
    <h2>
      Who I've worked with
    </h2>
    <p>
      I’ve spent the past two decades collaborating with ambitious teams and forward-thinking companies.
      Let’s build something great together.
    </p>
    <div className="clients">
      <img src={visfoLogo} alt="Visfo Health" className="logo" />
      <img src={eeLogo} alt="EE" className="logo" />
      <img src={signStixLogo} alt="SignStix" className="logo" />
      <img src={collectPlusLogo} alt="Collect+" className="logo" />
      <img src={unboxedLogo} alt="Unboxed" className="logo" />
      <img src={onTheBeachLogo} alt="On The Beach" className="logo" />
    </div>
  </>
);

export default ClientList;