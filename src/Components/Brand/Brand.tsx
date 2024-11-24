import { BrandingType } from './types';
import './Brand.scss';

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