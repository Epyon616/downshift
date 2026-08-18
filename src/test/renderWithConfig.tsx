import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import ConfigsProvider from '../Components/Contexts/ConfigContext/ConfigContextProvider';
import configData from '../Conf/config.json';

const renderWithConfig = (ui: ReactElement) => render(
  <ConfigsProvider configJson={configData}>{ui}</ConfigsProvider>
);

export default renderWithConfig;
