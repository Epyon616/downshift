import { useContext } from 'react';
import { ConfigContext } from '../../Components/Contexts';
import ContactForm from '../../Components/ContactForm';

import './Contact.scss';

const ContactSection = () => {
  const { configs: { contactForm } } = useContext(ConfigContext);
  return (
    <>
      <div className="contact-section-intro" id="contact" tabIndex={-1}>
        <h2>{contactForm.title}</h2>
        <p>{contactForm.tagline}</p>
      </div>
      <ContactForm /> 
    </>
  );
}

export default ContactSection;
