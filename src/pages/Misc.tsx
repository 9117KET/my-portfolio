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

export default function Misc() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0] as Category
  );

  return (
    <div className="dark:bg-[#2D2E32] min-h-screen">
      <Helmet>
        <title>Miscellaneous</title>
      </Helmet>
      <Navbar clicked="misc" />

      <div className={`${styles.flexCenter} w-full`}>
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
              >
                {category}
              </button>
            ))}
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-6 mb-4 dark:text-gray-100 text-black text-center font-bold">
            {selectedCategory}
          </h3>

          <ul className="space-y-6">
            {itemsToShow[selectedCategory].map((item) => (
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
                    onClick={() =>
                      alert(`More information about ${item.title}`)
                    }
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
  );
}
