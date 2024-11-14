import { createContext } from 'react';
import { ConfigContextState } from './types';

const contextDefaultValues: ConfigContextState = {
  configs: {
    name: '',
    domain: '',
    email: {
      address: '',
      subject: ''
    }
  }
};

const ConfigContext = createContext<ConfigContextState>(
  contextDefaultValues
);

export default ConfigContext;