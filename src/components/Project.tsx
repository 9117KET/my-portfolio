import React from "react";
import Card from "./Card";

const MAX_FEATURES_SHOWN = 4;

interface ProjectProps {
  id: string;
  name: string;
  description: string;
  github: string;
  technologies: string[];
  features: string[];
  demo?: string;
  year?: number;
  status?: string;
  collaborators?: string[];
  category?: string;
}

const Project = React.memo(function Project({
  id,
  name,
  features,
  description,
  github,
  technologies,
  demo,
  year,
  status,
  collaborators,
  category,
}: ProjectProps) {
  const featuresToShow = features.slice(0, MAX_FEATURES_SHOWN);
  const hasLiveDemo = demo && !demo.includes("github.com");

  return (
    <Card as="article" className="flex flex-col h-full">
      <div id={id} className="flex flex-col flex-1">
        {/* Header: name + badges (year, category, status, collaborators) */}
        <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
          <h2 className="text-lg font-semibold dark:text-gray-300 pr-2">
            {name}
          </h2>
          <div className="flex flex-wrap gap-2 justify-end">
            {year != null && (
              <span
                className="inline-flex items-center text-xs text-gray-600 dark:text-gray-400"
                aria-label={`Year: ${year}`}
              >
                <svg
                  className="w-3.5 h-3.5 mr-1 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {year}
              </span>
            )}
            {category && (
              <span className="px-2 py-0.5 text-xs rounded border border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-300">
                {category}
              </span>
            )}
            {status && (
              <span className="px-2 py-0.5 text-xs rounded bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200">
                {status}
              </span>
            )}
            {collaborators && collaborators.length > 0 && (
              <span className="text-xs text-gray-600 dark:text-gray-400">
                With {collaborators.join(", ")}
              </span>
            )}
          </div>
        </div>

        <p className="text-sm dark:text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>

        <div className="mb-4 flex-1">
          <h3 className="text-sm font-semibold mb-2 dark:text-gray-300">
            Key Features
          </h3>
          <ul className="space-y-1 text-sm dark:text-gray-300 list-disc list-inside">
            {featuresToShow.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions: View project / Live demo + Source code */}
        <div className="pt-4 mt-auto border-t border-gray-200 dark:border-gray-600 flex flex-wrap gap-3">
          {demo && hasLiveDemo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              <span>View project</span>
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline"
          >
            <span>Source code</span>
            <svg
              className="w-4 h-4 shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
          </a>
        </div>
      </div>
    </Card>
  );
});

export default Project;
