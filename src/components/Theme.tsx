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
      className="text-xl p-2 rounded-lg transition-colors duration-300 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary/40"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "dark"}
    >
      {theme === "dark" ? (
        // Icon for the sun if theme is dark
        <FontAwesomeIcon
          className="rounded p-1 text-on-surface transition-colors duration-300 hover:text-tertiary"
          icon={faSun}
        />
      ) : (
        // Icon for the moon if theme is light
        <FontAwesomeIcon
          icon={faMoon}
          className="text-on-surface transition-colors duration-300 hover:text-primary"
        />
      )}
    </button>
  );
}
