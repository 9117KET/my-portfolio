import { useEffect, useState } from "react";

export default function KETAcademyPodcast() {
  const episodeId = "5IQxtulReUdqLHbll5hjkN";
  const embedSrc = `https://open.spotify.com/embed/episode/${episodeId}`;
  const directLink = `https://open.spotify.com/episode/${episodeId}`;
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoaded) setShowFallback(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, [isLoaded]);
  return (
    <div className="font-mono mb-4 max-w-none">
      {/* Introduction */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Episode Overview
        </h2>
        <p className="mb-6">
          Kinlo Ephriam, a visionary young changemaker and YCM Ambassador, whose
          mission is to transform the educational sector beyond local
          boundaries. Kinlo's initiative, KET Academy, is a reflection of his
          resilience, commitment, and passion for making a difference.
        </p>
      </div>

      {/* Key Topics */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          What You'll Learn
        </h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            The essential elements required to support and foster young
            changemakers within the educational system.
          </li>
          <li>
            Strategies for staying motivated and overcoming entrepreneurial
            challenges.
          </li>
          <li>How to gain support from others around you.</li>
        </ul>
      </section>

      {/* Description */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          About This Episode
        </h2>
        <p>
          Discover what it takes to seize an opportunity and leap into action as
          Kinlo shares his experiences and insights. From identifying the
          educational needs of his fellow students in Cameroon to creating a
          platform that provides online resources, Kinlo's story is a powerful
          example of how one person can ignite significant change.
        </p>
      </section>

      {/* Listen Now Section */}
      <section className="mt-12">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
            Listen to the Episode
          </h2>
          <iframe
            src={embedSrc}
            width="100%"
            height="352"
            frameBorder="0"
            title="KET Academy Podcast Episode"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="mb-4"
            onLoad={() => setIsLoaded(true)}
          ></iframe>
          {showFallback && (
            <div className="rounded-md border border-blue-200 dark:border-gray-700 p-4 bg-blue-50 dark:bg-gray-800">
              <p className="mb-3 text-sm md:text-base">
                The embedded Spotify player could not be loaded (network/privacy
                settings may be blocking third‑party iframes). You can open the
                episode directly on Spotify:
              </p>
              <a
                href={directLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Open on Spotify
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
