import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import BlogPost from "./BlogPost";
import { posts } from "../utils/constants";
import GoBack from "../components/GoBack";
import PageShell from "../components/PageShell";
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

export default function BlogPostPage() {
  const { postId } = useParams();
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return (
      <PageShell>
        <Helmet>
          <title>Post Not Found | Kinlo Ephriam Tangiri</title>
          <meta
            name="description"
            content="The requested blog post could not be found."
          />
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="max-w-3xl mx-auto py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-on-surface">
            Post not found
          </h1>
          <p className="text-lg text-on-surface-variant mb-8">
            The blog post you're looking for doesn't exist or may have been
            moved.
          </p>
          <Link
            to="/blog"
            className="inline-block px-6 py-3 bg-primary text-on-primary rounded-lg hover:bg-primary/85 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            Back to blog
          </Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <Helmet>
        <title>{post.title} | Kinlo Ephriam Tangiri</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData(post, window.location.href))}
        </script>
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <div className="mb-8 -ml-3">
          <GoBack />
        </div>
        <BlogPost
          title={post.title}
          category={post.category}
          content={post.content}
          date={post.date}
          description={post.description}
        />
      </div>
    </PageShell>
  );
}
