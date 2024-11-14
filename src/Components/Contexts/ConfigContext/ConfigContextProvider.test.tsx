import { render } from '@testing-library/react';
import { useContext } from 'react';
import ConfigContext from './ConfigContext';
import ConfigsProvider from './ConfigContextProvider';
import configData from '../../../conf/config.json';

const TestComponent = () => {
  const { configs } = useContext(ConfigContext);
  return (
    <>
      <p data-testid="name">{configs.name}</p>
      <p data-testid="domain">{configs.domain}</p>
    </>
  )
};

describe('<ConfigProvider />', () => {
  test('provides the expected config to child elements', () => {
    const { getByTestId } = render(
      <ConfigsProvider configJson={configData}>
        <TestComponent />
      </ConfigsProvider>,
    );
    
    const name = getByTestId('name');
    const domain = getByTestId('domain');

    expect(name.textContent).toEqual(configData.name);
    expect(domain.textContent).toEqual(configData.domain);
  });
});