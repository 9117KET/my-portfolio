import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import styles from "../utils/style";
import { posts } from "../utils/constants";
import BlogCard from "../components/BlogCard";

// Define categories for filtering
const categories = ['All', 'Post', 'Podcast', 'Article'];

export default function Blog() {
  // State to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Filter posts based on the selected category
  const filteredPosts = posts.filter(post => {
    return selectedCategory === 'All' || post.category === selectedCategory;
  });

  return (
    <div className='dark:bg-[#2D2E32] min-h-screen'>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <Navbar clicked="blog" />
      <div className={`${styles.flexCenter} w-full`}>
        <div className={`${styles.boxWidth} mt-5 p-8 dark:text-gray-300`}>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl dark:text-gray-300 text-black mb-5">
            Blog Posts
          </h1>
          <div className="flex flex-wrap justify-center mt-6">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer text-sm border border-lightText dark:border-gray-500 rounded-lg m-1 px-2 py-1 transition-all duration-300 hover:bg-blue-800 dark:hover:bg-blue-900 ${selectedCategory === category ? "bg-blue-800" : "bg-gray-100 dark:bg-gray-700"}`}
                aria-label={`Filter posts by ${category}`}
              >
                {category}
              </button>
            ))}
          </div>
          <ul className="space-y-4 mt-6">
            {filteredPosts.map(post => (
              <div key={post.id} className="flex">
                <BlogCard id={post.id} title={post.title} date={post.date} category={post.category} description={post.description} />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
