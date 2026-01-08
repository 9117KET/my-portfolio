import { Outlet, useNavigation } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const navigation = useNavigation();
  const isNavigating = navigation.state === "loading";

  return (
    <ThemeProvider>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Skip to main content
      </a>
      <div className="font-mono text-sm sm:text-base md:text-lg bg-white dark:bg-[#2D2E32] min-h-screen transition-colors duration-200 relative">
        {/* Navigation loading overlay to prevent white flash */}
        {isNavigating && (
          <div className="fixed inset-0 bg-white dark:bg-[#2D2E32] z-40 transition-opacity duration-200"></div>
        )}
        <Outlet />
        <ScrollToTop /> {/* Added scroll component */}
      </div>
    </ThemeProvider>
  );
}

export default App; // Export App component for use in other parts of the application
