import { render, screen } from '@testing-library/react';
import IconLink from './IconLink';
import GithubIcon from '../../../assets/github.svg';

describe('IconLink', () => {
  const linkRef = 'https://example.com';
  const labelText = 'test';
  it('Should render correctly when all props are passed', () => {
    render(<IconLink href={linkRef} label={labelText} icon={GithubIcon} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', linkRef);
    expect(screen.getByRole('link')).toHaveAttribute('aria-label', labelText); 
  });
});