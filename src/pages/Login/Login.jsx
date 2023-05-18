import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loginRegAnimation from "../../assets/login-reg-animation.json";

const Login = () => {
  return (
    <div className="md:h-[calc(100vh-69px)] mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 md:justify-center gap-4">
        <div className="">
          <Lottie
            className="h-48 md:h-[500px]"
            animationData={loginRegAnimation}
            loop={true}
          />
        </div>
        <div className="card w-full max-w-sm rounded-md border md:ml-32">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control">
                {/* <button className="bg-gray-100 w-full rounded-full btn loading text-blue-600 border border-gray-200">
                  loading
                </button> */}
                <button className="bg-gray-100 w-full text-blue-600 font-semibold border rounded-full hover:bg-gray-200">
                  <div className="flex justify-center items-center space-x-4 p-2">
                    Login
                  </div>
                </button>
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="text-center space-y-4">
              <button className="w-full border rounded-full hover:bg-gray-100">
                <div className="flex justify-center items-center space-x-4 p-2">
                  <FaGoogle className="h-6 w-6 text-blue-500"></FaGoogle>
                  <span>Continue With Google</span>
                </div>
              </button>

              <p>
                <span className="text-gray-600">
                  Don’t have an account yet?
                </span>
                <Link
                  to="/register"
                  // state={from}
                  className="text-blue-600 font-semibold ml-2"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
