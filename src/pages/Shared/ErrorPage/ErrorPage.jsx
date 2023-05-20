import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import error404 from "../../../assets/animation/404-animation.json";
import useTitle from "../../../hooks/useTitle";

// Error page
const ErrorPage = () => {
  // Custom hook for set website page wise title
  useTitle("Page Not Found");
  const { error } = useRouteError();
  console.error(error);
  return (
    <section className="flex items-center h-screen">
      <div className="flex flex-col items-center justify-center px-5 mx-auto">
        <Lottie className="h-[500px]" animationData={error404} loop={true} />
        <div className="text-center">
          <p className="text-lg font-semibold md:text-xl text-red-800 mb-4">
            {error?.message}
          </p>
          <Link
            to="/"
            className="btn btn-xs border-0 rounded-md transition-colors duration-200 bg-blue-500 hover:bg-blue-600 px-12"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
