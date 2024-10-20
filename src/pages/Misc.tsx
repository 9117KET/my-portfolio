import { useState } from "react"; // Ensure useState is imported
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import styles from "../utils/style";
import { certificates, awards, events } from "../utils/constants";

export default function Misc() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Assuming you add a 'category' property to your certificates, awards, and events
    const filteredCertificates = certificates.filter(item =>
        selectedCategory === "All" || item.category === selectedCategory
    );
    const filteredAwards = awards.filter(item =>
        selectedCategory === "All" || item.category === selectedCategory
    );
    const filteredEvents = events.filter(item =>
        selectedCategory === "All" || item.category === selectedCategory
    );

    return (
        <div className='dark:bg-[#2D2E32] min-h-screen'>
            <Helmet>
                <title>Miscellaneous</title>
            </Helmet>
            <div className={`${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar clicked="misc" />
                </div>
            </div>

            <div className={`${styles.flexStart} w-full`}>
                <div className={`${styles.boxWidth}`}>
                    <div className={`${styles.boxWidth} mt-5 p-8 dark:text-gray-300`}>
                        <h3 className="text-xl dark:text-gray-300 text-black mb-5">
                            Here's a collection of my certifications, awards, events, competition and more.
                        </h3>
                        <div className="relative flex py-5 items-center">
                            <div className="flex-grow border-t border-gray-400"></div>
                            <span className="text-3xl font-semibold flex-shrink mx-4 text-gray-400">
                                <span className="text-blue-800">{`>`}</span> Certificates & Awards:
                            </span>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>

                        {/* Category filter buttons */}
                        <div className="flex flex-wrap justify-center mt-6">
                            {["All", "Data Science", "Management", "Innovation"].map(category => (
                                <span 
                                    key={category} 
                                    onClick={() => setSelectedCategory(category)} 
                                    className={`cursor-pointer text-sm border border-lightText dark:border-gray-500 rounded-lg m-1 px-2 py-1 transition-all duration-300 hover:bg-blue-800 dark:hover:bg-blue-900 ${selectedCategory === category ? "bg-blue-800" : "bg-gray-100 dark:bg-gray-700"}`}
                                >
                                    {category}
                                </span>
                            ))}
                        </div>

                        {/* Display filtered certificates */}
                        <h3 className="text-2xl mb-4 mt-8">Certificates</h3>
                        <ul className="list-disc pl-5">
                            {filteredCertificates.map((item, index) => (
                                <li key={index}>{item.title} - {item.description} ({item.date})</li>
                            ))}
                        </ul>

                        {/* Display filtered awards */}
                        <h3 className="text-2xl mb-4 mt-8">Awards</h3>
                        <ul className="list-disc pl-5">
                            {filteredAwards.map((item, index) => (
                                <li key={index}>{item.title} - {item.description} ({item.date})</li>
                            ))}
                        </ul>

                        {/* Display filtered events */}
                        <h3 className="text-2xl mb-4 mt-8">Relevant Events Attended</h3>
                        <ul className="list-disc pl-5">
                            {filteredEvents.map((item, index) => (
                                <li key={index}>{item.title} - {item.description} ({item.date})</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
