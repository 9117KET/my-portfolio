import { useState } from "react";

/**
 * ShareButton Component Props Interface
 * 
 * Defines the structure of data required for the ShareButton component.
 * This follows TypeScript best practices for type safety and component contracts.
 */
interface ShareButtonProps {
  title: string;
  url: string;
  description: string;
}

/**
 * ShareButton Component
 * 
 * Purpose: Provides a professional sharing button that allows users to share blog posts
 * via native sharing APIs (on mobile devices) or by copying the URL to clipboard.
 * 
 * Architecture Pattern: This component follows the Presentational Component pattern,
 * where it handles its own UI state (tooltip visibility) and user interactions (sharing/copying).
 * 
 * Design Decisions:
 * - Uses Material Symbols "share" icon for consistency with other UI elements
 * - Implements Web Share API for native sharing on supported devices (mobile)
 * - Falls back to clipboard copy for desktop browsers
 * - Shows a professional tooltip feedback when URL is copied
 * - Responsive design with proper spacing and sizing
 * - Dark mode support for modern UI consistency
 * - Smooth transitions and hover effects for better UX
 * 
 * Problem-Solving Approach:
 * - Progressive Enhancement: Uses native sharing when available, gracefully degrades to clipboard
 * - User Feedback: Visual tooltip confirms successful copy action
 * - Error Handling: Silently handles errors to prevent UI disruption
 * 
 * Accessibility:
 * - aria-label provides context for screen readers
 * - Focus states are visible for keyboard navigation
 * - Semantic button element ensures proper interaction
 * 
 * Real-life Application:
 * Similar to sharing buttons on professional platforms like Medium, Dev.to, or LinkedIn articles,
 * where users can easily share content with others.
 */
export default function ShareButton({
  title,
  url,
  description,
}: ShareButtonProps) {
  // State to manage tooltip visibility for user feedback
  const [showCopiedTooltip, setShowCopiedTooltip] = useState(false);

  /**
   * handleShare Function
   * 
   * Implements the sharing logic using the Web Share API when available,
   * or falls back to copying the URL to clipboard.
   * 
   * Algorithm:
   * 1. Check if native sharing is available (mobile devices)
   * 2. If available, use navigator.share() for native sharing dialog
   * 3. If not available, copy URL to clipboard and show feedback tooltip
   * 4. Handle errors gracefully without disrupting user experience
   */
  const handleShare = async () => {
    try {
      // Check for native sharing support (primarily on mobile devices)
      if (navigator.share) {
        // Use native sharing API for better mobile experience
        // This opens the device's native share sheet with options like
        // WhatsApp, Email, Messages, etc.
        await navigator.share({
          title,
          text: description,
          url,
        });
      } else {
        // Fallback for desktop browsers: copy URL to clipboard
        await navigator.clipboard.writeText(url);
        setShowCopiedTooltip(true);
        // Auto-hide tooltip after 2 seconds for clean UX
        setTimeout(() => setShowCopiedTooltip(false), 2000);
      }
    } catch (error) {
      // Silently handle errors (user might cancel share dialog)
      // Only log to console for debugging purposes
      if (error instanceof Error && error.name !== "AbortError") {
        console.error("Error sharing:", error);
      }
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleShare}
        className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm hover:shadow-md"
        aria-label={`Share: ${title}`}
      >
        <span className="material-symbols-outlined text-xl">share</span>
        <span className="font-medium hidden sm:inline">Share</span>
      </button>

      {/* Success feedback tooltip - appears when URL is copied to clipboard */}
      {showCopiedTooltip && (
        <div
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg whitespace-nowrap shadow-lg z-50 transition-opacity duration-200"
          role="status"
          aria-live="polite"
        >
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base">check_circle</span>
            Link copied!
          </span>
          {/* Tooltip arrow pointing to button */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 rotate-45 w-2 h-2 bg-gray-900 dark:bg-gray-700"></div>
        </div>
      )}
    </div>
  );
}
