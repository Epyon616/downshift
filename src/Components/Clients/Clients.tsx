import eeLogo from '../../Assets/client-logos/ee-logo.png';
import signStixLogo from '../../Assets/client-logos/signstix-logo.png';
import collectPlusLogo from '../../Assets/client-logos/collect-plus.jpg';
import unboxedLogo from '../../Assets/client-logos/unboxed-logo.png';
import onTheBeachLogo from '../../Assets/client-logos/on-the-beach.png';
import visfoLogo from '../../Assets/client-logos/visfo-health.png';
import './Clients.scss';

const ClientList = () => (
  <div className="clients">
    <h2>
      Who I've worked with
    </h2>
    <p>
      I've worked with teams across healthcare, technology, ecommerce and digital products, helping build, improve and modernise production software.
    </p>
  
    <div className="logos">
      <img src={visfoLogo} alt="Visfo Health" className="logo" />
      <img src={eeLogo} alt="EE" className="logo" />
      <img src={signStixLogo} alt="SignStix" className="logo" />
      <img src={collectPlusLogo} alt="Collect+" className="logo" />
      <img src={unboxedLogo} alt="Unboxed" className="logo" />
      <img src={onTheBeachLogo} alt="On The Beach" className="logo" />
    </div>
  </div>

);

export default ClientList;