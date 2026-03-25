import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-primary-container text-on-surface p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary/40 z-[999]"
          aria-label="Scroll to top"
        >
          <span className="text-xl">↑</span>
        </button>
      )}
    </>
  );
}
