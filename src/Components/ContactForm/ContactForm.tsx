import { useState, useContext } from 'react';
import emailjs from '@emailjs/browser'
import { ContactFormState } from './types';
import { ConfigContext } from '../Contexts';
import { TextInput, TextArea, SubmitButton } from '../FormElements';
import Notification from '../Notification';

import './ContactForm.scss';

const ContactForm = () => {
  const { configs } = useContext(ConfigContext);
  const { contactForm, email, name } = configs;
  const {
    labels,
    placeholders,
    enabledButtonLabel,
    disabledButtonLabel,
    thankyouMessage,
    errorMessage,
    requiredFieldsMessage,
  } = contactForm;
  const defaultData = {
    name: '',
    email: '',
    contactNo: '',
    message: ''
  };

  const [formData, setFormData] = useState<ContactFormState> (defaultData);
  const [notification, setNotification] = useState<{
    message: string,
    type: 'success' | 'error'
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData(prevData => ({...prevData, [name]: value}))
  }

  const messageVars = {
    to_name: name,
    from_name: formData.name,
    reply_to: formData.email,
    subject: email.subject,
    message: `${formData.message}\n\n ${email.contactDetailsLabel}\n ${email.phoneLabel} ${formData.contactNo}\n ${email.emailLabel} ${formData.email}`
  }

  const isDisabled = () => Object.entries(formData).filter(([,v])=> v === '').length > 0;
  const submitLabel = isDisabled() ? disabledButtonLabel : enabledButtonLabel;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        messageVars,
        import.meta.env.VITE_PUBLIC_KEY
      );
      setNotification({ message: thankyouMessage, type: 'success' });
      setFormData(defaultData);
    } catch (error) {
      console.error('FAILED...', error);
      setNotification({ message: errorMessage, type: 'error' });
    }
  }

  return (
    <div className="contact-form">
      <Notification
        showNotification={notification !== null}
        message={notification?.message ?? ''}
        type={notification?.type}
      />
      <form method="POST" onSubmit={handleSubmit} aria-describedby="required-fields-message">
        <p id="required-fields-message">{requiredFieldsMessage}</p>
        <TextInput 
          label={labels.nameLabel} 
          type="text"
          fieldName="name" 
          placeholderText={placeholders.name}
          handleChange={handleChange} 
          value={formData.name} 
          required 
        /> 
        <TextInput 
          label={labels.emailLabel} 
          type="email" 
          fieldName="email" 
          placeholderText={placeholders.email}
          handleChange={handleChange} 
          value={formData.email} 
          required 
        />
        <TextInput
          label={labels.contactNumberLabel}
          type="tel"
          fieldName="contactNo"
          placeholderText={placeholders.contactNumber}
          handleChange={handleChange}
          value={formData.contactNo}
          required
        />
        <TextArea 
          label={labels.messageLabel} 
          fieldName="message" 
          placeholderText={placeholders.message}
          handleChange={(e) => handleChange(e)} 
          value={formData.message} 
          required 
        />
        <SubmitButton 
          value={submitLabel} 
          disabled={isDisabled()}
        />
      </form>
    </div>
  );
}

export default ContactForm;
