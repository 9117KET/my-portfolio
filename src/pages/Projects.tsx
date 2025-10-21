import { useState, useMemo, useCallback } from "react";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import { projects } from "../utils/constants";
import styles from "../utils/style";
import { Helmet } from "react-helmet-async";
import { useDebounce } from "../utils/hooks";

type Category = "All" | "Fullstack" | "AI/ML" | "Data Science";
const categories: Category[] = ["All", "Fullstack", "AI/ML", "Data Science"];

export default function Projects() {
  // State to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Debounce the search query to prevent excessive filtering
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  // Clear search function
  const clearSearch = useCallback(() => {
    setSearchQuery("");
  }, []);

  // Filter projects based on the selected category and search query
  const filteredProjects = useMemo(() => {
    setIsSearching(true);

    const filtered = projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" ||
        (project.categories && Array.isArray(project.categories)
          ? project.categories.includes(selectedCategory)
          : project.category === selectedCategory);

      // If no search query, only filter by category
      if (!debouncedSearchQuery) {
        return matchesCategory;
      }

      // Search across multiple fields
      const searchLower = debouncedSearchQuery.toLowerCase();
      const matchesSearch =
        project.name.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchLower),
        ) ||
        project.features.some((feature) =>
          feature.toLowerCase().includes(searchLower),
        );

      return matchesCategory && matchesSearch;
    });

    setIsSearching(false);
    return filtered;
  }, [selectedCategory, debouncedSearchQuery]);

  return (
    <div className="dark:bg-[#2D2E32] min-h-screen">
      <Helmet>
        <title>Projects | Kinlo Ephriam Tangiri</title>
        <meta
          name="description"
          content="Explore my portfolio of software development projects including AI/ML applications, full-stack web applications, and data science projects. Built with React, TypeScript, Python, and modern technologies."
        />
        <meta
          name="keywords"
          content="software projects, AI projects, machine learning, React, TypeScript, Python, full-stack development, portfolio projects"
        />
        <meta property="og:title" content="Projects | Kinlo Ephriam Tangiri" />
        <meta
          property="og:description"
          content="Explore my portfolio of software development projects including AI/ML applications, full-stack web applications, and data science projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects | Kinlo Ephriam Tangiri" />
        <meta
          name="twitter:description"
          content="Explore my portfolio of software development projects including AI/ML applications, full-stack web applications, and data science projects."
        />
      </Helmet>
      {/* Navigation bar */}
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar clicked="projects;" />
        </div>
      </div>

      <div className={`${styles.flexStart} w-full`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`${styles.boxWidth} mt-5 p-8 dark:text-gray-300`}>
            {/* Introduction text */}
            <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl dark:text-gray-300 text-black mb-5">
              {`-> `}I learn most effectively through hands-on project work.
              This approach allows me to develop a deeper understanding of
              concepts while maintaining motivation through visible progress and
              tangible outcomes. I'm always committed to completing every single
              project I start.
            </h3>
            {/* Divider with "My Projects" text */}
            <div className="relative flex py-3 md:py-5 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold flex-shrink mx-2 md:mx-4 text-gray-400">
                <span className="text-blue-800">{`>`}</span> My Projects:
              </span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl dark:text-gray-300 text-black mb-5">
              Here are some of my favorite projects:
            </h3>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects by name, description, or technology..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-10 top-2.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  >
                    <svg
                      className="h-5 w-5"
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
                )}
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
              {isSearching && (
                <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Searching...
                </div>
              )}
            </div>

            {/* Category filter buttons */}
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
                  aria-label={`Filter projects by ${category}`}
                  aria-current={
                    selectedCategory === category ? "true" : "false"
                  }
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Display filtered projects */}
            <div className="flex flex-col">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <Project
                    key={project.id}
                    id={project.id}
                    demo={project.demo}
                    name={project.name}
                    github={project.github}
                    description={project.description}
                    technologies={project.technologies}
                    features={project.features}
                  />
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400">
                    {isSearching
                      ? "Searching..."
                      : "No projects found matching your criteria."}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
