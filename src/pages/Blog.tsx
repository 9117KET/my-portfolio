import { Helmet } from "react-helmet-async";
import { posts } from "../utils/constants";
import BlogCard from "../components/BlogCard";
import { useState, useMemo, useCallback } from "react";
import { useDebounce } from "../utils/hooks";
import PageShell from "../components/PageShell";

// Define categories for filtering
const categories = ["All", "Post", "Podcast", "Article", "Project Breakdown"];

// Define sort options
const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "title-asc", label: "Title (A-Z)" },
  { value: "title-desc", label: "Title (Z-A)" },
];

export default function Blog() {
  // State to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [isSearching, setIsSearching] = useState(false);

  // Debounce the search query to prevent excessive filtering
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  // Clear search function
  const clearSearch = useCallback(() => {
    setSearchQuery("");
  }, []);

  // Filter and sort posts
  const filteredAndSortedPosts = useMemo(() => {
    setIsSearching(true);

    // First filter posts
    const filtered = posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      // If no search query, only filter by category
      if (!debouncedSearchQuery) {
        return matchesCategory;
      }

      // Search across multiple fields
      const searchLower = debouncedSearchQuery.toLowerCase();
      const matchesSearch =
        post.title.toLowerCase().includes(searchLower) ||
        post.description.toLowerCase().includes(searchLower) ||
        post.category.toLowerCase().includes(searchLower);

      return matchesCategory && matchesSearch;
    });

    // Then sort posts
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    setIsSearching(false);
    return sorted;
  }, [selectedCategory, debouncedSearchQuery, sortBy]);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Blog | Kinlo Ephriam Tangiri</title>
        <meta
          name="description"
          content="Read my latest thoughts and insights on technology, programming, AI/ML, and more. I actively share my knowledge and insights through writing on various professional platforms."
        />
        <meta
          name="keywords"
          content="blog, technology, programming, AI, machine learning, software engineering, tech insights, Kinlo Ephriam Tangiri"
        />
        <meta property="og:title" content="Blog | Kinlo Ephriam Tangiri" />
        <meta
          property="og:description"
          content="Read my latest thoughts and insights on technology, programming, AI/ML, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | Kinlo Ephriam Tangiri" />
        <meta
          name="twitter:description"
          content="Read my latest thoughts and insights on technology, programming, AI/ML, and more."
        />
      </Helmet>
      <PageShell current="blog">
        <div className="mt-5 p-2 sm:p-4 md:p-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-4">
              My Blog
            </h1>
            <p className="text-on-surface-variant text-lg">
              Thoughts, insights, and experiences in tech and beyond
            </p>
          </div>

          {/* Search and Sort Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            {/* Search Bar */}
            <div className="w-full md:w-1/2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search posts by title, description, or category..."
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
                <div className="mt-2 text-sm text-on-surface-variant">
                  Searching...
                </div>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="w-full md:w-1/3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-outline-variant/30 bg-surface-container-low text-on-surface focus:ring-2 focus:ring-primary/40 focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  selectedCategory === category
                    ? "bg-primary-container text-on-surface border-primary-container"
                    : "bg-surface-container-low text-on-surface-variant border-outline-variant/30 hover:border-primary/40 hover:bg-surface-container-high"
                }`}
                aria-current={selectedCategory === category ? "true" : "false"}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-6 md:gap-8">
            {filteredAndSortedPosts.length > 0 ? (
              filteredAndSortedPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  date={post.date}
                  category={post.category}
                  description={post.description}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-on-surface-variant">
                  {isSearching
                    ? "Searching..."
                    : "No posts found matching your criteria."}
                </p>
              </div>
            )}
          </div>
        </div>
      </PageShell>
    </div>
  );
}
