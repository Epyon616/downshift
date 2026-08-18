import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import useScrollToLocationState from './useScrollToLocationState';

const HookConsumer = () => {
  useScrollToLocationState();
  return null;
};

describe('useScrollToLocationState', () => {
  it('smoothly scrolls to the element named in location state', () => {
    const target = document.createElement('div');
    target.id = 'contact';
    target.focus = jest.fn();
    target.scrollIntoView = jest.fn();
    document.body.appendChild(target);

    render(
      <MemoryRouter initialEntries={[{ pathname: '/', state: { scrollTo: 'contact' } }]}>
        <HookConsumer />
      </MemoryRouter>
    );

    expect(target.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
    expect(target.focus).toHaveBeenCalledWith({ preventScroll: true });

    target.remove();
  });

  it.each([
    ['missing location state', { pathname: '/' }],
    ['an unknown element id', { pathname: '/', state: { scrollTo: 'missing' } }],
  ])('does nothing for %s', (_description, entry) => {
    const scrollIntoView = jest.fn();
    const target = document.createElement('div');
    target.id = 'contact';
    target.scrollIntoView = scrollIntoView;
    document.body.appendChild(target);

    render(
      <MemoryRouter initialEntries={[entry]}>
        <HookConsumer />
      </MemoryRouter>
    );

    expect(scrollIntoView).not.toHaveBeenCalled();
    target.remove();
  });
});
