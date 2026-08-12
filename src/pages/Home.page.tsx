import { AboutSection, ClientList, Footer, Header, HeroImage, SelectedWork, SocialLinks } from '../Components';
import ContactSection from '../Sections';

const HomePage = () => { 
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