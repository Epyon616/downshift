import { ReactElement } from 'react';

export type SiteConfig = {
  name: string,
  domain: string,
  email: {
    address: string,
    subject: string
  },
  aboutSection: {
    title: string,
    description: string
  }
  contactForm: {
    title: string,
    tagline: string,
    disabledButtonLabel: string,
    enabledButtonLabel: string,
    thankyouMessage: string,
    labels: {
      nameLabel: string,
      emailLabel:  string,
      contactNumberLabel: string,
      messageLabel: string
    }
  }
}

export type ConfigObject = {
  key: string
  value: unknown 
};

export type ConfigContextState = {
  configs: SiteConfig;
};

export type ProviderPorps = {
  configJson: SiteConfig,
  children: ReactElement
}
