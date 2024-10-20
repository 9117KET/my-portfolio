import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import styles from "../utils/style";
import { posts } from "../utils/constants";
import BlogCard from "../components/BlogCard";

export default function Blog() {
  return (
    <div className='dark:bg-[#2D2E32] min-h-screen'>
      <div className={`${styles.flexCenter}`}>
        <Helmet>
          <title>blog;</title> {/* Setting the page title */}
        </Helmet>
          <div className={`${styles.boxWidth}`}>
              <Navbar clicked="blog;" /> {/* Navbar component with 'blog' as the active item */}
          </div>
      </div>

      <div className={`${styles.flexStart} w-full`}>
          <div className={`${styles.boxWidth}`}>
            <div className={`${styles.boxWidth} mt-5 p-8 dark:text-gray-300`}>
              <h3 className="text-xl dark:text-gray-300 text-black mb-5">
                {`-> `}
                These are just the notes I take while I learn about a new topic, or just to have some fun (If you notice any inaccuracies in my post, please email me!).
              </h3> {/* Introductory text */}
              <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="text-3xl font-semibold flex-shrink mx-4 text-gray-400">
                  <span className="text-blue-800">{`>`}</span> My Articles: {/* Changed from text-violet-600 to text-blue-800 */}
                </span> {/* Section header for articles, changed color to deep blue */}
                <div className="flex-grow border-t border-gray-400"></div>
              </div>
            </div>
            <div className={`${styles.boxWidth} border-blue-800 flex flex-col gap-8 p-8 dark:text-gray-300`}>
              {
                posts.map((post) => (
                  <div className="flex">
                    <p className="text-3xl">{">"}</p> <BlogCard id={post.id} title={post.title} date={post.date} category={post.category} description={post.description} />
                  </div> // Mapping through posts and rendering BlogCard for each
                ))
              }
            </div>
          </div>
      </div>
    </div>
  )
}