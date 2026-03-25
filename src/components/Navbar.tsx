// importing necessary modules and components
import { navLinks } from "../utils/constants";
import Theme from "./Theme";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

// Navbar functional component. `clicked` is legacy; active state is router-driven.
export default function Navbar({ clicked: _clicked }: { clicked?: string }) {
  // state to manage the toggle state of the mobile menu
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full border-b border-outline-variant/20 bg-surface/80 backdrop-blur-xl shadow-2xl shadow-primary/10">
      <div className="flex justify-between items-center h-16">
        <h1 className="text-xl font-bold tracking-tighter text-on-surface mr-5">
        <Link
          to="/"
          className="hover:text-primary transition-colors duration-300 rounded focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
          <span className="text-primary">{`<`}</span>KET
          <span className="text-primary">{`/>`}</span>
        </Link>
      </h1>
        <div className="hidden md:flex flex-1 justify-end items-center gap-8">
          <ul className="list-none flex justify-end items-center gap-8">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <NavLink
                  to={nav.id === "" ? "/" : `/${nav.id}`}
                  end={nav.id === ""}
                  className={({ isActive }) =>
                    [
                      "font-label tracking-tight text-sm uppercase transition-colors",
                      "pb-1 border-b-2 border-transparent",
                      "focus:outline-none focus:ring-2 focus:ring-primary/40 rounded",
                      isActive
                        ? "text-primary font-bold border-primary"
                        : "text-on-surface-variant hover:text-on-surface hover:border-primary/50",
                    ].join(" ")
                  }
                >
                  {nav.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Theme />
          </div>
        </div>

        <div className="relative md:hidden flex items-center gap-3">
          <button
            className="p-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary/40 text-on-surface"
            onClick={() => setToggle((prev) => !prev)}
            aria-expanded={toggle}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
          <Theme />

          {/* Background Overlay */}
          <div
            className={`fixed inset-0 bg-surface/80 backdrop-blur-sm z-[98] transition-opacity ${
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
            } fixed top-0 right-0 h-full w-72 bg-surface-container-low p-6 z-[99] transition-transform duration-300 ease-in-out border-l border-outline-variant/20`}
            aria-label="Mobile navigation"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm font-label tracking-widest uppercase text-primary">
                Menu
              </div>
              <button
                className="p-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary/40 text-on-surface"
                onClick={() => setToggle(false)}
                aria-label="Close navigation menu"
              >
                <FontAwesomeIcon icon={faXmark} className="text-2xl" />
              </button>
            </div>
            <ul className="list-none flex flex-col justify-start items-start gap-3">
              {navLinks.map((nav) => (
                <li key={nav.id} className="w-full">
                  <NavLink
                    to={nav.id === "" ? "/" : `/${nav.id}`}
                    end={nav.id === ""}
                    className={({ isActive }) =>
                      [
                        "block w-full px-4 py-3 rounded-lg transition-colors border",
                        "focus:outline-none focus:ring-2 focus:ring-primary/40",
                        isActive
                          ? "bg-surface-container-high text-on-surface border-primary/40"
                          : "bg-surface-container-lowest text-on-surface-variant border-outline-variant/20 hover:text-on-surface hover:border-primary/30",
                      ].join(" ")
                    }
                    onClick={() => setToggle(false)}
                  >
                    <span className="font-label text-xs tracking-widest uppercase">
                      {nav.name}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}
