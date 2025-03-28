//import React from 'react';
import { useState } from "react";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import { experience } from "../utils/constants";
import styles from "../utils/style";
import { Helmet } from "react-helmet-async";

const categories = ["All", "Software Development", "Management & Others"];

export default function Experiences() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredExperiences = experience.filter(
    (exp) => selectedCategory === "All" || exp.category === selectedCategory
  );

  return (
    <div className="dark:bg-[#2D2E32] min-h-screen">
      <Helmet>
        <title>Experience</title>
      </Helmet>
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar clicked="experience" />
        </div>
      </div>

      <div className={`${styles.flexStart} w-full`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`${styles.boxWidth} mt-5 p-8 dark:text-gray-300`}>
            <h3 className="text-xl dark:text-gray-300 text-black mb-5">
              {`-> `}My professional journey has been a blend of challenging and
              rewarding experiences that have shaped me into a self-driven and
              highly motivated individual.
            </h3>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="text-3xl font-semibold flex-shrink mx-4 text-gray-400">
                <span className="text-blue-800">{`>`}</span> My Experience:
              </span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Here are some of the roles I have held:
            </h3>

            <div className="flex flex-wrap justify-center mt-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer text-sm font-medium border border-lightText dark:border-gray-500 rounded-lg m-1 px-4 py-2 transition-all duration-300 hover:bg-blue-800 dark:hover:bg-blue-900 ${
                    selectedCategory === category
                      ? "bg-blue-800 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                  }`}
                  aria-label={`Filter experiences by ${category}`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex flex-col">
              <Experience experiences={filteredExperiences} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
