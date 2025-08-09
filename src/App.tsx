import { Outlet } from "react-router-dom"; // Importing Outlet from react-router-dom for nested routing
import "./App.css"; // Importing stylesheet
import ScrollToTop from "./components/ScrollToTop"; // Add this import
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Skip to main content
      </a>
      <div className="font-mono text-sm sm:text-base md:text-lg">
        <Outlet /> {/* Render the current routes component */}
        <ScrollToTop /> {/* Added scroll component */}
      </div>
    </ThemeProvider>
  );
}

export default App; // Export App component for use in other parts of the application
