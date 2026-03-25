import { useState } from "react";
import Experience from "../components/Experience";
import { experience } from "../utils/constants";
import { Helmet } from "react-helmet-async";
import PageShell from "../components/PageShell";

const categories = ["All", "Software Development", "Education", "Management & Others"];

export default function Experiences() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredExperiences = experience.filter(
    (exp) => selectedCategory === "All" || exp.category === selectedCategory
  );

  return (
    <div className="min-h-screen">
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
      <PageShell current="experience">
        <div className="mt-5 p-2 sm:p-4 md:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface mb-1">
            Experience
          </h1>
          <p className="text-sm text-on-surface-variant font-mono mb-2">
            <span className="text-primary">{">"}</span> experience:~$ cat
            experience.md
          </p>
          <p className="text-sm sm:text-base text-on-surface-variant mb-6">
            A blend of challenging and rewarding roles that have shaped my
            growth as a self-driven professional.
          </p>

          <div className="mt-8 mb-8 flex flex-col items-center">
            <p className="text-sm font-semibold text-on-surface-variant mb-3 text-center">
              Filter by category
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer text-sm font-medium rounded-lg px-5 py-2.5 transition-all duration-300 border ${
                    selectedCategory === category
                      ? "bg-primary-container text-on-surface border-primary-container shadow-md"
                      : "bg-surface-container-low text-on-surface-variant border-outline-variant/30 hover:border-primary/40 hover:bg-surface-container-high"
                  }`}
                  aria-label={`Filter experiences by ${category}`}
                  aria-current={selectedCategory === category ? "true" : "false"}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="relative flex py-4 items-center group">
            <div className="flex-grow border-t border-outline-variant/30"></div>
            <span className="text-sm font-medium flex-shrink mx-4 text-on-surface-variant">
              {selectedCategory === "All" ? "All roles" : selectedCategory}
            </span>
            <div className="flex-grow border-t border-outline-variant/30"></div>
          </div>

          <div className="mt-6">
            <Experience experiences={filteredExperiences} />
          </div>
        </div>
      </PageShell>
    </div>
  );
}
