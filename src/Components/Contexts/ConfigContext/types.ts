import { ReactElement } from 'react';


type LinkItem = {
  link: string,
  label: string
}

export type SiteConfig = {
  name: string,
  domain: string,
  email: {
    address: string,
    subject: string
  },
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
  },
  links: {
    [key: string]: LinkItem
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
