interface ProjectProps {
    id: string,
    name: string,
    description: string, 
    github: string,
    technologies: string[],
    features: string[],
    demo?: string
}

export default function Project({id, name, features, description, github, technologies, demo}: ProjectProps) {
  return (
    <div id={id} className="p-4 border-b border-gray-300 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600 mt-6">
        {/* Header section with project name and buttons for demo and GitHub */}
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">{name}</h2>
            <div className="flex gap-4">
                {/* Conditional rendering for Live Demo button if demo URL is provided */}
                {
                    demo ? 
                    <button className="text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 rounded-lg px-4 py-2">
                        <a href={demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </button>
                    :
                    ""
                }
                {/* GitHub repository button */}
                <button className="text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 rounded-lg px-4 py-2">
                    <a href={github} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                </button>
            </div>
        </div>
        {/* Project description and features list */}
        <div className="mb-2 text-sm flex-1 ml-4">
            <p className="">{description}</p><br/>
            <p>{`> `}Features:</p>
            <ul className="pl-10">
                {
                    features.map(feature => (
                        <li key={feature}>- {feature}</li> // Mapping features to list items
                    ))
                }
            </ul>
        </div><br/>
        {/* Technologies used section */}
        <div className="flex flex-wrap">
            {technologies.map(tech => (
                <span key={tech} className="text-sm border border-lightText dark:border-gray-500 bg-gray-100 dark:bg-gray-700 rounded-lg m-1 px-2 py-1 transition-all duration-300 hover:bg-blue-300 dark:hover:bg-blue-500">{tech}</span> // Mapping technologies to tags
            ))}
        </div>
    </div>
  )
}