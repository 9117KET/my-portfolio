import {
  builds,
  hobbies,
  cvLink,
  skills,
  skillCategories,
} from "../utils/constants";
import profileImage from "../utils/images/28-removebg-preview.png";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function AboutMe() {
  const skillsByName = Object.fromEntries(
    skills.map((s) => [s.name, s.years])
  );

  return (
    <div className="mt-5 mb-[-2%] p-6 sm:p-8 dark:text-gray-300 font-mono max-w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Text container */}
        <div>
          <h1
            className="text-xl sm:text-3xl md:text-6xl font-bold relative w-[max-content] md:w-[max-content] font-mono 
                        before:absolute before:inset-0 before:animate-typewriter before:bg-white before:dark:bg-[#2D2E32] 
                        after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-blue-500
                        sm:before:w-[calc(100% + 0.125em)]"
          >
            Kinlo-Ephriam-Tangiri
          </h1>
          <h2 className="text-sm sm:text-xl md:text-2xl mt-2">
            Full-Stack Developer with AI Focus & Management Experience
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
            Bremen, Germany
          </p>
          <p className="text-xs sm:text-sm mt-4">
            Hi! I'm Kinlo - a full-stack developer with an AI/ML focus, a BSc in
            Computer Science and a Data Science minor. I build end-to-end
            products, work on AI-powered systems, and bring hands-on experience
            in program and project management. I share projects and insights on
            this site and on{" "}
            <a
              href="https://www.linkedin.com/in/kinlo-ephriam-tangiri-a70113218/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              LinkedIn
            </a>
            .
          </p>
          <div className="mt-4 flex items-center gap-3 flex-wrap">
            <a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={profileImage}
            alt="Kinlo Ephriam Tangiri"
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 h-auto"
          />
        </div>
      </div>

      <div className="mt-10">
        {/* About Me */}
        <div className="mt-8">
          <div className="relative flex py-5 items-center group">
            <div className="flex-grow border-t border-gray-400 transform transition-transform duration-300 group-hover:scale-x-105"></div>
            <span className="text-lg sm:text-xl md:text-3xl font-semibold flex-shrink mx-4 text-gray-400 transition-colors duration-300 group-hover:text-blue-500">
              <span className="text-blue-500">{">"}</span> About Me:
            </span>
            <div className="flex-grow border-t border-gray-400 transform transition-transform duration-300 group-hover:scale-x-105"></div>
          </div>
          <p className="pl-2 md:pl-6 text-xs sm:text-sm md:text-base dark:text-gray-300 max-w-3xl">
            I enjoy learning, problem solving, and teaching. I've tutored
            mathematics and been a TA for Calculus I & II. After high school I
            co-built an e-learning platform to provide free educational resources
            in crisis-affected regions.
          </p>
          <p className="pl-2 md:pl-6 text-xs sm:text-sm md:text-base dark:text-gray-300 mt-3">
            <span className="text-blue-500">|</span> When I'm not coding or
            studying:
          </p>
          <div className="pl-2 md:pl-6 mt-2 flex flex-wrap gap-2">
            {hobbies.map((hobby, key) => (
              <span
                key={key}
                className="px-3 py-1 text-xs sm:text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-300"
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>

        {/* Skills as category cards */}
        <div className="mt-10">
          <div className="relative flex py-5 items-center group">
            <div className="flex-grow border-t border-gray-400 transform transition-transform duration-300 group-hover:scale-x-105"></div>
            <span className="text-lg sm:text-xl md:text-3xl font-semibold flex-shrink mx-4 text-gray-400 transition-colors duration-300 group-hover:text-blue-500">
              <span className="text-blue-500">{">"}</span> Skills & Experience:
            </span>
            <div className="flex-grow border-t border-gray-400 transform transition-transform duration-300 group-hover:scale-x-105"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {skillCategories.map((cat) => {
              const categorySkills = cat.skillNames
                .map((name) => ({ name, years: skillsByName[name] }))
                .filter((s) => s.years != null);
              return (
                <Card key={cat.id}>
                  <h3 className="text-base font-semibold dark:text-gray-200 mb-3">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map(({ name, years }) => (
                      <span
                        key={name}
                        className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-300"
                      >
                        {name}
                        <span className="text-gray-500 dark:text-gray-400 ml-1">
                          ({years}y)
                        </span>
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* My Projects teaser */}
        <div className="mt-10">
          <div className="relative flex py-5 items-center group">
            <div className="flex-grow border-t border-gray-400 transform transition-transform duration-300 group-hover:scale-x-105"></div>
            <span className="text-lg sm:text-xl md:text-3xl font-semibold flex-shrink mx-4 text-gray-400 transition-colors duration-300 group-hover:text-blue-500">
              <span className="text-blue-500">{">"}</span> My Projects
            </span>
            <div className="flex-grow border-t border-gray-400 transform transition-transform duration-300 group-hover:scale-x-105"></div>
          </div>
          <div className="pl-2 md:pl-6 mt-4 flex flex-wrap gap-2">
            {builds.slice(0, 6).map((build, key) => (
              <span
                key={key}
                className="px-3 py-1 text-xs sm:text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-300 truncate max-w-[280px] sm:max-w-none"
                title={build}
              >
                {build.replace(/\s*-+$/g, "").trim()}
              </span>
            ))}
          </div>
          <p className="pl-2 md:pl-6 mt-4 text-xs sm:text-sm dark:text-gray-400">
            For details, visit the Projects section.
          </p>
          <div className="pl-2 md:pl-6 mt-3">
            <Link
              to="/projects"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              See all projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
