import { useState, useMemo, useCallback } from "react";
import Project from "../components/Project";
import { projects } from "../utils/constants";
import { Helmet } from "react-helmet-async";
import { useDebounce } from "../utils/hooks";
import PageShell from "../components/PageShell";

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
    <div className="min-h-screen">
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
      <PageShell current="projects">
        <div className="mt-5 p-2 sm:p-4 md:p-8 text-on-surface">
          {/* Page title + terminal line */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface mb-1">
            Projects
          </h1>
          <p className="text-sm font-mono text-on-surface-variant mb-2" aria-hidden="true">
            <span className="text-primary">{">"}</span>
            <span className="ml-2">projects:~</span>{" "}
            <span className="text-primary">$</span> cat projects.md
          </p>
          <p className="text-sm sm:text-base text-on-surface-variant mb-6">
            A selection of projects that highlight my work in full-stack, AI/ML,
            and data science.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects by name, description, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-outline-variant/30 bg-surface-container-lowest text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/40 focus:border-transparent pr-10"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-10 top-2.5 text-outline hover:text-on-surface transition-colors"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            {isSearching && (
              <div className="mt-2 text-sm text-on-surface-variant">Searching...</div>
            )}
          </div>

          {/* Category filter buttons */}
          <div className="flex flex-wrap justify-center mt-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer text-sm font-medium border rounded-lg m-1 px-4 py-2 transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary-container text-on-surface border-primary-container"
                    : "bg-surface-container-low text-on-surface-variant border-outline-variant/30 hover:border-primary/40 hover:bg-surface-container-high"
                }`}
                aria-label={`Filter projects by ${category}`}
                aria-current={selectedCategory === category ? "true" : "false"}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Display filtered projects - grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  year={project.year}
                  status={project.status}
                  collaborators={project.collaborators}
                  category={project.category}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-on-surface-variant">
                  {isSearching ? "Searching..." : "No projects found matching your criteria."}
                </p>
              </div>
            )}
          </div>

          {/* Footer CTA */}
          <div className="mt-10 text-center">
            <p className="text-sm text-on-surface-variant mb-4">
              Interested in more? See all on GitHub.
            </p>
            <a
              href="https://github.com/9117KET"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-container hover:bg-primary text-on-surface rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              All projects on GitHub
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
              </svg>
            </a>
          </div>
        </div>
      </PageShell>
    </div>
  );
}
