import Hero from '../components/hero/Hero';
import NewCollection from '../components/newcollections/NewCollection';
import NewLetters from '../components/newsletter/NewLetters';
import Offers from '../components/offers/Offers';
import Popular from '../components/popular/Popular';

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewLetters />
    </div>
  );
};

export default Shop;
