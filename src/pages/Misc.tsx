import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import styles from "../utils/style";
import { certificates, awards, events } from "../utils/constants";

// Updated categories array to exclude "All"
const categories = ["Certificates", "Awards", "Events"];

export default function Misc() {
    // Default to the first category in the updated list
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const itemsToShow = {
        "Certificates": certificates,
        "Awards": awards,
        "Events": events
    };

    return (
        <div className='dark:bg-[#2D2E32] min-h-screen'>
            <Helmet>
                <title>Miscellaneous</title>
            </Helmet>
            <Navbar clicked="misc" />

            <div className={`${styles.flexCenter} w-full`}>
                <div className={`${styles.boxWidth} mt-5 p-8 dark:text-gray-300`}>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl dark:text-gray-300 text-black mb-5">
                        My Portfolio
                    </h1>
                    <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl dark:text-gray-300 text-black mb-5">
                        Here's a collection of my certifications, awards, events, competitions, and more.
                    </h2>

                    <div className="flex flex-wrap justify-center mt-6">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`cursor-pointer text-sm border border-lightText dark:border-gray-500 rounded-lg m-1 px-2 py-1 transition-all duration-300 hover:bg-blue-800 dark:hover:bg-blue-900 ${selectedCategory === category ? "bg-blue-800" : "bg-gray-100 dark:bg-gray-700"}`}
                                aria-label={`Filter items by ${category}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Display a heading for the selected category */}
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-6 mb-4 dark:text-gray-300 text-black text-center font-bold">
                        {selectedCategory}
                    </h3>

                    {/* Display items with sub-headings, descriptions, and dates */}
                    <ul className="space-y-4">
                        {itemsToShow[selectedCategory].map(item => (
                            <div key={item.id}>
                                <h4 className="text-md sm:text-lg md:text-xl lg:text-2xl dark:text-gray-300 text-black font-bold">
                                    {item.title}: <span className="font-normal">{item.description}</span>
                                </h4>
                                <p className="text-sm sm:text-md md:text-lg lg:text-xl dark:text-gray-500 text-black">
                                    {item.date}
                                </p>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
