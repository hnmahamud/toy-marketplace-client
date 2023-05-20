import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProviders";
import LoadingSpinner from "../pages/Shared/LoadingSpinner/LoadingSpinner";

const Main = () => {
  const { fullLoading } = useContext(AuthContext);

  if (fullLoading) {
    return <LoadingSpinner fullScreen={true}></LoadingSpinner>;
  }

  return (
    <div className="w-[95%] md:w-[80%] mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
