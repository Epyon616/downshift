type SkipLinkProps = {
  label: string;
};

const SkipLink = ({ label }: SkipLinkProps) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById('main-content')?.focus();
  };

  return (
    <a className="skip-link" href="#main-content" onClick={handleClick}>
      {label}
    </a>
  );
};

export default SkipLink;
