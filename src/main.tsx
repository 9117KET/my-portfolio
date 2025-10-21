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
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const Misc = lazy(() => import("./pages/Misc"));
const Projects = lazy(() => import("./pages/Projects"));
const Experience = lazy(() => import("./pages/Experience"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component for suspense fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

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
            <Experience />
          </Suspense>
        }
      />
      <Route
        path="blog"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <Blog />
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
            <Misc />
          </Suspense>
        }
      />
      {/* Catch-all route for 404 */}
      <Route
        path="*"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <NotFound />
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
