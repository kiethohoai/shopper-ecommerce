import useShopContext from '../../contexts/useShopContext';
import './CartItems.css';
import remove_icon from '../assets/cart_cross_icon.png';

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useShopContext();

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((e, i) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={`cart-item-${i}`}>
              <div className="cartitems-format cartitems-format-main">
                <img
                  className="cartitems-product-icon"
                  src={e.image}
                  alt={e.name}
                />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  alt="Remove Icon"
                  className="cartitems-remove-icon"
                  onClick={() => removeFromCart(e.id)}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtatal</p>
              <p>${0}</p>
            </div>

            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>

            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h4>${getTotalCartAmount()}</h4>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
