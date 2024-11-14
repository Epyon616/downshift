import { ReactElement } from 'react';

export type SiteConfig = {
  name: string,
  domain: string,
  email: {
    address: string,
    subject: string
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
