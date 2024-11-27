import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import styles from "../utils/style";
import { certificates, awards, events } from "../utils/constants";

// Updated categories array to exclude "All"
const categories = ["Certificates", "Awards", "Events"];

// Define itemsToShow before using it to define Category type
const itemsToShow = {
    "Certificates": certificates,
    "Awards": awards,
    "Events": events
};

// Define a type for the keys of itemsToShow
type Category = keyof typeof itemsToShow;

export default function Misc() {
    // Ensure selectedCategory is of type Category
    const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0] as Category);

    return (
        <div className='dark:bg-[#2D2E32] min-h-screen'>
            <Helmet>
                <title>Miscellaneous</title>
            </Helmet>
            <Navbar clicked="misc" />

            <div className={`${styles.flexCenter} w-full`}>
                <div className={`${styles.boxWidth} mt-5 p-8 dark:text-gray-300`}>
                    
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl dark:text-gray-300 text-black mb-5 font-medium">
                        Here's a collection of my certifications, awards, events, competitions, and more.
                    </h2>

                    <div className="flex flex-wrap justify-center mt-6 space-x-2">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category as Category)}
                                className={`cursor-pointer text-sm border border-lightText dark:border-gray-500 rounded-full m-1 px-4 py-2 transition-all duration-300 hover:bg-blue-600 dark:hover:bg-blue-700 ${selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-gray-700 text-black dark:text-white"}`}
                                aria-label={`Filter items by ${category}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-6 mb-4 dark:text-gray-100 text-black text-center font-bold">
                        {selectedCategory}
                    </h3>

                    <ul className="space-y-6">
                        {itemsToShow[selectedCategory].map(item => (
                            <div key={'id' in item ? item.id : item.title} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center">
                                <div>
                                    <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl dark:text-gray-300 text-black font-bold">
                                        {item.title}: <span className="font-normal">{item.description}</span>
                                    </h4>
                                    <p className="text-sm sm:text-md md:text-lg lg:text-xl dark:text-gray-500 text-black">
                                        {item.date}
                                    </p>
                                </div>
                                <button
                                    className="ml-4 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-all duration-300"
                                    onClick={() => alert(`More information about ${item.title}`)}
                                >
                                    More Info
                                </button>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
