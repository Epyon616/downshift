import { createContext } from "react";
import { ConfigContextState } from "./types";

const contextDefaultValues: ConfigContextState = {
  configs: {},
  addConfig: () => {}
};

const ConfigContext = createContext<ConfigContextState>(
  contextDefaultValues
);

export default ConfigContext;