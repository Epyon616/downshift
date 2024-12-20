import { createContext } from 'react';
import { ConfigContextState } from './types';

const contextDefaultValues: ConfigContextState = {
  configs: {
    name: '',
    domain: '',
    email: {
      address: '',
      subject: ''
    },
    aboutSection: {
      title: '',
      description: ''
    },
    contactForm: {
      title: '',
      tagline: '',
      disabledButtonLabel: '',
      enabledButtonLabel: '',
      thankyouMessage: '',
      labels: {
        nameLabel: '',
        emailLabel:  '',
        contactNumberLabel: '',
        messageLabel: ''
      }
    },
    links: {
      github: '',
      linkedin: ''
    }
  }
};

const ConfigContext = createContext<ConfigContextState>(
  contextDefaultValues
);

export default ConfigContext;