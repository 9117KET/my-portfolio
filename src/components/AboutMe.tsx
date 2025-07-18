import { builds, hobbies, cvLink } from "../utils/constants";
import profileImage from "../utils/images/28-removebg-preview.png";

export default function AboutMe() {
  return (
    <div className="mt-5 mb-[-2%] p-6 sm:p-8 dark:text-gray-300 font-mono max-w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Text container */}
        <div>
          {/* Main heading with typewriter and caret animations */}
          <h1
            className="text-xl sm:text-3xl md:text-6xl font-bold relative w-[max-content] md:w-[max-content] font-mono 
                        before:absolute before:inset-0 before:animate-typewriter before:bg-white before:dark:bg-[#2D2E32] 
                        after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-blue-500
                        sm:before:w-[calc(100% + 0.125em)]"
          >
            Kinlo-Ephriam-Tangiri
          </h1>
          <h2 className="text-sm sm:text-xl md:text-2xl mt-2">
            Tech Enthusiast & Student Entrepreneur
          </h2>
          {/* Introduction list */}
          <ul className="list-disc pl-5 text-xs sm:text-sm mt-4 font-mono">
            <li>
              Hi! I am Kinlo, a final-year Computer Science student with a minor
              in Data Science and specialization in Artificial Intelligence and
              Machine Learning at Constructor University in Bremen, Germany. I
              love learning, teaching and building projects. I actively share my
              knowledge and insights mostly through writing on various
              professional platforms, especially on&nbsp;
              <a
                href="https://www.linkedin.com/in/kinlo-ephriam-tangiri-a70113218/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                LinkedIn
              </a>
              .
            </li>
          </ul>
          {/* My CV button */}
          <p className="mt-4">
            <a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span className="material-symbols-outlined mr-1 text-base">
                description
              </span>
              My Resume
            </a>
          </p>
        </div>
        {/* Image container */}
        <div className="flex justify-center items-center">
          <img
            src={profileImage}
            alt="Kinlo Ephriam Tangiri"
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 h-auto"
          />
        </div>
      </div>
      <div className="mt-10">
        {/* Decorative title separator for "About Me:" */}
        <div className="mt-8">
          <div className="relative flex py-5 items-center group">
            <div className="flex-grow border-t border-gray-400 transform transition-transform duration-300 group-hover:scale-x-105"></div>
            <span
              className="text-lg sm:text-xl md:text-3xl font-semibold flex-shrink mx-4 text-gray-400 
              transition-colors duration-300 group-hover:text-blue-500"
            >
              <span className="text-blue-500">{`>`}</span> About Me:
            </span>
            <div className="flex-grow border-t border-gray-400 transform transition-transform duration-300 group-hover:scale-x-105"></div>
          </div>

          {/* Personal statements */}
          <p className="pl-2 md:pl-6 text-xs sm:text-sm md:text-lg dark:text-gray-300"></p>
          <p className="pl-2 md:pl-6 text-xs sm:text-sm md:text-lg dark:text-gray-300">
            <span className="text-blue-500">| </span>I enjoy learning, problem
            solving, & teaching. I earned my first tutoring income in high
            school teaching my classmates further mathematics and later at the
            university, I become a Teaching Assistant (TA) for Calculus I & II.
            After high school, I started building an e-learning platform with my
            friend where we had to learn everything from scratch in order to
            provide access to education for students in crisis regions of my
            country where schools were disrupted.
          </p>
          <div style={{ height: "20px" }}></div>
          <p className="pl-2 md:pl-6 text-xs sm:text-sm md:text-lg dark:text-gray-300">
            <span className="text-blue-500">| </span>If I am not studying or
            coding, I will definitely be:
          </p>

          {/* List of hobbies */}
          <ul className="pl-5 sm:pl-10 md:pl-20 space-y-3 text-xs sm:text-sm md:text-lg dark:text-gray-300">
            {hobbies.map((hobby, key) => (
              <li
                key={key}
                className="group flex items-center gap-2 transition-all duration-300 hover:translate-x-2"
              >
                <span className="text-blue-500 transform transition-transform duration-300 group-hover:scale-110">
                  {">"}
                </span>
                <span className="transition-colors duration-300 group-hover:text-blue-500">
                  {hobby}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section on capabilities */}
        <div className="mt-10">
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="text-lg sm:text-xl md:text-3xl font-semibold flex-shrink mx-4 text-gray-400">
              <span className="text-blue-500">{`>`}</span> My Projects
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <ul className="pl-5 sm:pl-10 md:pl-20 mt-4 space-y-2 text-xs sm:text-sm md:text-lg dark:text-gray-300">
            {builds.map((build, key) => (
              <li key={key}>
                <span className="text-blue-500">{">"} </span>
                {build}
              </li>
            ))}
            <li>
              <span>
                For detailed information about these projects, please visit the
                Projects section in the navigation menu.
              </span>
            </li>
          </ul>
        </div>

        {/* Current professional status */}
        <div className="mt-8">
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="text-lg sm:text-xl md:text-3xl font-semibold flex-shrink mx-4 text-gray-400">
              <span className="text-blue-500">{`>`}</span> My Current Role
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <p className="pl-2 md:pl-6 mt-4 text-xs sm:text-sm md:text-lg dark:text-gray-300">
            <span className="text-blue-500">| </span>Assistant Project Manager
            for YouthTeamUp @ Constructor University
          </p>
          <p className="pl-2 md:pl-6 mt-4 text-xs sm:text-sm md:text-lg dark:text-gray-300">
            <span className="text-blue-500">| </span>Software Engineering
            Resident at Headstarter
          </p>
        </div>
      </div>
    </div>
  );
}
