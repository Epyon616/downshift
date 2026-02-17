import ContactSection from './Sections';
import './App.scss'
import AboutSection from './Components/About';
import { Header, Footer, HeroImage, ClientList, SocialLinks } from './Components';

const App = () => (
  <>
    <Header />
    <HeroImage />
    <main className='content'>
      <AboutSection />
      <SocialLinks />
      <ClientList />
      <ContactSection /> 
      <Footer />
    </main>
  </>
);

export default App
