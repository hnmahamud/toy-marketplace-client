import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";

const NavBar = () => {
  const { pathname } = useLocation();
  const navItems = (
    <>
      <NavLink
        className={`${pathname === "/" && "text-blue-600"} hover:text-blue-600`}
      >
        Home
      </NavLink>
      <NavLink className="hover:text-blue-600">All Toys</NavLink>
      <NavLink className="hover:text-blue-600">My Toys</NavLink>
      <NavLink className="hover:text-blue-600">Add A Toy</NavLink>
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
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-16 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 border rounded-md w-52 space-y-3"
          >
            <Link className="hover:text-blue-600">Profile</Link>
            <Link className="hover:text-blue-600">Logout</Link>
          </ul>
        </div>
        <Link to="/login" className="btn btn-outline btn-sm btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
