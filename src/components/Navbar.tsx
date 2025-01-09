// importing necessary modules and components
import { navLinks } from "../utils/constants";
import Theme from "./Theme";
import { useState } from "react";

// Navbar functional component with "clicked" prop to track the active link
export default function Navbar({ clicked }: { clicked: string }) {
  // state to manage the toggle state of the mobile menu
  const [toggle, setToggle] = useState(false);

  return (
    // Navbar container with dark mode background and fixed position
    <nav className="dark:bg-[#2D2E32] z-[99] p-6 inset-x-0 top-0 flex justify-between items-center py-6 bg-transparent w-full">
      <h1 className="text-4xl font-semibold text-zinc-800 dark:text-gray-300 mr-5">
        <span className="text-blue-800">{`<`}</span>KET
        <span className="text-blue-800">{`/>`}</span>
      </h1>
      <div className="hidden md:flex flex-1 justify-end items-center">
        <ul className="list-none flex justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li key={index} className="mr-10">
              <a
                href={nav.id == "" ? "/" : nav.id}
                className={`font-poppins font-normal cursor-pointer text-xl transition-all duration-300 border-b-2 border-transparent hover:border-blue-500 ${
                  clicked == nav.name
                    ? "text-blue-500 border-blue-500"
                    : "dark:text-gray-300"
                }`}
              >
                {nav.name}
              </a>
            </li>
          ))}
        </ul>

        <Theme />
      </div>

      <div className="relative">
        {/* Menu Button */}
        <div className="md:hidden flex gap-4 flex-1 justify-end items-center">
          <div
            className="cursor-pointer mt-2 dark:text-gray-300"
            onClick={() => setToggle((prev) => !prev)}
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </div>
          <Theme />
        </div>

        {/* Background Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-[98] transition-opacity ${
            toggle ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        ></div>

        {/* Sliding Navbar */}
        <div
          className={`${
            toggle ? "translate-x-0" : "translate-x-full"
          } fixed top-0 right-0 h-full w-64 bg-gradient-to-b bg-blue-300 dark:bg-blue-900 p-6 z-[99] transition-transform duration-300 ease-in-out`}
        >
          <div className="flex justify-between items-center mb-6">
            <div
              className="cursor-pointer dark:text-gray-300"
              onClick={() => setToggle(false)}
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </div>
          </div>
          <ul className="list-none flex flex-col justify-start items-start gap-4 p-4">
            {navLinks.map((nav, index) => (
              <li key={nav.id}>
                <a
                  href={nav.id == "" ? "/" : nav.id}
                  className={`cursor-pointer dark:text-gray-300 text-[16px] hover:text-violet-600 transition-all ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-4"
                  } dark:text-white`}
                >
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
