import { ReactElement } from "react";

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
  value: string | number | string[] | number[]|Record<string, unknown>  
};

export type ConfigContextState = {
  configs: SiteConfig;
};

export type ProviderPorps = {
  configJson: SiteConfig,
  children: ReactElement
}
