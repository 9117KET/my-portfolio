import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

/**
 * GoBack Component
 *
 * Purpose: Provides a professional navigation button to return to the blog listing page
 * from individual blog post pages.
 *
 * Design Decisions:
 * - Uses FontAwesome "arrow-left" icon for reliable rendering across all environments
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
      className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 text-on-surface-variant hover:text-primary transition-all duration-200 rounded-lg hover:bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-primary/40"
      aria-label="Back to Blog"
    >
      <FontAwesomeIcon icon={faArrowLeft} className="text-xl" />
      <span className="font-medium hidden sm:inline">Back to Blog</span>
    </Link>
  );
}
