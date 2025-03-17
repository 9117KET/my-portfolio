import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { About, Blog, Misc, Projects, Experience } from "./utils/imports";
import App from "./App.tsx";
import { HelmetProvider } from "react-helmet-async";
import BlogPostPage from "./pages/BlogPostPage.tsx";

// Create a router instance using the createBrowserRouter function
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<About />} /> {/* Route for the About page*/}
      <Route path="projects" element={<Projects />} />{" "}
      {/* Route for the Projects page*/}
      <Route path="experience" element={<Experience />} />{" "}
      {/* Route for the Experience page*/}
      <Route path="blog" element={<Blog />} /> {/* Route for the Blog page*/}
      <Route path="blog/:postId" element={<BlogPostPage />} />{" "}
      {/* Route for individual Blog posts*/}
      <Route path="misc" element={<Misc />} /> {/* Route for the Misc page*/}
    </Route>
  )
);

// Render the application into the DOM
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      {" "}
      {/* Provides a context for managing changes to the document head*/}
      <RouterProvider router={router} />{" "}
      {/* Provides the router context to the application*/}
    </HelmetProvider>
  </React.StrictMode>
);
