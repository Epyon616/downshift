import ContactForm from '../../Components/ContactForm';
import './Contact.scss';

const ContactSection = () => {

  return (
    <div className="content-section">
      <div className="contact-section-intro">
        <h3>Lets chat!</h3>
        <p>If you'd like to have a chat about a project want help with, drop me an email.</p>
      </div>
      <ContactForm />
    </div>   
  );
}

export default ContactSection;