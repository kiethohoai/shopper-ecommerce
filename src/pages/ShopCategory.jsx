import './ShopCategory.css';
import useShopContext from '../contexts/useShopContext';
import dropdown_icon from '../components/assets/dropdown_icon.png';
import Item from '../components/Item/Item';

const ShopCategory = ({ category, banner }) => {
  // Data
  const { all_product } = useShopContext();

  return (
    <div className="shop-category">
      {/* Banners */}
      <img className="shopcategory-banner" src={banner} alt="" />

      {/* Sorts */}
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Dropdown Icon" />
        </div>
      </div>

      {/* Products */}
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (category === item.category) {
            return (
              <Item
                key={`shopcategory-products-${i}`}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else return null;
        })}
      </div>

      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;

/* 


*/
