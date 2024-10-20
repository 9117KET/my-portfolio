import { Post } from "../types/post"



// Navigation links for the portfolio site
export const navLinks = [
    {
        id: "",
        name: "about_me"
    },
    {
        id: "projects",
        name: "projects"
    },
    {
        id: "experience",
        name: "experience"
    },
    {
        id: "misc",
        name: "misc"
    },
    {
        id: "blog",
        name: "blog"
    },
    
]


export const cvLink = "https://drive.google.com/file/d/1pxPH2RQwCY9KTOdQgWHcQEwiDcUjnsd9/view?usp=sharing"

// Project details for the portfolio
export const projects = [
    // Expenses Tracker project details
    {
        id: "academy",
        name: "KET Academy",
        description: "KET Academy is an e-learning platform designed to provide academic resources to secondary and high school students, especially those affected by crises or natural disasters in Africa. The platform also empowers youths (ambassadors) with educational technology skills and provides tailored resources to support their learning journey.",
        github: "https://github.com/ket-academy/ketacademy",
        features: [
            "Resource Access: Tailored academic resources for students in crisis-affected regions.",
            "Student Empowerment: Enhances students' skills with educational technology.",
            "Crisis Support: Designed to assist students affected by crises or natural disasters.",
            "Fully responsive and accessible across various devices and platforms."
        ],
        technologies: [
            "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"
        ],
        demo: "https://ket.academy/"
    },

    {
        id: "expenses",
        name: "Expenses Tracker",
        description: "Expense Tracker is a simple and efficient full stack web application that helps you keep track of your spending. With a user-friendly interface, you can easily log your expenses, categorize them, and see a detailed history. The app provides insights into your financial habits and helps you manage your budget effectively.",
        github: "https://github.com/9117KET/Expense_Tracker",
        features: [
            "User Authentication: Securely log in and manage your personal expenses.",
            "Expenses Logging: Add new expenses with details such as date, category, description, and amount.",
            "Expenses Categories, History, and Summary: View expenses based on categories and check summaries for better budget management.",
            "Handy Search and Filter Options: Easily find specific expenses or categories with search and filter functionalities.",
            "Responsive Design: Fully adaptable to different screen sizes and devices."
        ],
        technologies: [
            "HTML 5", "Tailwind", "TypeScript", "React", "Node.js", "Express.js", "Firebase"
        ],
        demo: "https://example.com/demo"
    },


    {
        id: "assistantai",
        name: "AI Customer Assistant Bot",
        description: "AssistantAI is an AI-powered customer assistant chatbot built with Java and Spring Boot. It is designed to provide intelligent and adaptive customer service, improving user experience and efficiency.",
        github: "https://github.com/9117KET/aicustomersupport",
        features: [
            "Natural Language Processing (NLP): Understands and responds to customer queries in natural language.",
            "Contextual Awareness: Maintains conversation context to provide relevant answers.",
            "Strict Information Provision: Provides responses within set guidelines to ensure accuracy and relevance.",
            "Platform Integration: Can be easily integrated with various platforms, such as websites, mobile apps, and CRM systems.",
            "Customizable and Scalable: Easily adaptable to specific business needs and scalable to support growing customer bases."
        ],
        technologies: [
            "Java", "Spring Boot", "MySQL", "Tailwind CSS", "Vanilla TypeScript", "OpenAI GPT", "Groq API"
        ],
        demo: "https://example.com/demo"
    },
    {
        id: "aiflashcard",
        name: "AI Flashcard",
        description: "AI Flashcard is an intelligent learning tool that uses AI to generate personalized flashcards for studying. This platform allows users to input topics and receive flashcards, multiple-choice questions, and videos tailored to their learning preferences, helping them retain information more effectively.",
        github: "https://github.com/9117KET/AI-Flashcards",
        features: [
            "AI-Generated Flashcards: Automatically creates personalized flashcards based on user-inputted topics.",
            "Multiple Learning Formats: Offers multiple-choice questions and videos in addition to flashcards.",
            "Learning Progress Tracking: Keeps track of user progress and suggests areas for improvement.",
            "Customizable Flashcards: Allows users to edit and organize their flashcards for better retention.",
            "Responsive Design: Fully responsive and optimized for various devices and platforms."
        ],
        technologies: [
            "React", "Node.js", "Express.js", "Tailwind CSS", "Firebase", "OpenAI API"
        ],
        demo: "https://example.com/demo"
    },
    

]

// Experience details for the portfolio
export const experience = [
    {
        id: "exp1",
        role: "Software Engineer",
        company: "Waziup e.V.",
        duration: "May 2024 - August 2024",
        responsibilities: [
            "Collaborated with the RnD hybrid workgroup to build a multipurpose recommendation framework.",
            "Contributed to both front-end and back-end development for IoT applications.",
            "Worked with an international team to develop DIY IoT solutions for African entrepreneurs.",
            "Assisted in creating innovative, affordable, and adaptable IoT solutions for emerging markets.",
            "Participated in training initiatives and provided cloud support for IoT-based applications."
        ],
        companyDescription: "Waziup e.V. is an IoT-focused organization promoting cutting-edge technologies and capacity building in emerging countries. They develop affordable, adaptable, and end-to-end IoT solutions, focusing on empowering 'glocal' (global and local) IoT entrepreneurs."
    },
    {
        id: "exp2",
        role: "Student Assistant Project Management",
        company: "YouthTeamUp (YTU)",
        duration: "Jan 2023 - Till present",
        responsibilities: [
            "Planned and organized the Shallow-Virtual-Exchange (SVE) and Deep-Virtual-Exchange (DVE) programs for youths across African and European Universities.",
            "Coordinated the implementation of the Global Impact Project (GIP) for Constructor University students working on their Community Impact Projects.",
            "Assisted in designing marketing materials and updating the YTU website, which has engaged over 2500+ youths from both Africa and Europe."
        ],
        companyDescription: "YouthTeamUp empowers African and European youths to connect and collaborate on creating Global Impact Projects through various virtual exchange programs."
    }
    ,
    {
        id: "exp3",
        role: "Community Engagement and Marketing Specialist",
        company: "Synthesis-Constructor Entrepreneurship & Innovation Centre",
        location: "Bremen, Germany",
        duration: "Nov 2023 - Apr 2024",
        responsibilities: [
            "Promoted Synthesis and Entrepreneurship initiatives at Constructor University.",
            "Contributed to empowering student entrepreneurs to become future-proof founders.",
            "Created posts, flyers, organized events, and updated the Synthesis website with the latest information."
        ],
        companyDescription: "The Synthesis-Constructor Entrepreneurship & Innovation Centre supports students by fostering entrepreneurial skills and providing resources for aspiring student founders at Constructor University."
    }
    ,
    {
        id: "exp4",
        role: "Founder and Developer",
        company: "KET Academy",
        location: "Yaoundé, Cameroon",
        duration: "2020 - Present",
        responsibilities: [
            "Established and led a team of more than 25 youths to build an e-learning platform with resources in video and PDF formats.",
            "Developed two versions of the platform: one built using HTML, CSS, and JavaScript, and the most recent using TypeScript, React, Firebase, with authentication, personalized dashboards, and AI features.",
            "Successfully reached over 1500+ students directly and over 15,000+ indirectly via various social media channels."
        ],
        companyDescription: "KET Academy is an e-learning platform that provides academic resources to secondary and high school students, with a focus on empowering youths in crisis-affected regions of Africa."
    }
    ,
    {
        id: "exp5",
        role: "Teaching Assistant (TA) - Calculus and Linear Algebra",
        company: "Constructor University",
        location: "Bremen, Germany",
        duration: "Oct 2023 - Apr 2024",
        responsibilities: [
            "Organize tutorial sessions both online and in-person to assist first-year students in understanding concepts at a deeper level.",
            "Prepare responses to students' questions and provide detailed feedback on their work.",
            "Evaluate assignments and examination sheets, ensuring accurate grading and feedback.",
            "Create a roadmap for exam preparation to help students effectively review course materials and perform well.",
            "Brainstorm questions and problem-solving approaches with students to enhance their critical thinking skills."
        ],
        companyDescription: "Constructor University is a leading private university in Germany, offering a variety of academic programs with a focus on research and global education."
    }
]

export const certificates = [
    {
        title: "Certified Data Scientist",
        description: "Certification demonstrating advanced proficiency in data science.",
        date: "March 2021",
        category: "Data Science" // Example category
    },
    {
        title: "Project Management Professional (PMP)",
        description: "Certification for project management skills.",
        date: "July 2020",
        category: "Management" // Example category
    }
];

export const awards = [
    {
        title: "Innovator of the Year",
        description: "Award received for outstanding innovation in technology.",
        date: "December 2021",
        category: "Innovation" // Example category
    },
    {
        title: "Best Community Service",
        description: "Award for exceptional community service.",
        date: "November 2019",
        category: "Community Service" // Example category
    }
];

export const events = [
    {
        title: "......................",
        description: ".................",
        date: "............",
        category: "............"
    },
    
    {
        title: "......................",
        description: ".................",
        date: "............",
        category: "............"
    }
];

// Contact information for the portfolio owner
export const contacts = [
    {
        id: "github",
        name: "GitHub",
        link: "https://github.com/9117KET" 
    },
    {
        id: "linkedin",
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/kinlo-ephriam-tangiri-a70113218/" 
    },
    {
        id: "x",
        name: "X",
        link: "https://x.com/KinloEphriam" 
    },
    {
        id: "leetcode",
        name: "LeetCode",
        link: "https://leetcode.com/u/kinlotangiri911/" 
    },
    {
        id: "hackerrank",
        name: "HackerRank",
        link: "https://www.hackerrank.com/profile/kinlotangiri911" 
    },
    {
        id: "email",
        name: "Email",
        link: "kinlotangiri911@gmail.com" 
    },



]

// Descriptions of types of builds the portfolio owner can perform
export const builds = [
    "KET Academy (An e-learning platform for secondary and high school students in Africa)", 
    "My Portfolio websites (First one with HTML, CSS and Javascript and the second with Typescript)", 
    "Expense Tracker", 
    "AI Customer Support", 
    "AI Flashcards", 
    "IoT recommendation framework"
]

// Hobbies of the portfolio owner
export const hobbies = [
    'Watching: [Documentaries, YouTube, Series(Crime/FBI movie type)].', 
    'Reading, tech articles or self development books', 
    "Listening to Podcast (Mostly Diary of a CEO by Steven Bartlett or Huberman Lab by Andrew Huberman)", 
    "Playing Chess", 
    "Playing Table Tennis",
    "Learning How to play Piano"]

// Blog posts available on the portfolio site
export const posts: Post[] = [
    {
        id: "beans",
        title: "AI, IoT, Big Data & Africa",
        date: "June 10, 2024",
        category: "AI-Post",
        description: "The Potential of IoT, AI, and Big Data for Rwanda's Future: A Case Study of Kigali Innovation City (KIC)",
        content: "The fields of Artificial Intelligence (AI), Big Data, and the Internet of Things (IoT) has been transforming industries globally, and Africa is no different. Below is a historical timeline of AI, IoT and Big Data over 6 decades."
    },
];
