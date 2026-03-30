import { render, screen } from '@testing-library/react';
import ContentBlock from './ContentBlock';

describe('ContentBlock', () => {
  it('renders plain text content', () => {
    render(<ContentBlock content="Hello world" />);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it('renders HTML content', () => {
    render(<ContentBlock content="<p>Some <strong>bold</strong> text</p>" />);
    expect(screen.getByText('bold')).toBeInTheDocument();
  });

  it('renders a link from HTML content', () => {
    render(<ContentBlock content='<a href="https://example.com">Click here</a>' />);
    expect(screen.getByRole('link', { name: 'Click here' })).toHaveAttribute('href', 'https://example.com');
  });
});
