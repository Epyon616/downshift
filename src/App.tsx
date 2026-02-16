import ContactSection from './Sections';
import './App.scss'
import AboutSection from './Components/About';
import { Header, Footer, HeroImage, ClientList } from './Components';

const App = () => (
  <>
    <Header />
    <HeroImage />
    <section className='content'>
      <AboutSection />
      <ClientList />
      <ContactSection /> 
    </section>
    <Footer />
  </>
);

export default App
