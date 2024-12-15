import Hero from "../components/hero/Hero";
import NewCollection from "../components/newcollections/NewCollection";
import Offers from "../components/offers/Offers";
import Popular from "../components/popular/Popular";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
    </div>
  );
};

export default Shop;
