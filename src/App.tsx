import Branding from './Components/Brand';
import AboutSection from './Components/About';

import './App.scss'

const App = () => {

  return (
    <>
      <div className='header hazard-background'>&nbsp;</div>
      <div className="content">
        <Branding size="xl" />
        <AboutSection />
      </div>
      <footer>
        <Branding size="xs" />
      </footer>
    </>
  )
}

export default App
