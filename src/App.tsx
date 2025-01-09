import { Outlet } from "react-router-dom"; // Importing Outlet from react-router-dom for nested routing
import "./App.css"; // Importing stylesheet
import ScrollToTop from "./components/ScrollToTop"; // Add this import

function App() {
  // Check if the 'theme' in localStorage is 'dark' or if no theme is set and the system preference is 'dark'
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark"); // Apply dark theme by adding 'dark' class to the document
  } else {
    document.documentElement.classList.remove("dark"); // Remove 'dark' class from the document if conditions are not met
  }

  return (
    <div>
      <Outlet /> {/* Render the current routes component */}
      <ScrollToTop /> {/* Added scroll component */}
    </div>
  );
}

export default App; // Export App component for use in other parts of the application
