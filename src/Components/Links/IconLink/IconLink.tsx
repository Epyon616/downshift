type IconLinkType = {
  href: string,
  label: string,
  icon: string
}

const IconLink = ({href, label, icon}: IconLinkType) => (
  <a href={href} target="_blank" aria-label={label}>
    <img src={icon} className="icon" />
  </a>
);

export default IconLink;