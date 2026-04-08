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
      <div className="text-center py-8 text-on-surface-variant">
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
            <Card key={id} as="article" variant="interactive">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                <h2 className="text-lg font-semibold text-on-surface">
                  {role} at {company}
                </h2>
                <span className="text-xs sm:text-sm px-2 py-1 rounded-lg border border-outline-variant/30 bg-surface-container-lowest text-on-surface shrink-0">
                  {duration}
                </span>
              </div>
              {category && (
                <span className="inline-block px-2 py-0.5 text-xs rounded border border-outline-variant/30 text-on-surface-variant mb-3 bg-surface-container-lowest">
                  {category}
                </span>
              )}
              <p className="text-sm text-on-surface-variant mb-4 line-clamp-2 leading-relaxed">
                {companyDescription}
              </p>
              <p className="text-xs font-semibold text-on-surface mb-2 font-label tracking-wider uppercase">
                {">"} Responsibilities
              </p>
              <ul className="space-y-1 text-sm text-on-surface-variant list-disc list-inside">
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
