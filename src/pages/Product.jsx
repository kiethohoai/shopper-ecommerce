import { useParams } from 'react-router-dom';
import useShopContext from '../contexts/useShopContext';
import Breadcrums from '../components/breadcrum/Breadcrum';
import ProductDisplay from '../components/productDisplay/productDisplay';

const Product = () => {
  const { all_product } = useShopContext();
  const { productId } = useParams();

  const product = all_product.find((el) => +el.id === +productId);

  if (!product) return;

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
