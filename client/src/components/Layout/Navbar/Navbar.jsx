import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../../context/auth";
import SearchInput from "../../Form/SearchInput";

const Navbar = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logged out successfully!");
  };

  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const closeDropdown = () => {
    setDropdown(false);
  };

  return (
    <section>
      <nav className="font-inter mx-auto h-auto w-full max-w-screen-2xl lg:relative lg:top-0">
        <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20">
          <Link to="/">
            <h1 className="text-2xl">E-Commerce</h1>
          </Link>
          <div
            className={`mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0 ${
              isOpen ? "" : "hidden"
            }`}
          >
            <SearchInput />
            <NavLink
              to="/"
              className="font-inter rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-800"
            >
              Home
            </NavLink>
            <NavLink
              to="/category"
              className="font-inter rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-800"
            >
              Category
            </NavLink>
            <NavLink
              to="/cart"
              className="font-inter lg: rounded-lg pb-8 lg:px-6 lg:py-4 lg: lg:hover:text-gray-800"
            >
              Cart (0)
            </NavLink>
          </div>
          <div
            className={`flex flex-col space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0 ${
              isOpen ? "" : "hidden"
            }`}
          >
            {!auth.user ? (
              <>
                <NavLink
                  to="/register"
                  className="font-inter rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-800"
                >
                  Sign Up
                </NavLink>
                <NavLink
                  to="/login"
                  className="font-inter rounded-lg bg-black px-8 py-4 text-center text-white hover:bg-gray-800"
                >
                  Login
                </NavLink>
              </>
            ) : (
              <>
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      id="menu-button"
                      aria-expanded={dropdown}
                      onClick={toggleDropdown}
                      aria-haspopup="true"
                    >
                      {auth?.user?.name}
                      <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  {dropdown && (
                    <div
                      className="absolute right-0 z-10 mt-2 w-full lg:w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex={-1}
                    >
                      <div className="py-1" role="none">
                        <NavLink
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex={-1}
                          id="menu-item-1"
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          onClick={closeDropdown}
                        >
                          Dashboard
                        </NavLink>
                        <NavLink
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex={-1}
                          id="menu-item-0"
                          onClick={() => {
                            handleLogout();
                            closeDropdown();
                          }}
                          to="/login"
                        >
                          Logout
                        </NavLink>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
          <button
            className="absolute right-5 lg:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-5 -7 24 24"
              width="24"
              fill="currentColor"
            >
              <path d="M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0 8h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0-4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z"></path>
            </svg>
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
