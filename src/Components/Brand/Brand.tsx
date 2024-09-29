import './styles.scss';

type BrandingType = {
  size?: string;
};

const Branding = ({ size }: BrandingType) => {
  const sizeClass = size ? size : '';
  
  return (
    <div className={"branding " + sizeClass}>
      <span data-text="DOWN"></span>
      <span data-text="SHIFT"></span>
    </div>
  )
};

export default Branding;