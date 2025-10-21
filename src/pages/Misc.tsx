import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import styles from "../utils/style";
import { certificates, awards, events } from "../utils/constants";

const categories = ["Certificates", "Awards", "Events"];

const itemsToShow = {
  Certificates: certificates,
  Awards: awards,
  Events: events,
};

type Category = keyof typeof itemsToShow;

const sortItems = <
  T extends { date: string; title: string; description: string },
>(
  items: T[],
  sortBy: "date" | "title" | "description",
  direction: "asc" | "desc" = "asc",
) => {
  return [...items].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

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
    categories[0] as Category,
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig] = useState<{
    key: "date" | "title" | "description";
    direction: "asc" | "desc";
  }>({
    key: "date",
    direction: "desc",
  });

  const items = itemsToShow[selectedCategory];
  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const processedItems = sortItems(
    filteredItems,
    sortConfig.key,
    sortConfig.direction,
  );

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
                      onClick={() => {
                        if ("link" in item) {
                          window.open(item.link, "_blank");
                        } else {
                          alert(`More information about ${item.title}`);
                        }
                      }}
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
    </div>
  );
}
