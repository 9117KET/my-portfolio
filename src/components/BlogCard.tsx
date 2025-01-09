import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  date: string;
  category: string;
  description: string;
  id: string;
}

export default function BlogCard({
  id,
  title,
  date,
  category,
  description,
}: BlogCardProps) {
  return (
    <Link
      to={`/blog/${id}`}
      key={id}
      className="cursor-pointer group w-full transition-all duration-300 flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] overflow-hidden border border-gray-200 dark:border-gray-700"
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
            {category}
          </span>
          <time className="text-sm text-gray-500 dark:text-gray-400">
            {date}
          </time>
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
          {description}
        </p>

        <div className="flex items-center justify-end">
          <span className="inline-flex items-center text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
            Read more
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
