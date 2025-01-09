interface ProjectProps {
  id: string;
  name: string;
  description: string;
  github: string;
  technologies: string[];
  features: string[];
  demo?: string;
}

export default function Project({
  id,
  name,
  features,
  description,
  github,
  technologies,
  demo,
}: ProjectProps) {
  return (
    <div
      id={id}
      className="p-4 border-b border-gray-300 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600 mt-6"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h2 className="text-lg font-semibold dark:text-gray-300">
          {name}
        </h2>
        <div className="flex gap-3">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              <span>Live Demo</span>
              <svg
                className="w-4 h-4 ml-2"
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
            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300"
          >
            <span>GitHub</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
          </a>
        </div>
      </div>

      <p className="text-sm dark:text-gray-300 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="mb-6">
        <h3 className="text-sm font-semibold mb-3 dark:text-gray-300">
          Key Features
        </h3>
        <ul className="space-y-2 text-sm dark:text-gray-300 pl-10">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              - {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-lg"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
