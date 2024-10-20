import { useState } from "react";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import { projects } from "../utils/constants";
import styles from "../utils/style";
import { Helmet } from "react-helmet-async";

const languages = ["All","Fullstack", "Data Science", "Artificial Intelligence"]; // Add languages as needed

export default function Projects() {
  // State to keep track of the selected programming language 
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  // Filter projects based on the selected language
  const filteredProjects = projects.filter(project => 
    selectedLanguage === "All" || project.technologies.includes(selectedLanguage)
  );

  return (
    <div className='dark:bg-[#2D2E32] min-h-screen'>
      <Helmet>
        <title>projects;</title>
      </Helmet>
      {/* Navigation bar */}
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar clicked="projects;" />
        </div>
      </div>

      <div className={`${styles.flexStart} w-full`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`${styles.boxWidth} mt-5 p-8 dark:text-gray-300`}>
            {/* Introduction text */}
            <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl dark:text-gray-300 text-black mb-5">
              {`-> `}I mostly learn through working on projects. This approach helps me understand concepts better and keeps me motivated to build more because I am
              actually seeing what I am building and if I don't get to the end, I basically do not let it go.
            </h3>
            {/* Divider with "My Projects" text */}
            <div className="relative flex py-3 md:py-5 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold flex-shrink mx-2 md:mx-4 text-gray-400">
                <span className="text-blue-800">{`>`}</span> My Projects:
              </span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl dark:text-gray-300 text-black mb-5">Here are some of my favourite projects that I have worked on:</h3>
            
            {/* Language filter buttons */}
            <div className="flex flex-wrap justify-center mt-6">
              {languages.map(language => (
                <span 
                  key={language} 
                  onClick={() => setSelectedLanguage(language)} 
                  className={`cursor-pointer text-sm border border-lightText dark:border-gray-500 rounded-lg m-1 px-2 py-1 transition-all duration-300 hover:bg-blue-800 dark:hover:bg-blue-900 ${selectedLanguage === language ? "bg-blue-800" : "bg-gray-100 dark:bg-gray-700"}`}
                >
                  {language}
                </span>
              ))}
            </div>
            
            {/* Display filtered projects */}
            <div className="flex flex-col">
              {filteredProjects.map(project => (
                <Project 
                  key={project.id} 
                  id={project.id} 
                  demo={project.demo} 
                  name={project.name} 
                  github={project.github} 
                  description={project.description} 
                  technologies={project.technologies} 
                  features={project.features} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
