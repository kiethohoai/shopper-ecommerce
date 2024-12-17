import './ProductDisplay.css';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import useShopContext from '../../contexts/useShopContext';

const ProductDisplay = ({ product }) => {
  const { addToCart } = useShopContext();

  return (
    <div className="productdisplay">
      {/* Left */}
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
        </div>

        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt={product.name}
          />
        </div>
      </div>

      {/* Right */}
      <div className="productdisplay-right">
        <h1>{product.name}</h1>

        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="Star Icon 1" />
          <img src={star_icon} alt="Star Icon 2" />
          <img src={star_icon} alt="Star Icon 3" />
          <img src={star_icon} alt="Star Icon 4" />
          <img src={star_dull_icon} alt="Star Icon 5" />
          <p>(122)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>

        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dicta
          neque eos nostrum labore dolores laudantium voluptas a nesciunt
          quibusdam?
        </div>

        <div className="productdisplay-right-sizes">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category : </span>Women, T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags : </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
