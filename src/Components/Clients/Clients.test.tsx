import { screen } from '@testing-library/react';
import render from '../../test/renderWithConfig';
import ClientList from './Clients';

describe('ClientList', () => {
  it('renders the heading', () => {
    render(<ClientList />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders all client logos', () => {
    render(<ClientList />);
    const logos = screen.getAllByRole('img');
    expect(logos).toHaveLength(6);
  });

  it('renders each client by name', () => {
    render(<ClientList />);
    expect(screen.getByAltText('EE')).toBeInTheDocument();
    expect(screen.getByAltText('SignStix')).toBeInTheDocument();
    expect(screen.getByAltText('Collect+')).toBeInTheDocument();
    expect(screen.getByAltText('Unboxed')).toBeInTheDocument();
    expect(screen.getByAltText('On The Beach')).toBeInTheDocument();
    expect(screen.getByAltText('Visfo Health')).toBeInTheDocument();
  });
});
