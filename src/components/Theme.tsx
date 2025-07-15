import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../contexts/ThemeContext";

// Theme component to handle light and dark mode switching
export default function Theme() {
  const { theme, toggleTheme } = useTheme();

  // Render a button that toggles the theme on click
  return (
    <button
      onClick={toggleTheme}
      className="mt-2 text-2xl p-2 rounded-full transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "dark"}
    >
      {theme === "dark" ? (
        // Icon for the sun if theme is dark
        <FontAwesomeIcon
          className="rounded-full p-1 dark:text-gray-300 transition-colors duration-300 hover:text-yellow-300"
          icon={faSun}
        />
      ) : (
        // Icon for the moon if theme is light
        <FontAwesomeIcon
          icon={faMoon}
          className="transition-colors duration-300 hover:text-gray-500"
        />
      )}
    </button>
  );
}
