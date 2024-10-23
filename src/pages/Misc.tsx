import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import styles from "../utils/style";
import { certificates, awards, events } from "../utils/constants";

export default function Misc() {
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
                        <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl dark:text-gray-300 text-black mb-5">
                            Here's a collection of my certifications, awards, events, competitions, and more.
                        </h3>

                        <div className="relative flex py-3 md:py-5 items-center">
                            <div className="flex-grow border-t border-gray-400"></div>
                            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold flex-shrink mx-2 md:mx-4 text-gray-400">
                                <span className="text-blue-800">{`>`}</span> Certificates & Awards:
                            </span>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>

                        <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl dark:text-gray-300 text-black mb-5">Certificates</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            {certificates.map((item) => (
                                <li key={item.id} className="text-sm sm:text-lg md:text-xl lg:text-2xl hover:text-blue-700 cursor-pointer">{item.title} - {item.description} ({item.date})</li>
                            ))}
                        </ul>

                        <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl dark:text-gray-300 text-black mb-5">Awards</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            {awards.map((item) => (
                                <li key={item.id} className="text-sm sm:text-lg md:text-xl lg:text-2xl hover:text-blue-700 cursor-pointer">{item.title} - {item.description} ({item.date})</li>
                            ))}
                        </ul>

                        <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl dark:text-gray-300 text-black mb-5">Relevant Events Attended</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            {events.map((item) => (
                                <li key={item.id} className="text-sm sm:text-lg md:text-xl lg:text-2xl hover:text-blue-700 cursor-pointer">{item.title} - {item.description} ({item.date})</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
