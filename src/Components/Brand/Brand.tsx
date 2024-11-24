import './styles.scss';

type BrandingType = {
  size?: 'xs' | 'xl';
};

const Branding = ({ size }: BrandingType) => {
  const sizeClass = size ? size : '';
  
  return (
    <div className={'branding ' + sizeClass}>
      <span aria-label="DOWN"></span>
      <span aria-label="SHIFT"></span>
    </div>
  )
};

export default Branding;