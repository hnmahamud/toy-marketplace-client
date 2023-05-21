import { useLocation } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import CustomerSays from "../CustomerSays/CustomerSays";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import useScrollTop from "../../../hooks/useScrollTop";

const Home = () => {
  // Custom hook
  const { pathname } = useLocation();
  useScrollTop(pathname);
  useTitle("Home");

  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <CustomerSays></CustomerSays>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
