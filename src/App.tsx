import { Outlet, useNavigation, useLocation } from "react-router-dom"; // Importing Outlet and useNavigation from react-router-dom
import { useEffect } from "react";
import "./App.css"; // Importing stylesheet
import ScrollToTop from "./components/ScrollToTop"; // Add this import
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const navigation = useNavigation();
  const location = useLocation();
  const isNavigating = navigation.state === "loading";
  
  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/387f3c16-d41f-42e8-befa-f9a8f845565a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.tsx:useEffect:location',message:'Location changed',data:{timestamp:Date.now(),pathname:location.pathname,search:location.search,hash:location.hash,navigationState:navigation.state},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
  }, [location, navigation.state]);
  
  // #region agent log
  fetch('http://127.0.0.1:7243/ingest/387f3c16-d41f-42e8-befa-f9a8f845565a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.tsx:App',message:'App component rendered',data:{timestamp:Date.now(),path:window.location.pathname,isNavigating:isNavigating,navigationState:navigation.state},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
  // #endregion
  
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
          <div className="fixed inset-0 bg-white dark:bg-[#2D2E32] z-40 transition-opacity duration-200">
            {/* #region agent log */}
            {fetch('http://127.0.0.1:7243/ingest/387f3c16-d41f-42e8-befa-f9a8f845565a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.tsx:navigationOverlay',message:'Navigation overlay shown',data:{timestamp:Date.now(),path:window.location.pathname},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{}) && null}
            {/* #endregion */}
          </div>
        )}
        {(() => {
          // #region agent log
          fetch('http://127.0.0.1:7243/ingest/387f3c16-d41f-42e8-befa-f9a8f845565a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.tsx:Outlet',message:'Outlet about to render',data:{timestamp:Date.now(),path:window.location.pathname,isNavigating:isNavigating},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
          // #endregion
          return <Outlet />;
        })()}
        <ScrollToTop /> {/* Added scroll component */}
      </div>
    </ThemeProvider>
  );
}

export default App; // Export App component for use in other parts of the application
