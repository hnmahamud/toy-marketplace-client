import Lottie from "lottie-react";
import loadingAnimation from "../../../assets/animation/loading-animation.json";
// Loading page
const LoadingSpinner = ({ fullScreen }) => {
  // Loading animation
  return (
    <>
      {fullScreen === true ? (
        <div className="flex justify-center items-center h-screen">
          <Lottie
            className="h-48"
            animationData={loadingAnimation}
            loop={true}
          />
        </div>
      ) : (
        <div className="flex justify-center items-center h-[calc(100vh-138px)]">
          <Lottie
            className="h-48"
            animationData={loadingAnimation}
            loop={true}
          />
        </div>
      )}
    </>
  );
};

export default LoadingSpinner;
