import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loginRegAnimation from "../../assets/animation/login-reg-animation.json";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProviders";
import useTitle from "../../hooks/useTitle";
import useScrollTop from "../../hooks/useScrollTop";
import { toast } from "react-toastify";

const Register = () => {
  // Custom hook
  const { pathname } = useLocation();
  useScrollTop(pathname);
  useTitle("Register");

  // Context API
  const { createUser, profileUpdate, setLoading } = useContext(AuthContext);

  // state
  const [error, setError] = useState("");
  const [nLoading, setNLoading] = useState(false);

  // Use Location for redirect target page or home page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || "/";

  // Registration with email password
  const handleReg = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photoUrl.value;
    const password = form.confirmPassword.value;

    setNLoading(true);

    // Create user
    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        form.reset();
        const user = userCredential.user;
        console.log(user);
        toast("Registration successful!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        // Update user profile
        profileUpdate(name, photo)
          .then(() => {
            setLoading(false);
            setNLoading(false);
            navigate(from, { replace: true });
          })
          .catch((error) => {
            setLoading(false);
            setNLoading(false);
            navigate(from, { replace: true });
            console.log(error);
            setError(error);
          });
      })
      .catch((error) => {
        setLoading(false);
        setNLoading(false);
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };
  return (
    <div className="md:h-[calc(100vh-69px)] my-8">
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
            <h1 className="text-center text-2xl text-gray-500 font-extrabold mb-4">
              Sign Up
            </h1>
            <p className="text-red-600">{error}</p>
            <form onSubmit={handleReg}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  name="photoUrl"
                  type="url"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
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
                  required
                />
              </div>
              <div className="form-control mt-4">
                {nLoading ? (
                  <button className="bg-gray-100 w-full rounded-full text-blue-600 border border-gray-200 p-2">
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="inline w-6 h-6 text-gray-200 animate-spin fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  </button>
                ) : (
                  <button className="bg-gray-100 w-full text-blue-600 font-semibold border rounded-full hover:bg-gray-200">
                    <div className="flex justify-center items-center space-x-4 p-2">
                      Sign Up
                    </div>
                  </button>
                )}
              </div>
            </form>
            <div className="text-center space-y-4 mt-4">
              <p>
                <span className="text-gray-600">Already have an account?</span>
                <Link to="/login" className="text-blue-600 font-semibold ml-2">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
