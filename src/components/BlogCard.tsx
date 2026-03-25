import React from "react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  date: string;
  category: string;
  description: string;
  id: string;
}

const BlogCard = React.memo(function BlogCard({
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
      className="cursor-pointer group w-full transition-all duration-300 flex flex-col rounded-xl border border-outline-variant/30 bg-surface-container-low shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-surface-container-high overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary/40"
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 font-label uppercase tracking-wider">
            {category}
          </span>
          <time className="text-sm text-on-surface-variant">
            {date}
          </time>
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-3 text-on-surface group-hover:text-primary transition-colors leading-tight">
          {title}
        </h3>

        <p className="text-on-surface-variant line-clamp-3 mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-end">
          <span className="inline-flex items-center text-primary group-hover:translate-x-1 transition-transform font-label uppercase tracking-wider text-xs">
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
});

export default BlogCard;
