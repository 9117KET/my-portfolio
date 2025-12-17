import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.tsx";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy load pages for code splitting
const About = lazy(() => {
  // #region agent log
  fetch('http://127.0.0.1:7243/ingest/387f3c16-d41f-42e8-befa-f9a8f845565a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:lazy:About',message:'About lazy import started',data:{timestamp:Date.now(),path:window.location.pathname},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
  // #endregion
  return import("./pages/About").then(module => {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/387f3c16-d41f-42e8-befa-f9a8f845565a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:lazy:About',message:'About lazy import resolved',data:{timestamp:Date.now(),path:window.location.pathname},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    return module;
  });
});
const Blog = lazy(() => {
  // #region agent log
  fetch('http://127.0.0.1:7243/ingest/387f3c16-d41f-42e8-befa-f9a8f845565a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:lazy:Blog',message:'Blog lazy import started',data:{timestamp:Date.now(),path:window.location.pathname},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
  // #endregion
  return import("./pages/Blog").then(module => {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/387f3c16-d41f-42e8-befa-f9a8f845565a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:lazy:Blog',message:'Blog lazy import resolved',data:{timestamp:Date.now(),path:window.location.pathname},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    return module;
  });
});
const Misc = lazy(() => {
  // #region agent log
  fetch('http://127.0.0.1:7243/ingest/387f3c16-d41f-42e8-befa-f9a8f845565a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:lazy:Misc',message:'Misc lazy import started',data:{timestamp:Date.now(),path:window.location.pathname},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
  // #endregion
  return import("./pages/Misc").then(module => {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/387f3c16-d41f-42e8-befa-f9a8f845565a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:lazy:Misc',message:'Misc lazy import resolved',data:{timestamp:Date.now(),path:window.location.pathname},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    return module;
  });
});
const Projects = lazy(() => import("./pages/Projects"));
const Experience = lazy(() => {
  // #region agent log
  fetch('http://127.0.0.1:7243/ingest/387f3c16-d41f-42e8-befa-f9a8f845565a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:lazy:Experience',message:'Experience lazy import started',data:{timestamp:Date.now(),path:window.location.pathname},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
  // #endregion
  return import("./pages/Experience").then(module => {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/387f3c16-d41f-42e8-befa-f9a8f845565a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:lazy:Experience',message:'Experience lazy import resolved',data:{timestamp:Date.now(),path:window.location.pathname},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    return module;
  });
});
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const NotFound = lazy(() => {
  // #region agent log
  fetch('http://127.0.0.1:7243/ingest/387f3c16-d41f-42e8-befa-f9a8f845565a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:lazy:NotFound',message:'NotFound lazy import started',data:{timestamp:Date.now(),path:window.location.pathname},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
  // #endregion
  return import("./pages/NotFound").then(module => {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/387f3c16-d41f-42e8-befa-f9a8f845565a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:lazy:NotFound',message:'NotFound lazy import resolved',data:{timestamp:Date.now(),path:window.location.pathname},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
    // #endregion
    return module;
  });
});

// Loading component for suspense fallback
const LoadingFallback = () => {
  // #region agent log
  fetch('http://127.0.0.1:7243/ingest/387f3c16-d41f-42e8-befa-f9a8f845565a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:LoadingFallback',message:'LoadingFallback rendered',data:{timestamp:Date.now(),path:window.location.pathname,isDark:document.documentElement.classList.contains('dark')},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  // #endregion
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-[#2D2E32] transition-colors duration-200 fixed inset-0 z-50">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
  );
};

// Create a router instance using the createBrowserRouter function
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path="/"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="projects"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <Projects />
          </Suspense>
        }
      />
      <Route
        path="experience"
        element={
          <Suspense fallback={<LoadingFallback />}>
            {(() => {
              // #region agent log
              fetch('http://127.0.0.1:7243/ingest/387f3c16-d41f-42e8-befa-f9a8f845565a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:Route:experience',message:'Experience route rendering',data:{timestamp:Date.now(),path:window.location.pathname},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
              // #endregion
              return <Experience />;
            })()}
          </Suspense>
        }
      />
      <Route
        path="blog"
        element={
          <Suspense fallback={<LoadingFallback />}>
            {(() => {
              // #region agent log
              fetch('http://127.0.0.1:7243/ingest/387f3c16-d41f-42e8-befa-f9a8f845565a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:Route:blog',message:'Blog route rendering',data:{timestamp:Date.now(),path:window.location.pathname},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
              // #endregion
              return <Blog />;
            })()}
          </Suspense>
        }
      />
      <Route
        path="blog/:postId"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <BlogPostPage />
          </Suspense>
        }
      />
      <Route
        path="misc"
        element={
          <Suspense fallback={<LoadingFallback />}>
            {(() => {
              // #region agent log
              fetch('http://127.0.0.1:7243/ingest/387f3c16-d41f-42e8-befa-f9a8f845565a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:Route:misc',message:'Misc route rendering',data:{timestamp:Date.now(),path:window.location.pathname},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
              // #endregion
              return <Misc />;
            })()}
          </Suspense>
        }
      />
      {/* Catch-all route for 404 */}
      <Route
        path="*"
        element={
          <Suspense fallback={<LoadingFallback />}>
            {(() => {
              // #region agent log
              fetch('http://127.0.0.1:7243/ingest/387f3c16-d41f-42e8-befa-f9a8f845565a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:Route:404',message:'404 route rendering',data:{timestamp:Date.now(),path:window.location.pathname},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
              // #endregion
              return <NotFound />;
            })()}
          </Suspense>
        }
      />
    </Route>,
  ),
);

// Render the application into the DOM
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error(
    "Root element not found. Make sure you have a div with id='root' in your HTML.",
  );
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        {" "}
        {/* Provides a context for managing changes to the document head*/}
        <RouterProvider router={router} />{" "}
        {/* Provides the router context to the application*/}
      </HelmetProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
