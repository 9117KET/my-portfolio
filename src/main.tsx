/* eslint-disable react-refresh/only-export-components */
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import LoadingFallback from "./components/LoadingFallback";

// Lazy load components for better performance
// eslint-disable-next-line react-refresh/only-export-components
const About = React.lazy(() => import("./pages/About"));
const Blog = React.lazy(() => import("./pages/Blog"));
const Misc = React.lazy(() => import("./pages/Misc"));
const Projects = React.lazy(() => import("./pages/Projects"));
const Experience = React.lazy(() => import("./pages/Experience"));
const BlogPostPage = React.lazy(() => import("./pages/BlogPostPage"));

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
    </Route>
  )
);

// Render the application into the DOM
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
