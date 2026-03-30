import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import ConfigContext from './ConfigContext';

const TestConsumer = () => {
  const { configs } = useContext(ConfigContext);
  return (
    <>
      <span data-testid="name">{configs.name}</span>
      <span data-testid="domain">{configs.domain}</span>
      <span data-testid="github-link">{configs.links.github.link}</span>
    </>
  );
};

describe('ConfigContext', () => {
  it('provides empty string defaults when consumed without a provider', () => {
    render(<TestConsumer />);
    expect(screen.getByTestId('name').textContent).toBe('');
    expect(screen.getByTestId('domain').textContent).toBe('');
    expect(screen.getByTestId('github-link').textContent).toBe('');
  });
});
