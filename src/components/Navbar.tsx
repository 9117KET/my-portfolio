// importing necessary modules and components
import { navLinks } from "../utils/constants";
import Theme from "./Theme";
import { useState } from "react";
import { Link } from "react-router-dom";

// Navbar functional component with "clicked" prop to track the active link
export default function Navbar({ clicked }: { clicked: string }) {
  // state to manage the toggle state of the mobile menu
  const [toggle, setToggle] = useState(false);

  return (
    // Navbar container with dark mode background and fixed position
    <nav className="dark:bg-[#2D2E32] z-[99] p-6 inset-x-0 top-0 flex justify-between items-center py-6 bg-transparent w-full">
      <h1 className="text-4xl font-semibold text-zinc-800 dark:text-gray-300 mr-5">
        <Link
          to="/"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          <span className="text-blue-800">{`<`}</span>KET
          <span className="text-blue-800">{`/>`}</span>
        </Link>
      </h1>
      <div className="hidden md:flex flex-1 justify-end items-center">
        <ul className="list-none flex justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li key={index} className="mr-10">
              <Link
                to={nav.id == "" ? "/" : `/${nav.id}`}
                className={`font-poppins font-normal cursor-pointer text-xl transition-all duration-300 border-b-2 border-transparent hover:border-blue-500 ${
                  clicked == nav.name
                    ? "text-blue-500 border-blue-500"
                    : "dark:text-gray-300"
                }`}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>

        <Theme />
      </div>

      <div className="relative">
        {/* Menu Button */}
        <div className="md:hidden flex gap-4 flex-1 justify-end items-center">
          <button
            className="cursor-pointer mt-2 dark:text-gray-300 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setToggle((prev) => !prev)}
            aria-expanded={toggle}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
          <Theme />
        </div>

        {/* Background Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-[98] transition-opacity ${
            toggle ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setToggle(false)}
          aria-hidden="true"
        ></div>

        {/* Sliding Navbar */}
        <nav
          id="mobile-menu"
          className={`${
            toggle ? "translate-x-0" : "translate-x-full"
          } fixed top-0 right-0 h-full w-64 bg-gradient-to-b bg-blue-300 dark:bg-blue-900 p-6 z-[99] transition-transform duration-300 ease-in-out`}
          aria-label="Mobile navigation"
        >
          <div className="flex justify-between items-center mb-6">
            <button
              className="cursor-pointer dark:text-gray-300 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setToggle(false)}
              aria-label="Close navigation menu"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
          </div>
          <ul className="list-none flex flex-col justify-start items-start gap-4 p-4">
            {navLinks.map((nav, index) => (
              <li key={nav.id}>
                <Link
                  to={nav.id == "" ? "/" : `/${nav.id}`}
                  className={`cursor-pointer text-gray-900 dark:text-gray-300 text-[16px] hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-4"
                  }`}
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </nav>
  );
}
