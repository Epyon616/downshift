import { ReactElement } from "react";

export type ConfigObject = {
  key: string
  value: any
};

export type ConfigContextState = {
  configs: any;
  addConfig: (prevConfig:any, config: ConfigObject) => void;
};

export type ProviderPorps = {
  configJson: any,
  children: ReactElement
}
