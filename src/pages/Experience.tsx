import { useState } from "react";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import { experience } from "../utils/constants";
import styles from "../utils/style";
import { Helmet } from "react-helmet-async";

const categories = ["All", "Software Development", "Management & Others"];

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

            <div className="flex flex-wrap justify-center mt-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer text-sm font-medium border border-lightText dark:border-gray-500 rounded-lg m-1 px-4 py-2 transition-all duration-300 hover:bg-blue-800 dark:hover:bg-blue-900 ${
                    selectedCategory === category
                      ? "bg-blue-800 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
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

            <div>
              <Experience experiences={filteredExperiences} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
