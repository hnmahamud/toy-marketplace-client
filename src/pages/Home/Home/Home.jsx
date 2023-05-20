import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import CustomerSays from "../CustomerSays/CustomerSays";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <CustomerSays></CustomerSays>
    </div>
  );
};

export default Home;
