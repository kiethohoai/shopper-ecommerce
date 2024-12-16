import './Breadcrum.css';
import breadcrum_arrow from '../assets/breadcrum_arrow.png';

const Breadcrums = ({ product }) => {
  return (
    <div className="breadcrum">
      {' '}
      HOME <img src={breadcrum_arrow} alt="HOME arrow" /> SHOP{' '}
      <img src={breadcrum_arrow} alt="SHOP arrow" /> {product.category}{' '}
      <img src={breadcrum_arrow} alt="SHOP arrow" /> {product.name}
    </div>
  );
};

export default Breadcrums;
