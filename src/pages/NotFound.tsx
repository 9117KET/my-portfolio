import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import styles from "../utils/style";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="dark:bg-[#2D2E32] min-h-screen">
      <Helmet>
        <title>Page Not Found | Kinlo Ephriam Tangiri</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Return to Kinlo Ephriam Tangiri's portfolio homepage."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar clicked="" />
        </div>
      </div>

      <div className={`${styles.flexStart} w-full`}>
        <div className={`${styles.boxWidth}`}>
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-8">
            {/* 404 Error Code */}
            <div className="mb-8">
              <h1 className="text-8xl md:text-9xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                404
              </h1>
              <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
            </div>

            {/* Error Message */}
            <div className="mb-8 max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Oops! Page Not Found
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                The page you're looking for seems to have wandered off into the
                digital void. Don't worry, even the best developers encounter
                missing pages!
              </p>
              <p className="text-base text-gray-500 dark:text-gray-400">
                The URL might be incorrect, or the page may have been moved or
                deleted.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Go Home
              </Link>

              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 font-medium"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Go Back
              </button>
            </div>

            {/* Quick Navigation */}
            <div className="max-w-md">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Navigation
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/projects"
                  className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Projects
                </Link>
                <Link
                  to="/experience"
                  className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Experience
                </Link>
                <Link
                  to="/blog"
                  className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Blog
                </Link>
                <Link
                  to="/misc"
                  className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Certificates
                </Link>
              </div>
            </div>

            {/* Fun Developer Quote */}
            <div className="mt-12 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                "There are only two hard things in Computer Science: cache
                invalidation, naming things, and off-by-one errors." - Unknown
                Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
