import { useEffect, useState } from "react";
import { getTheme } from "../utils/theme";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Theme component to handle light and dark mode switching
export default function Theme() {
  // State to store the current theme
  const [theme, setTheme] = useState<string>(getTheme());

  // Function to toggle the theme between 'light' and 'dark'
  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // Effect to apply the theme to the document and store it in localStorage
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Render a button that toggles the theme on click
  return (
    <button
      onClick={handleThemeSwitch}
      className="mt-2 text-2xl p-2 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        // Icon for the sun if theme is dark
        <FontAwesomeIcon
          className="rounded-full p-1 dark:text-gray-300 transition-all hover:text-yellow-300"
          icon={faSun}
        />
      ) : (
        // Icon for the moon if theme is light
        <FontAwesomeIcon
          icon={faMoon}
          className="transition-all hover:text-gray-500"
        />
      )}
    </button>
  );
}
