import { useState, useContext } from 'react';
import emailjs from '@emailjs/browser'
import { ContactFormState } from './types';
import { ConfigContext } from '../Contexts';
import { TextInput, TextArea, SubmitButton } from '../FormElements';
import Notification from '../Notification';

import './ContactForm.scss';

const ContactForm = () => {
  const { configs } = useContext(ConfigContext);
  const { contactForm , email, name } = configs;
  const { labels, enabledButtonLabel, disabledButtonLabel, thankyouMessage }  = contactForm;
  const defaultData = {
    name: '',
    email: '',
    contactNo: '',
    message: ''
  };

  const [formData, setFormData] = useState<ContactFormState> (defaultData);
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData(prevData => ({...prevData, [name]: value}))
  }

  const messageVars = {
    to_name: name,
    from_name: formData.name,
    reply_to: formData.email,
    subject: email.subject,
    message: `${formData.message}\n\n contact details:\n phone: ${formData.contactNo}\n email: ${formData.email}`
  }

  const isDisabled = () => Object.entries(formData).filter(([,v])=> v === '').length > 0;
  const submitLabel = isDisabled() ? disabledButtonLabel : enabledButtonLabel;

  const handleSubmit = async (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_SERVICE_ID, 
      import.meta.env.VITE_TEMPLATE_ID,
      messageVars,
      import.meta.env.VITE_PUBLIC_KEY
    ).then(
      () => {
        setShowNotification(!showNotification);
        setFormData(defaultData);
      },
      (error) => {
        console.error('FAILED...', error);
      },
    );
  }

  return (
    <div className="contact-form">
      <Notification showNotification={showNotification} message={thankyouMessage} />
      <form  method="POST">
        <TextInput 
          label={labels.nameLabel} 
          type="name" 
          fieldName="name" 
          placeholderText="your name" 
          handleChange={handleChange} 
          value={formData.name} 
          required 
        /> 
        <TextInput 
          label={labels.emailLabel} 
          type="email" 
          fieldName="email" 
          placeholderText="name@domain.com" 
          handleChange={handleChange} 
          value={formData.email} 
          required 
        />
        <TextInput 
          label={labels.contactNumberLabel} 
          type="tel" 
          fieldName="contactNo" 
          placeholderText="Your contact number" 
          handleChange={handleChange} 
          value={formData.contactNo} 
          required 
        />
        <TextArea 
          label={labels.messageLabel} 
          fieldName="message" 
          placeholderText="Your message" 
          handleChange={(e) => handleChange(e)} 
          value={formData.message} 
          required 
        />
        <SubmitButton 
          value={submitLabel} 
          handleSubmit={(e) => handleSubmit(e)}
          disabled={isDisabled()}
        />
      </form>
    </div>
  );
}

export default ContactForm;
