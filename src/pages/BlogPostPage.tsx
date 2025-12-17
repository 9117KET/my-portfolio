import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styles from "../utils/style";
import BlogPost from "./BlogPost";
import { useParams } from "react-router-dom";
import { posts } from "../utils/constants";
import Theme from "../components/Theme";
import GoBack from "../components/GoBack";
import type { Post } from "../types/post";

// Helper to generate JSON-LD structured data for SEO.
// This describes the current blog post as a Schema.org BlogPosting,
// which search engines can use to show rich results.
const generateStructuredData = (post: Post, url: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: "Kinlo Ephriam Tangiri",
    },
    publisher: {
      "@type": "Organization",
      name: "Kinlo Ephriam Portfolio",
      url: window.location.origin,
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
};

// Define the BlogPostPage component
export default function BlogPostPage() {
  // Retrieve the postId from the URL parameters
  const { postId } = useParams();
  // Find the post by postId from the predefined posts array
  const post = posts.find((p) => p.id === postId);

  // Render a user-friendly error message if the post is not found
  if (!post) {
    return (
      <div className="dark:bg-[#2D2E32] min-h-screen">
        <Helmet>
          <title>Post Not Found - Blog</title>
          <meta
            name="description"
            content="The requested blog post could not be found."
          />
        </Helmet>
        <div className="flex justify-between relative mx-[6%] sm:mx-[8%] mt-4">
          <GoBack />
          <Theme />
        </div>
        <div className={`${styles.flexCenter} min-h-[60vh]`}>
          <div className={`${styles.boxWidth} text-center p-8`}>
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Post Not Found
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              The blog post you're looking for doesn't exist or may have been
              moved.
            </p>
            <Link
              to="/blog"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Main component render
  return (
    <div className="dark:bg-[#2D2E32] min-h-screen overflow-hidden">
      {/* Set the page title using Helmet */}
      <Helmet>
        <title>{post.title} - Blog</title>
        <meta name="description" content={post.description} />
        {/* Add Open Graph meta tags for better social sharing */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        {/* JSON-LD structured data for better SEO */}
        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData(post, window.location.href))}
        </script>
      </Helmet>
      {/* Navigation bar with GoBack and Theme toggle components */}
      <div className="flex justify-between relative mx-[6%] sm:mx-[8%] mt-4">
        <GoBack />
        <Theme />
      </div>

      {/* Main content area */}
      <div className={`${styles.flexStart} w-full`}>
        <div className={`${styles.boxWidth}`}>
          {/* Blog post container */}
          <div className={`${styles.boxWidth} mt-5 p-8 dark:text-gray-100`}>
            {/* BlogPost component with post details */}
            <BlogPost
              title={post.title}
              category={post.category}
              content={post.content}
              date={post.date}
              description={post.description}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
