import { useState } from "react";
import Experience from "../components/Experience";
import { experience } from "../utils/constants";
import { Helmet } from "react-helmet-async";
import PageShell from "../components/PageShell";
import PageHeader from "../components/PageHeader";
import FilterPills from "../components/FilterPills";

const categories = [
  "All",
  "Software Development",
  "Education",
  "Management & Others",
];

export default function Experiences() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredExperiences = experience.filter(
    (exp) => selectedCategory === "All" || exp.category === selectedCategory,
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
      <PageShell>
        <div className="mt-5 p-2 sm:p-4 md:p-8">
          <PageHeader title="Experience">
            A blend of challenging and rewarding roles that have shaped my
            growth as a self-driven professional.
          </PageHeader>

          <FilterPills
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
            noun="experiences"
          />

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
