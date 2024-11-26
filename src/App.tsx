import HeroImage from './Components/Hero';
import ContactForm from './Components/ContactForm';
// import Footer from './Components/Footer';

import './App.scss'

const App = () => {

  return (
    <>
      <HeroImage />
      <div className="content-section">
        <ContactForm />
      </div>     
    </>
  )
}

export default App
