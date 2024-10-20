//import React from 'react';

interface ExperienceProps {
    experiences: {
        id: string,
        role: string,
        company: string,
        duration: string,
        responsibilities: string[],
        companyDescription: string,
        
    }[]
}

const Experience = ({ experiences }: ExperienceProps) => {
    if (!experiences || !Array.isArray(experiences)) {
        console.error('Invalid or undefined experiences provided:', experiences);
        return <div>No experiences available.</div>;
    }

    return (
        <div className="experience">
            {experiences.map(({ id, role, company, duration, responsibilities, companyDescription, }) => (
                <div key={id} className="p-4 border-b border-gray-300 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600 mt-6">
                    {/* Header section with role, company, and duration */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">{role} - {company}</h2>
                        <span className="text-sm bg-gray-200 dark:bg-gray-800 rounded-lg px-3 py-1">{duration}</span>
                    </div>
                    {/* Responsibilities list */}
                    <div className="mb-2 text-sm flex-1 ml-4">
                        <p>{`> `}Responsibilities:</p>
                        <ul className="pl-10">
                            {responsibilities.map((responsibility, index) => (
                                <li key={`${id}-${index}`}>- {responsibility}</li>
                            ))}
                        </ul>
                    </div>
                    {/* Company Description */}
                    <div className="mb-2 text-sm flex-1 ml-4">
                        <p>{`>`} Company Description:</p>
                        <p className="pl-10">{companyDescription}</p> {/* Updated to display as a paragraph */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Experience;
