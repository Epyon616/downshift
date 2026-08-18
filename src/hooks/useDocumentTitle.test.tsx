import { render } from '@testing-library/react';
import useDocumentTitle from './useDocumentTitle';

const TitleConsumer = ({ title }: { title: string }) => {
  useDocumentTitle(title);
  return null;
};

describe('useDocumentTitle', () => {
  it('updates the document title when the route title changes', () => {
    const { rerender } = render(<TitleConsumer title="Home page" />);
    expect(document.title).toBe('Home page');

    rerender(<TitleConsumer title="Case study" />);
    expect(document.title).toBe('Case study');
  });
});
