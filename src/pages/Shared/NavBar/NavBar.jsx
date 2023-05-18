import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProviders";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const { pathname } = useLocation();

  const logoutHandler = () => {
    logout()
      .then(() => {
        toast("Logout successful!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navItems = (
    <>
      <NavLink
        className={`${pathname === "/" && "text-blue-600"} hover:text-blue-600`}
      >
        Home
      </NavLink>
      <NavLink to='/all-toys' className="hover:text-blue-600">All Toys</NavLink>
      {user && (
        <>
          <NavLink className="hover:text-blue-600">My Toys</NavLink>
          <NavLink
            to="/add-toy"
            className={`${
              pathname === "/add-toy" && "text-blue-600"
            } hover:text-blue-600`}
          >
            Add A Toy
          </NavLink>
        </>
      )}
      <NavLink className="hover:text-blue-600">Blogs</NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-md border w-52 space-y-4"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2">
          <img className="h-12 w-12" src={logo} alt="" />
          <span className="text-lg font-semibold">BrainBounce</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-10">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div
            className="dropdown dropdown-end tooltip tooltip-left"
            data-tip={user.displayName}
          >
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-16 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 border rounded-md w-52 space-y-3"
            >
              <Link className="hover:text-blue-600">Profile</Link>
              <Link onClick={logoutHandler} className="hover:text-blue-600">
                Logout
              </Link>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn btn-outline btn-sm btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
