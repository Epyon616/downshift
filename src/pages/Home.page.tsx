import { AboutSection, ClientList, Footer, Header, HeroImage, SelectedWork, SocialLinks } from '../Components';
import { useScrollToLocationState } from '../hooks';
import ContactSection from '../Sections';

const HomePage = () => { 
  useScrollToLocationState();
  return (
    <>
      <Header />
      <HeroImage />
      <main className='content'>
        <AboutSection />
        <SocialLinks />
        <SelectedWork />
        <ClientList />
        <ContactSection />  
        <Footer />
      </main>
      
    </>
  );
}

export default HomePage;