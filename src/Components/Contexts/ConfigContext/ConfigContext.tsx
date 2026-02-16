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
      github: {
        label: '',
        link: ''
      },
      linkedin: {
        label: '',
        link: ''
      }
    }
  }
};

const ConfigContext = createContext<ConfigContextState>(
  contextDefaultValues
);

export default ConfigContext;