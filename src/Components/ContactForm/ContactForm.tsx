import { useState, useContext } from 'react';
import emailjs from '@emailjs/browser'
import { ContactFormState } from './types';
import { ConfigContext } from '../Contexts';
import { TextInput, TextArea, SubmitButton } from '../FormElements';

import './ContactForm.scss';

const ContactForm = () => {
  const { configs } = useContext(ConfigContext);

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
    to_name: configs.name,
    from_name: formData.name,
    reply_to: formData.email,
    message: `${formData.message}\n\n contact details:\n phone: ${formData.contactNo}\n email: ${formData.email}`
  }

  const isDisabled = () => Object.entries(formData).filter(([,v])=> v === '').length > 0;
  const submitLabel = isDisabled() ? 'Please fill in all fields...' : 'Send';

  const handleSubmit = async (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_SERVICE_ID, 
      import.meta.env.VITE_TEMPLATE_ID,
      messageVars,
      import.meta.env.VITE_PUBLIC_KEY
    ).then(
      () => {
        console.log('SUCCESS!');
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
      <div className={'notification' + (showNotification ? ' show' : '')}>
        Thank you! I'll be in touch soon!
      </div>
      <form  method="POST">
        <TextInput 
          label="Name" 
          type="text" 
          fieldName="name" 
          placeholderText="your name" 
          handleChange={handleChange} 
          value={formData.name} 
          required 
        /> 
        <TextInput 
          label="Email" 
          type="email" 
          fieldName="email" 
          placeholderText="name@domain.com" 
          handleChange={handleChange} 
          value={formData.email} 
          required 
        />
        <TextInput 
          label="Contact No" 
          type="tel" 
          fieldName="contactNo" 
          placeholderText="Your contact number" 
          handleChange={handleChange} 
          value={formData.contactNo} 
          required 
        />
        <TextArea 
          label="Message" 
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
