import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders a header element', () => {
    const { container } = render(<Header />);
    expect(container.querySelector('header')).toBeInTheDocument();
  });
});
