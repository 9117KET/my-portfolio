import { Helmet } from "react-helmet-async";
import styles from "../utils/style";
import BlogPost from "./BlogPost";
import { useParams } from "react-router-dom";
import { posts } from "../utils/constants";
import Theme from "../components/Theme";
import GoBack from "../components/GoBack";

// Define the BlogPostPage component
export default function BlogPostPage() {
  // Retrieve the postId from the URL parameters
  const { postId } = useParams();
  // Find the post by postId from the predefined posts array
  const post = posts.find((post) => post.id === postId);

  // Render a message if the post is not found
  if (!post) {
    return <p>Post not found</p>;
  }

  // Main component render
  return (
    <div className="dark:bg-[#2D2E32] min-h-screen overflow-hidden">
      {/* Set the page title using Helmet */}
      <Helmet>
        <title>projects;</title>
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
            />
          </div>
        </div>
      </div>
    </div>
  );
}
