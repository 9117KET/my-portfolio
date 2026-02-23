import { useState } from "react";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import { experience } from "../utils/constants";
import styles from "../utils/style";
import { Helmet } from "react-helmet-async";

const categories = ["All", "Software Development", "Education", "Management & Others"];

export default function Experiences() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredExperiences = experience.filter(
    (exp) => selectedCategory === "All" || exp.category === selectedCategory
  );

  return (
    <div className="dark:bg-[#2D2E32] min-h-screen">
      <Helmet>
        <title>Experience | Kinlo Ephriam Tangiri</title>
        <meta
          name="description"
          content="My professional experience including software engineering internships, project management roles, teaching assistant positions, and leadership roles at Constructor University and various organizations."
        />
        <meta
          name="keywords"
          content="software engineering experience, project management, teaching assistant, internships, professional experience, Constructor University"
        />
        <meta
          property="og:title"
          content="Experience | Kinlo Ephriam Tangiri"
        />
        <meta
          property="og:description"
          content="My professional experience including software engineering internships, project management roles, teaching assistant positions, and leadership roles."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Experience | Kinlo Ephriam Tangiri"
        />
        <meta
          name="twitter:description"
          content="My professional experience including software engineering internships, project management roles, teaching assistant positions, and leadership roles."
        />
      </Helmet>
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar clicked="experience" />
        </div>
      </div>

      <div className={`${styles.flexStart} w-full`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`${styles.boxWidth} mt-5 p-8 dark:text-gray-300`}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-gray-100 text-black mb-1">
              Experience
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-mono mb-2">
              <span className="text-blue-600 dark:text-blue-400">{">"}</span>{" "}
              experience:~$ cat experience.md
            </p>
            <p className="text-sm sm:text-base dark:text-gray-300 text-black mb-6">
              A blend of challenging and rewarding roles that have shaped my
              growth as a self-driven professional.
            </p>

            <div className="mt-8 mb-8 flex flex-col items-center">
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 text-center">
                Filter by category
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`cursor-pointer text-sm font-medium rounded-lg px-5 py-2.5 transition-all duration-300 border-2 ${
                      selectedCategory === category
                        ? "bg-blue-600 dark:bg-blue-500 text-white border-blue-600 dark:border-blue-500 shadow-md"
                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700"
                    }`}
                    aria-label={`Filter experiences by ${category}`}
                    aria-current={
                      selectedCategory === category ? "true" : "false"
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative flex py-4 items-center group">
              <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
              <span className="text-sm font-medium flex-shrink mx-4 text-gray-500 dark:text-gray-400">
                {selectedCategory === "All"
                  ? "All roles"
                  : selectedCategory}
              </span>
              <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
            </div>

            <div className="mt-6">
              <Experience experiences={filteredExperiences} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
