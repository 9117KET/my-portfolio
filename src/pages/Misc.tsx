import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import styles from "../utils/style";
import { certificates, awards, events } from "../utils/constants";
import { Event } from "../types/event";

const categories = ["Events", "Certificates", "Awards"];

const itemsToShow = {
  Events: events,
  Certificates: certificates,
  Awards: awards,
};

type Category = keyof typeof itemsToShow;

// Type for items in Misc page - can be certificate, award, or event
type MiscItem = {
  id?: string;
  title: string;
  description: string;
  date: string;
  category?: string;
  link?: string;
  fullEventData?: Event;
};

/**
 * Sort items with proper date handling for events
 * For events, dates are parsed and sorted chronologically (newest first)
 */
const sortItems = <
  T extends { date: string; title: string; description: string },
>(
  items: T[],
  sortBy: "date" | "title" | "description",
  direction: "asc" | "desc" = "asc"
) => {
  return [...items].sort((a, b) => {
    // eslint-disable-next-line security/detect-object-injection
    const aValue = a[sortBy];
    // eslint-disable-next-line security/detect-object-injection
    const bValue = b[sortBy];

    // Special handling for date sorting - parse dates for proper chronological sorting
    if (sortBy === "date") {
      const aDate = new Date(aValue);
      const bDate = new Date(bValue);

      // If dates are valid, sort chronologically
      if (!isNaN(aDate.getTime()) && !isNaN(bDate.getTime())) {
        return direction === "asc"
          ? aDate.getTime() - bDate.getTime()
          : bDate.getTime() - aDate.getTime();
      }

      // Fallback to string comparison if dates are invalid
      return direction === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    if (typeof aValue === "string" && typeof bValue === "string") {
      return direction === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    return direction === "asc"
      ? Number(aValue) - Number(bValue)
      : Number(bValue) - Number(aValue);
  });
};

export default function Misc() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0] as Category
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortConfig] = useState<{
    key: "date" | "title" | "description";
    direction: "asc" | "desc";
  }>({
    key: "date",
    direction: "desc", // Newest first (descending order)
  });

  // eslint-disable-next-line security/detect-object-injection
  const items = itemsToShow[selectedCategory] as MiscItem[];
  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const processedItems = sortItems(
    filteredItems,
    sortConfig.key,
    sortConfig.direction
  );

  // Handle Learn More click - show modal for tech events with full details
  const handleLearnMore = (item: MiscItem) => {
    // Check if this is a tech event with full event data
    if (item.fullEventData) {
      setSelectedEvent(item.fullEventData);
      setIsModalOpen(true);
    } else if (item.link) {
      // For items with links, open in new tab
      window.open(item.link, "_blank");
    } else {
      // Fallback for items without links or full data
      alert(`More information about ${item.title}`);
    }
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="dark:bg-[#2D2E32] min-h-screen">
      <Helmet>
        <title>Certificates & Awards | Kinlo Ephriam Tangiri</title>
        <meta
          name="description"
          content="Explore my certifications, awards, and achievements including Google AI certifications, Diana Award recognition, Global Student Prize finalist, and various entrepreneurship certificates."
        />
        <meta
          name="keywords"
          content="certifications, awards, achievements, Google AI, Diana Award, Global Student Prize, entrepreneurship certificates, professional development"
        />
        <meta
          property="og:title"
          content="Certificates & Awards | Kinlo Ephriam Tangiri"
        />
        <meta
          property="og:description"
          content="Explore my certifications, awards, and achievements including Google AI certifications, Diana Award recognition, and Global Student Prize finalist."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Certificates & Awards | Kinlo Ephriam Tangiri"
        />
        <meta
          name="twitter:description"
          content="Explore my certifications, awards, and achievements including Google AI certifications, Diana Award recognition, and Global Student Prize finalist."
        />
      </Helmet>

      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar clicked="misc" />
        </div>
      </div>

      <div className={`${styles.flexStart} w-full`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`${styles.boxWidth} mt-5 p-8 dark:text-gray-300`}>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl dark:text-gray-300 text-black mb-5 font-medium">
              Here's a collection of my certifications, awards, events,
              competitions, and more.
            </h2>

            <div className="flex flex-wrap justify-center mt-6 space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category as Category)}
                  className={`cursor-pointer text-sm border border-lightText dark:border-gray-500 rounded-full m-1 px-4 py-2 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 ${
                    selectedCategory === category
                      ? "border-blue-500 text-blue-500"
                      : "text-black dark:text-white"
                  }`}
                  aria-label={`Filter items by ${category}`}
                  aria-current={
                    selectedCategory === category ? "true" : "false"
                  }
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="max-w-xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg
                  className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-6 mb-4 dark:text-gray-100 text-black text-center font-bold">
              {selectedCategory}
            </h3>

            <ul className="space-y-6">
              {processedItems.map((item) => (
                <div
                  key={"id" in item ? item.id : item.title}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                >
                  <h4 className="text-xl sm:text-2xl md:text-3xl dark:text-gray-300 text-black font-bold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-base sm:text-lg md:text-xl dark:text-gray-400 text-gray-700 mb-3">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm sm:text-base md:text-lg dark:text-gray-500 text-gray-600">
                      {item.date}
                    </p>
                    <button
                      className="text-blue-500 hover:text-blue-600 transition-all duration-300 text-sm sm:text-base"
                      onClick={() => handleLearnMore(item)}
                      aria-label={`Learn more about ${item.title}`}
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Modal for Tech Event Details */}
      {isModalOpen && selectedEvent && (
        /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              closeModal();
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
          <div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                closeModal();
              }
            }}
            role="document"
          >
            <div className="p-6 md:p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <h2
                  id="modal-title"
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white flex-grow"
                >
                  {selectedEvent.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="ml-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Event Metadata */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedEvent.eventType === "Online"
                      ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                      : "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
                  }`}
                >
                  {selectedEvent.eventType}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  {selectedEvent.date}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  by {selectedEvent.organizer}
                </span>
                {selectedEvent.location && (
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    📍 {selectedEvent.location}
                  </span>
                )}
              </div>

              {/* Technology Tags */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Technologies Discussed:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedEvent.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* External Link */}
              {selectedEvent.link && (
                <div className="mb-6">
                  <a
                    href={selectedEvent.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Visit Event Website
                  </a>
                </div>
              )}

              {/* Key Takeaways */}
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Key Takeaways
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {selectedEvent.keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="text-base md:text-lg">
                      {takeaway}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Experience */}
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  My Experience
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed whitespace-pre-line">
                  {selectedEvent.experience}
                </p>
              </div>

              {/* Applications */}
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Practical Applications
                </h3>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                    {selectedEvent.applications}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <div className="flex justify-end mt-6">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
