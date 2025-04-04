import { useState } from "react";

interface ShareButtonProps {
  title: string;
  url: string;
  description: string;
}

export default function ShareButton({
  title,
  url,
  description,
}: ShareButtonProps) {
  const [showCopiedTooltip, setShowCopiedTooltip] = useState(false);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        // Use native sharing if available
        await navigator.share({
          title,
          text: description,
          url,
        });
      } else {
        // Fallback to copying URL
        await navigator.clipboard.writeText(url);
        setShowCopiedTooltip(true);
        setTimeout(() => setShowCopiedTooltip(false), 2000);
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleShare}
        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
        </svg>
        <span>Share</span>
      </button>

      {/* Copied tooltip */}
      {showCopiedTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-md whitespace-nowrap">
          Link copied!
          {/* Tooltip arrow */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
        </div>
      )}
    </div>
  );
}
