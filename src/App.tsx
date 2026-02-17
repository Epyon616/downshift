import ContactSection from './Sections';
import './App.scss'
import AboutSection from './Components/About';
import { Header, Footer, HeroImage, ClientList } from './Components';

const App = () => (
  <>
    <Header />
    <HeroImage />
    <main className='content'>
      <AboutSection />
      <ClientList />
      <ContactSection /> 
      <Footer />
    </main>
  </>
);

export default App
