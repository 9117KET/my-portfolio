import React from "react";
import Card from "./Card";

const MAX_RESPONSIBILITIES_SHOWN = 4;

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
  companyDescription: string;
  category?: string;
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience = React.memo(function Experience({
  experiences,
}: ExperienceProps) {
  if (!experiences || !Array.isArray(experiences)) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        No experiences available.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {experiences.map(
        ({
          id,
          role,
          company,
          duration,
          responsibilities,
          companyDescription,
          category,
        }) => {
          const responsibilitiesToShow = responsibilities.slice(
            0,
            MAX_RESPONSIBILITIES_SHOWN
          );
          return (
            <Card key={id} as="article">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                <h2 className="text-lg font-semibold dark:text-gray-200">
                  {role} — {company}
                </h2>
                <span className="text-xs sm:text-sm px-2 py-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 shrink-0">
                  {duration}
                </span>
              </div>
              {category && (
                <span className="inline-block px-2 py-0.5 text-xs rounded border border-gray-300 dark:border-gray-500 text-gray-600 dark:text-gray-400 mb-3">
                  {category}
                </span>
              )}
              <p className="text-sm dark:text-gray-400 mb-4 line-clamp-2">
                {companyDescription}
              </p>
              <p className="text-xs font-semibold dark:text-gray-300 mb-2">
                {">"} Responsibilities
              </p>
              <ul className="space-y-1 text-sm dark:text-gray-300 list-disc list-inside">
                {responsibilitiesToShow.map((responsibility, index) => (
                  <li key={`${id}-${index}`}>{responsibility}</li>
                ))}
              </ul>
            </Card>
          );
        }
      )}
    </div>
  );
});

export default Experience;
