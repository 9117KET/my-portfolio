import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { certificates, awards, events } from "../utils/constants";
import { Event } from "../types/event";
import PageShell from "../components/PageShell";

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
    <div className="min-h-screen">
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
      <PageShell current="misc">
        <div className="mt-5 p-2 sm:p-4 md:p-8">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-on-surface-variant mb-5 font-medium">
            Here's a collection of my certifications, awards, events,
            competitions, and more.
          </h2>

          <div className="flex flex-wrap justify-center mt-6 gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category as Category)}
                className={`cursor-pointer text-sm border rounded-full px-4 py-2 transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary-container text-on-surface border-primary-container"
                    : "bg-surface-container-low text-on-surface-variant border-outline-variant/30 hover:border-primary/40 hover:bg-surface-container-high"
                }`}
                aria-label={`Filter items by ${category}`}
                aria-current={selectedCategory === category ? "true" : "false"}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="max-w-xl mx-auto mb-8 mt-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-outline-variant/30 bg-surface-container-lowest text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/40 focus:border-transparent"
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-outline"
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

          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-6 mb-4 text-on-surface text-center font-bold">
            {selectedCategory}
          </h3>

          <ul className="space-y-6">
            {processedItems.map((item) => (
              <li key={"id" in item ? item.id : item.title}>
                <div className="rounded-lg border border-outline-variant/30 bg-surface-container-low p-5 sm:p-6 shadow-sm transition-all duration-300 hover:bg-surface-container-high hover:-translate-y-0.5">
                  <h4 className="text-xl sm:text-2xl md:text-3xl text-on-surface font-bold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-base sm:text-lg md:text-xl text-on-surface-variant mb-3">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm sm:text-base md:text-lg text-on-surface-variant">
                      {item.date}
                    </p>
                    <button
                      className="text-primary hover:text-on-surface transition-all duration-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/40 rounded"
                      onClick={() => handleLearnMore(item)}
                      aria-label={`Learn more about ${item.title}`}
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </PageShell>

      {/* Modal for Tech Event Details */}
      {isModalOpen && selectedEvent && (
        /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */
        <div
          className="fixed inset-0 bg-surface/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
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
            className="bg-surface-container-lowest rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-outline-variant/20"
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
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-on-surface flex-grow"
                >
                  {selectedEvent.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="ml-4 text-outline hover:text-on-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 rounded"
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
                      ? "bg-surface-container-low text-on-surface border border-outline-variant/30"
                      : "bg-surface-container-low text-on-surface border border-outline-variant/30"
                  }`}
                >
                  {selectedEvent.eventType}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-surface-container-low text-on-surface-variant border border-outline-variant/30">
                  {selectedEvent.date}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-surface-container-low text-on-surface-variant border border-outline-variant/30">
                  by {selectedEvent.organizer}
                </span>
                {selectedEvent.location && (
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-surface-container-low text-on-surface-variant border border-outline-variant/30">
                    📍 {selectedEvent.location}
                  </span>
                )}
              </div>

              {/* Technology Tags */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-on-surface-variant mb-2">
                  Technologies Discussed:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedEvent.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium rounded-md bg-surface-container-low text-on-surface border border-outline-variant/20"
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
                    className="inline-flex items-center text-primary hover:text-on-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 rounded"
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
                <ul className="list-disc list-inside space-y-2 text-on-surface-variant">
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
                <p className="text-on-surface-variant text-base md:text-lg leading-relaxed whitespace-pre-line">
                  {selectedEvent.experience}
                </p>
              </div>

              {/* Applications */}
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Practical Applications
                </h3>
                <div className="bg-surface-container-low border-l-4 border-primary p-4 rounded-r-lg">
                  <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
                    {selectedEvent.applications}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <div className="flex justify-end mt-6">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-primary-container text-on-surface rounded-lg hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
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
