import { useContext } from 'react';
import { AboutSection, ClientList, Footer, HeroImage, SelectedWork, SocialLinks } from '../Components';
import { ConfigContext } from '../Components/Contexts';
import { useDocumentTitle, useScrollToLocationState } from '../hooks';
import ContactSection from '../Sections';

const HomePage = () => { 
  const { configs: { content: { pageTitles } } } = useContext(ConfigContext);
  useScrollToLocationState();
  useDocumentTitle(pageTitles.home);
  return (
    <>
      <HeroImage />
      <main className='content' id="main-content" tabIndex={-1}>
        <AboutSection />
        <SocialLinks />
        <SelectedWork />
        <ClientList />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
