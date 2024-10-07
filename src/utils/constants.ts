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
        id: "blog",
        name: "blog"
    },
    {
        id: "misc",
        name: "misc"
    },
]


export const cvLink = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.carousell.com.my%2Fp%2Femoji-fuck-you-shirt-235499389%2F&psig=AOvVaw2erAA93_0WsFMo36VSV8sg&ust=1728347295113000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNj5s-WB-4gDFQAAAAAdAAAAABAE"
//"https://drive.google.com/file/d/1pxPH2RQwCY9KTOdQgWHcQEwiDcUjnsd9/view?usp=sharing"

// Project details for the portfolio
export const projects = [
    // Expenses Tracker project details
    {
        id: "expenses",
        name: "Expenses Tracker",
        description: "Expense Tracker is a simple and efficient full stack web application that helps you keep track of your spending. With a user-friendly interface, you can easily log your expenses, categorize them, and see a detailed history. The app provides insights into your financial habits and helps you manage your budget effectively.",
        github: "https://github.com/9117KET/Expense_Tracker",
        technologies: ["HTML 5", "Tailwind", "TypeScript", "React", "Node.js", "Express.js", "Firebase"],
        features: ["User Authentication.", "Expenses Logging: Add new expenses with details such as date, category, description, and amount.", "Expenses Categories, History and Summary.", "Handy search and filter options", "Responsive Design"]
    },
    
    {
        id: "pantry",
        name: "Inventory Management Application",
        description: "Meet the Inventory Management App, your go-to tool for keeping your product inventory in check! With an easy-to-use interface, you can track, filter, and organize your products effortlessly.",
        github: "https://github.com/oebelus/inventoryManager",
        features: [
            "Product Management: Add, update, and delete products.",
            "Inventory Tracking: Monitor product counts and expiration dates.",
            "Category Filtering: Filter products by categories with case-insensitive search.",
            "Fully responsive and compatible with all screen sizes!"
        ],
        technologies: [
            "React", "TypeScript", "Tailwind CSS", "Java", "Spring Boot", "Hibernate", "MySQL"
        ],
        demo: "https://youtu.be/mrS1Cxl2RDE"
    },

    {
        id: "assistantai",
        name: "AI Customer Assistant Bot",
        description: "AssistantAi is an AI-powered customer assistant chatbot built with Java and Spring Boot. Designed to provide intelligent and adaptive customer service.",
        github: "https://github.com/oebelus/AssistantAi",
        features: [
            "Natural Language Processing (NLP): Understands and responds to customer queries in natural language.",
            "Contextual Awareness.",
            "Strict Information Provision within limitations.",
            "Can be integrated with various platforms such as websites, mobile apps, and CRM systems.",
            "Customizable and Scalable."
        ],
        technologies: [
             "Java", "Spring Boot", "MySQL", "Tailwind CSS", "Vanilla TypeScript", "OpenAI GPT", "Groq API"
        ],
    },
]

// Experience details for the portfolio
export const experience = [
    {
        id: "exp1",
        role: "Software Engineer",
        company: "Tech Solutions Inc.",
        duration: "Jan 2019 - Present",
        responsibilities: [
            "Develop and maintain web applications using React and Node.js.",
            "Lead the integration of backend services with modern front-end frameworks.",
            "Collaborate with cross-functional teams to define, design, and ship new features.",
            "Implement performance and stability monitoring tools to enhance application efficiency."
        ]
    },
    {
        id: "exp2",
        role: "Junior Developer",
        company: "Innovative Startups LLC",
        duration: "Aug 2016 - Dec 2018",
        responsibilities: [
            "Assisted in the development of mobile applications using Flutter and Dart.",
            "Participated in daily scrum meetings to discuss project progress and roadblocks.",
            "Contributed to the design and implementation of API services.",
            "Performed unit and integration testing to ensure software quality."
        ]
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
    'Watching: [YouTube, Series(Crime/FBI movie type), Documentaries].', 
    'Reading.', 
    "Listening to Podcast (Diary of a CEO)", 
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