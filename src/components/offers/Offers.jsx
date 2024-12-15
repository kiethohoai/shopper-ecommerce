import "./Offers.css";
import exclusive_image from "../assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
      {/* Left */}
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button>Check Now</button>
      </div>

      {/* Right */}
      <div className="offers-right">
        <img src={exclusive_image} alt="Exclusive Image" />
      </div>
    </div>
  );
};

export default Offers;
