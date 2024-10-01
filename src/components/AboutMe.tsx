import { builds, hobbies } from "../utils/constants";
export default function AboutMe() {
    return (
        <div className="mt-5 mb-[-2%] p-4 sm:p-8 dark:text-gray-300 font-mono">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Text container */}
                <div>
                    {/* Main heading with typewriter and caret animations */}
                    <h1 className="text-4xl sm:text-6xl font-bold relative w-[max-content] font-mono 
                        before:absolute before:inset-0 before:animate-typewriter before:bg-white before:dark:bg-[#2D2E32] 
                        after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-blue-500" >Kinlo-Ephriam-Tangiri</h1>
                    <h2 className="text-xl sm:text-2xl mt-2">Tech Enthusiast & Student Entrepreneur</h2>
                    {/* Introduction list */}
                    <ul className="list-disc pl-5 text-sm mt-4">
                        <li>Hello! I'm Kinlo, often referred to as "Professor." I'm pursuing a major in Computer Science and a minor in Data Science with an elective in Artificial Intelligence and Machine Learning at Constructor University, Bremen, Germany. I have a passion for educational technology. I actively share my knowledge on various social media platforms especially on LinkedIn</li>
                    </ul>
                </div>
                {/* Image container */}
                <div className="flex justify-center items-center">
                    <img src="/src/utils/images/28-removebg-preview.png" alt="Kinlo Ephriam Tangiri" 
                        className="w-full sm:w-3/4 md:w-full lg:w-3/4 xl:w-2/3 h-auto" />
                </div>
            </div>
            <div className="mt-10">
                {/* Decorative title separator */}
                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="text-xl sm:text-3xl font-semibold flex-shrink mx-4 text-gray-400"><span className="text-blue-800">{`>`}</span> About Me:</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
                
                {/* Personal statements */}
                <p className="pl-0 md:pl-6 text-base sm:text-lg dark:text-gray-300"><span className="text-blue-800">| </span>I enjoy teaching, problem solving and learning new things.</p>
                <p className="pl-0 md:pl-6 text-base sm:text-lg dark:text-gray-300"><span className="text-blue-800">| </span>If I am not studying or coding, I will definitely be:</p>
            
                {/* List of hobbies */}
                <ul className="pl-5 sm:pl-10 md:pl-20 space-y-2 text-base sm:text-lg dark:text-gray-300">
                    {
                        hobbies.map((hobby, key) => (
                            <li key={key}><span className="text-blue-800">{'>'} </span>{hobby}</li>       
                        ))
                    }
                </ul>
                
                {/* Section on capabilities */}
                <div className="mt-8">
                    <p className="pl-0 md:pl-6 text-base sm:text-lg dark:text-gray-300"><span className="text-blue-800">|</span> What I have been able to build so far?</p>
                    <ul className="pl-5 sm:pl-10 md:pl-20 mt-4 space-y-2 text-base sm:text-lg dark:text-gray-300">
                        {
                            builds.map((build, key) => (
                                <li key={key}><span className="text-blue-800">{'>'} </span>{build}</li>       
                            ))
                        }
                    </ul>
                </div>

                {/* Current professional status */}
                <p className="pl-0 md:pl-6 mt-8 text-base sm:text-lg dark:text-gray-300"><span className="text-blue-800">| </span>Currently an incoming SWE Fellow @ Headstater AI.</p>
            </div>
        </div>
    )
}