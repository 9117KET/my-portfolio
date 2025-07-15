import React, { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const OptimizedImage = React.memo(function OptimizedImage({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  // Generate optimized image sources (when you have them)
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, ".webp");
  const avifSrc = src.replace(/\.(png|jpg|jpeg)$/i, ".avif");

  return (
    <div className={`relative ${className}`}>
      {/* Loading placeholder */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg"
          style={{ width, height }}
        />
      )}

      {/* Optimized image with multiple formats */}
      <picture>
        {/* AVIF for modern browsers */}
        <source
          srcSet={`
            ${avifSrc.replace(".avif", "-400w.avif")} 400w,
            ${avifSrc.replace(".avif", "-800w.avif")} 800w,
            ${avifSrc.replace(".avif", "-1200w.avif")} 1200w
          `}
          sizes="(max-width: 768px) 400px, (max-width: 1200px) 800px, 1200px"
          type="image/avif"
        />

        {/* WebP for most browsers */}
        <source
          srcSet={`
            ${webpSrc.replace(".webp", "-400w.webp")} 400w,
            ${webpSrc.replace(".webp", "-800w.webp")} 800w,
            ${webpSrc.replace(".webp", "-1200w.webp")} 1200w
          `}
          sizes="(max-width: 768px) 400px, (max-width: 1200px) 800px, 1200px"
          type="image/webp"
        />

        {/* Fallback for older browsers */}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${className}`}
        />
      </picture>

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
          <span className="text-gray-500 text-sm">Image not available</span>
        </div>
      )}
    </div>
  );
});

export default OptimizedImage;
