import { Link } from "react-router-dom";

/**
 * GoBack Component
 *
 * Purpose: Provides a professional navigation button to return to the blog listing page
 * from individual blog post pages.
 *
 * Design Decisions:
 * - Uses Material Symbols "arrow_back" icon instead of "reply" for better semantic meaning
 * - Includes text label "Back to Blog" for clarity and accessibility
 * - Responsive design: shows icon + text on larger screens, icon only on mobile
 * - Implements hover effects and transitions for better UX
 * - Uses flexbox layout for proper icon-text alignment
 * - Includes proper ARIA labels for screen readers
 *
 * Accessibility:
 * - aria-label provides context for screen readers
 * - Focus states are visible for keyboard navigation
 * - Semantic Link component ensures proper navigation
 *
 * Real-life Application:
 * Similar to navigation patterns in professional blogs and news sites like Medium,
 * where a back button provides clear navigation context to users.
 */
export default function GoBack() {
  return (
    <Link
      to="/blog"
      className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label="Back to Blog"
    >
      <span className="material-symbols-outlined text-xl">arrow_back</span>
      <span className="font-medium hidden sm:inline">Back to Blog</span>
    </Link>
  );
}
