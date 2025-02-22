export default function KETAcademyPodcast() {
  return (
    <div className="font-sans mb-4 text-lg prose prose-lg dark:prose-invert max-w-none">
      {/* Introduction */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Episode Overview
        </h2>
        <p className="mb-6">
          Kinlo Ephriam, a visionary young changemaker and YCM Ambassador,
          whose mission is to transform the educational sector beyond local
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
            src="https://open.spotify.com/embed/episode/5IQxtulReUdqLHbll5hjkN"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="mb-4"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
