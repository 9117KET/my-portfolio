import { Post } from "../types/post";

// Navigation links for the portfolio site
export const navLinks = [
  { id: "", name: "about_me" },
  { id: "projects", name: "projects" },
  { id: "experience", name: "experience" },
  { id: "misc", name: "misc" },
  { id: "blog", name: "blog" },
];

export const cvLink =
  "https://drive.google.com/file/d/150RhzoavHCM8bI4RA6PKe_Ku4NUQpEsd/view?usp=sharing";

// Project details for the portfolio
export const projects = [
  {
    id: "academy",
    name: "KET Academy",
    description:
      "KET Academy is an e-learning platform designed to provide academic resources to secondary and high school students, especially those affected by crises or natural disasters in Africa. The platform also empowers youths (ambassadors) with educational technology skills and provides tailored resources to support their learning journey. This is a project very close to my heart and one of my motivation for doing CS",
    github: "https://github.com/ket-academy/ketacademy",
    features: [
      "Tailored academic resources for students in crisis-affected regions.",
      "Enhances students' skills with educational technology.",
      "Designed to assist students affected by crises or natural disasters.",
      "Fully responsive and accessible across various devices and platforms.",
      "Since the launch of the first version, we have had over 700 users on the first version",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    demo: "https://ket.academy/",
  },
  {
    id: "ai-chatbot",
    name: "AI Chat Bot",
    description:
      "A full-stack chatbot application built with Next.js and OpenAI's GPT-3.5 API. The application features real-time message updates, secure API integration, and a responsive user interface designed for natural conversations.",
    github: "https://github.com/9117KET/ai-chatbot",
    features: [
      "Real-time Chat: Implements instant message updates and responses using React hooks",
      "Secure API Integration: Server-side implementation of OpenAI's GPT-3.5 API",
      "Dynamic UI: Material-UI based interface with custom styling and message bubbles",
      "State Management: Efficient handling of chat history and user interactions",
      "Responsive Design: Fully adaptable chat interface across all device sizes",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Material-UI",
      "OpenAI API",
      "React Hooks",
      "Tailwind CSS",
    ],
    demo: "https://github.com/9117KET/ai-chatbot",
  },
  {
    id: "aiflashcard",
    name: "AI Flashcard",
    description:
      "AI Flashcard is an intelligent learning tool that uses AI to generate personalized flashcards for studying. This platform allows users to input topics and receive flashcards, multiple-choice questions, and videos tailored to their learning preferences, helping them retain information more effectively.",
    github: "https://github.com/9117KET/AI-Flashcards",
    features: [
      "AI-Generated Flashcards: Automatically creates personalized flashcards based on user-inputted topics.",
      "Multiple Learning Formats: Offers multiple-choice questions and videos in addition to flashcards.",
      "Learning Progress Tracking: Keeps track of user progress and suggests areas for improvement.",
      "Customizable Flashcards: Allows users to edit and organize their flashcards for better retention.",
      "Responsive Design: Fully responsive and optimized for various devices and platforms.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Firebase",
      "OpenAI API",
    ],
    demo: "https://example.com/demo",
  },
  {
    id: "expenses",
    name: "Expenses Tracker",
    description:
      "Expense Tracker is a simple and efficient full stack web application that helps keep track of your spending. With a user-friendly interface, you can easily log your expenses, categorize them, and see a detailed history. The app provides insights into your financial habits and helps you manage your budget effectively.",
    github: "https://github.com/9117KET/Expense_Tracker",
    features: [
      "User Authentication: Securely log in and manage your personal expenses.",
      "Expenses Logging: Add new expenses with details such as date, category, description, and amount.",
      "Expenses Categories, History, and Summary: View expenses based on categories and check summaries for better budget management.",
      "Handy Search and Filter Options: Easily find specific expenses or categories with search and filter functionalities.",
      "Responsive Design: Fully adaptable to different screen sizes and devices.",
    ],
    technologies: [
      "HTML 5",
      "Tailwind",
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "Firebase",
    ],
    demo: "https://example.com/demo",
  },
  {
    id: "assistantai",
    name: "AI Customer Assistant Bot",
    description:
      "AssistantAI is an AI-powered customer assistant chatbot built with Java and Spring Boot. It is designed to provide intelligent and adaptive customer service, improving user experience and efficiency.",
    github: "https://github.com/9117KET/aicustomersupport",
    features: [
      "Natural Language Processing (NLP): Understands and responds to customer queries in natural language.",
      "Contextual Awareness: Maintains conversation context to provide relevant answers.",
      "Strict Information Provision: Provides responses within set guidelines to ensure accuracy and relevance.",
      "Platform Integration: Can be easily integrated with various platforms, such as websites, mobile apps, and CRM systems.",
      "Customizable and Scalable: Easily adaptable to specific business needs and scalable to support growing customer bases.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Tailwind CSS",
      "Vanilla TypeScript",
      "OpenAI GPT",
      "Groq API",
    ],
    demo: "https://example.com/demo",
  },
  {
    id: "portfolio",
    name: "My Portfolio Websites",
    description:
      "This project, which I assume you are currently on reading this information, was developed with TypeScript, Tailwind CSS, and React. It showcases my skills, projects, experiences, and accomplishments in a professional and interactive manner. The website is fully responsive and user-friendly, designed to provide an engaging experience for visitors.",
    github: "https://github.com/9117KET/my-portfolio.git",
    features: [
      "Project Showcase: Displays my portfolio projects with detailed descriptions, technologies used, and links to demos and repositories.",
      "Responsive Design: Fully optimized for various devices, including desktops, tablets, and smartphones.",
      "Dark and Light Modes: Offers a toggle feature to switch between dark and light themes.",
      "Dynamic Navigation: Smooth and intuitive navigation with categorized sections.",
      "Customizable Content: Designed to be easily updated with new projects, experiences, and achievements.",
    ],
    technologies: ["TypeScript", "React", "Tailwind CSS", "Vercel"],
    demo: "https://my-portfolio-xi-flame-14.vercel.app/",
  },
  {
    id: "iot-framework",
    name: "IoT Course Recommendation Framework",
    description:
      "A multipurpose recommendation framework designed to help users navigate and find relevant IoT courses from WaziUp's extensive catalog. The framework processes user preferences and learning goals to suggest personalized course paths, making it easier for learners to find the most suitable IoT courses for their needs.",
    github: "https://github.com/9117KET/IoTTest.git",
    features: [
      "Smart Course Recommendations: Analyzes user preferences and learning goals to suggest relevant IoT courses.",
      "Interactive Course Explorer: User-friendly interface for browsing and discovering IoT courses.",
      "Personalized Learning Paths: Creates customized learning journeys based on user skill levels and interests.",
      "Course Analytics: Provides insights into course popularity and user engagement.",
      "Serves over 1500+ users with recommendations from a catalog of 300+ IoT courses.",
    ],
    technologies: ["JavaScript", "HTML5", "CSS"],
    demo: "https://github.com/9117KET/IoTTest.git",
  },
  {
    id: "sustainable-shopping",
    name: "Sustainable Shopping Assistant",
    description:
      "A Flask-based web application designed to help users make environmentally conscious shopping decisions. The platform tracks product sustainability metrics and eco-ratings, providing users with detailed information about the environmental impact of their purchases.",
    github: "https://github.com/9117KET/db-project.git",
    features: [
      "Admin Authentication: Secure portal for managing product data and eco-ratings",
      "CRUD Operations: Complete management system for products, users, categories, and sustainability metrics",
      "Dynamic Search & Filtering: Real-time product filtering with complex database queries",
      "Responsive Design: Fully adaptable interface for all device sizes",
      "Sustainability Metrics: Comprehensive tracking and display of product eco-ratings and environmental impact",
    ],
    technologies: [
      "Python",
      "Flask",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
    ],
    demo: "https://github.com/9117KET/db-project.git",
  },
  {
    id: "bmw-hackathon",
    name: "BMW Causal ML Hackathon Project",
    description:
      "A machine learning project developed during a 3-day BMW Group hackathon, focusing on causal machine learning to predict car part quality. The project analyzed production data from over 370 sensors to identify factors affecting part quality and provide actionable recommendations for improving production outcomes.",
    github:
      "https://www.linkedin.com/posts/kinlo-ephriam-tangiri-a70113218_causal-machine-learning-activity-7269276878039834626-CKdF/?utm_source=share&utm_medium=member_desktop",
    features: [
      "Causal ML Implementation: Built models using DoWhy and CausalLearn frameworks for quality prediction",
      "Data Processing Pipeline: Developed robust data cleaning and preprocessing workflows for 370+ sensor inputs",
      "Production Optimization: Generated actionable insights to improve OK outcomes and reduce NOK rates",
      "Interactive Dashboard: Created visualization tools for real-time monitoring and analysis",
      "Team Collaboration: Worked in an agile team environment to deliver results within 48+ hours",
    ],
    technologies: [
      "Python",
      "DoWhy",
      "CausalLearn",
      "Pandas",
      "Scikit-learn",
      "Plotly",
      "Streamlit",
    ],
    demo: "https://www.linkedin.com/posts/kinlo-ephriam-tangiri-a70113218_causal-machine-learning-activity-7269276878039834626-CKdF/?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: "brain-tumor",
    name: "Brain Tumor Classification",
    description:
      "A deep learning project that utilizes neural networks to classify MRI scans into three distinct types of brain diseases. The system processes brain MRI scans and generates comprehensive reports for neurosurgeons, providing quick and accurate disease classification results.",
    github: "https://github.com/9117KET/brain-tumor-classification",
    features: [
      "Neural Network Model: Custom-built neural network for accurate classification of brain MRI scans",
      "High-Speed Processing: Generates comprehensive reports in under 200ms",
      "Multi-Disease Classification: Accurately categorizes scans into 3 distinct brain disease types",
      "Large Dataset Handling: Successfully trained and tested on 1000+ MRI scans",
      "Medical Report Generation: Creates detailed multimodal MRI reports for neurosurgeons",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "NumPy",
      "Pandas",
      "Scikit-learn",
    ],
    demo: "https://www.youtube.com/watch?v=lmQEeJGh134",
  },
  {
    id: "bank-churn",
    name: "Bank Customer Churn Prediction",
    description:
      "An AI-powered system that analyzes banking customer data to predict potential churners. The project leverages multiple LLM models including Llama 3.1b and Groq to process a dataset of over 30,000 customers, providing automated personalized engagement solutions to improve customer retention.",
    github: "https://github.com/9117KET/Customer-Churn-Prediction",
    features: [
      "Large-Scale Data Analysis: Processed and analyzed 30k+ customer records using advanced LLM models",
      "Multi-Model Comparison: Evaluated and optimized predictions across five different LLM models",
      "Feature Engineering: Implemented sophisticated data normalization and feature extraction techniques",
      "Hyperparameter Optimization: Fine-tuned model parameters to maximize prediction accuracy",
      "Automated Communication: Developed system for sending personalized retention emails based on predictions",
    ],
    technologies: [
      "Python",
      "Llama 3.1b",
      "Groq",
      "Vercel",
      "Pandas",
      "Scikit-learn",
      "TensorFlow",
    ],
    demo: "https://github.com/9117KET/Customer-Churn-Prediction",
  },
  {
    id: "image-gen",
    name: "Real-time Image Generation with Natural Language",
    description:
      "A full-stack AI application that generates images based on natural language descriptions in real-time. Built with Next.js and TypeScript, the application features secure image storage using Vercel Blob storage and optimized image handling through Next.js image components.",
    github: "https://github.com/9117KET/ai-image-generator",
    features: [
      "Real-time Generation: Creates images instantly based on text descriptions using AI",
      "Secure Storage: Implements Vercel Blob storage for reliable image management",
      "Optimized Performance: Utilizes Next.js image component for efficient image loading and display",
      "Error Handling: Robust system with user-friendly feedback and loading states",
      "Responsive Design: Fully adaptable interface with Tailwind CSS styling",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "AI API",
      "Blob Storage",
    ],
    demo: "https://github.com/9117KET/ai-image-generator",
  },
  {
    id: "rate-professor",
    name: "Rate My Professor RAG Application",
    description:
      "A full-stack professor review system leveraging Retrieval-Augmented Generation (RAG) to provide intelligent insights from student reviews. Built with Next.js and integrated with OpenAI's GPT-4 and Pinecone vector database, the application offers semantic search capabilities and real-time chat functionality.",
    github: "https://github.com/9117KET/rag-rate-my-professor",
    features: [
      "RAG Implementation: Utilizes OpenAI and Pinecone for intelligent review analysis and insights",
      "Semantic Search: Advanced search functionality across professor reviews using vector database",
      "Real-time Chat: Dynamic chat interface with streaming responses from GPT-4",
      "Secure Error Handling: Robust error management system for API integrations",
      "Responsive UI: Material-UI based interface with dynamic content streaming",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "OpenAI GPT-4",
      "Pinecone",
      "Material-UI",
      "Prisma",
      "PostgreSQL",
    ],
    demo: "https://github.com/9117KET/rag-rate-my-professor",
  },
  
];

// Experience details for the portfolio
export const experience = [
  {
    id: "exp1",
    role: "Software Engineer Intern",
    company: "Waziup e.V.",
    duration: "May 2024 - August 2024",
    responsibilities: [
      "Collaborated with the RnD hybrid workgroup to build a multipurpose recommendation framework.",
      "Contributed to both front-end and back-end development for IoT applications.",
      "Worked with an international team to develop DIY IoT solutions for African entrepreneurs.",
      "Assisted in creating innovative, affordable, and adaptable IoT solutions for emerging markets.",
    ],
    companyDescription:
      "Waziup e.V. is an IoT-focused organization promoting cutting-edge technologies and capacity building in emerging countries. They develop affordable, adaptable, and end-to-end IoT solutions, focusing on empowering 'glocal' (global and local) IoT entrepreneurs.",
  },
  {
    id: "exp4",
    role: "Founder and Developer",
    company: "KET Academy",
    location: "Yaoundé, Cameroon",
    duration: "2020 - Present",
    responsibilities: [
      "Established and led a team of more than 25 youths to build an e-learning platform with resources in video and PDF formats.",
      "Developed two versions of the platform: one built using HTML, CSS, and JavaScript, and the most recent using TypeScript, React, Firebase, with authentication, personalized dashboards, and AI features.",
      "Successfully reached over 1500+ students directly and over 15,000+ indirectly via various social media channels.",
    ],
    companyDescription:
      "KET Academy is an e-learning platform that provides academic resources to secondary and high school students, with a focus on empowering youths in crisis-affected regions of Africa.",
  },
  {
    id: "exp2",
    role: "Student Assistant Project Management",
    company: "YouthTeamUp (YTU)",
    duration: "Jan 2023 - Present",
    responsibilities: [
      "Planned and organized the Shallow-Virtual-Exchange (SVE) and Deep-Virtual-Exchange (DVE) programs for youths across African and European Universities.",
      "Coordinated the implementation of the Global Impact Project (GIP) for Constructor University students working on their Community Impact Projects.",
      "Assisted in designing marketing materials and updating the YTU website, which has engaged over 2500+ youths from both Africa and Europe.",
    ],
    companyDescription:
      "YouthTeamUp empowers African and European youths to connect and collaborate on creating Global Impact Projects through various virtual exchange programs.",
  },
  {
    id: "exp3",
    role: "Community Engagement and Marketing Specialist",
    company: "Synthesis-Constructor Entrepreneurship & Innovation Centre",
    location: "Bremen, Germany",
    duration: "Nov 2023 - Apr 2024",
    responsibilities: [
      "Promoted Synthesis and Entrepreneurship initiatives at Constructor University.",
      "Contributed to empowering student entrepreneurs to become future-proof founders.",
      "Created posts, flyers, organized events, and updated the Synthesis website with the latest information.",
    ],
    companyDescription:
      "The Synthesis-Constructor Entrepreneurship & Innovation Centre supports students by fostering entrepreneurial skills and providing resources for aspiring student founders at Constructor University.",
  },

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
      "Brainstorm questions and problem-solving approaches with students to enhance their critical thinking skills.",
    ],
    companyDescription:
      "Constructor University is a leading private university in Germany, offering a variety of academic programs with a focus on research and global education.",
  },
];

// Certificates
export const certificates = [
  {
    id: "cert-001",
    title: "Introduction to Generative AI",
    description: "Introductory online course offered by Google",
    date: "August 2023",
  },
  {
    id: "cert-002",
    title: "Introduction to Large Language Model",
    description: "Introductory online course offered by Google",
    date: "September 2023",
  },
  {
    id: "cert-003",
    title: "Introduction to Design Thinking",
    description:
      "Dunin-Deshpande Queen’s Innovation Centre Canada through the Jim Leech Mastercard Foundation Fellowship at Queen’s University",
    date: "March 2023",
  },
  {
    id: "cert-004",
    title: "Ignite Entrepreneurship",
    description:
      "Dunin-Deshpande Queen’s Innovation Centre Canada through the Jim Leech Mastercard Foundation Fellowship at Queen’s University",
    date: "March 2023",
  },
  {
    id: "cert-005",
    title: "Explore Entrepreneurship",
    description:
      "Dunin-Deshpande Queen’s Innovation Centre Canada through the Jim Leech Mastercard Foundation Fellowship at Queen’s University",
    date: "March 2023",
  },
  {
    id: "cert-006",
    title: "Launch Entrepreneurship",
    description:
      "Dunin-Deshpande Queen’s Innovation Centre Canada through the Jim Leech Mastercard Foundation Fellowship at Queen’s University",
    date: "September 2023",
  },
  {
    id: "cert-007",
    title: "Jim Leech Mastercard Foundation Fellowship on Entrepreneurship",
    description:
      "Dunin-Deshpande Queen’s Innovation Centre Canada through the Jim Leech Mastercard Foundation Fellowship at Queen’s University",
    date: "September 2023",
  },
  {
    id: "cert-008",
    title: "Digital Marketing for Entrepreneurs by YALI",
    description:
      "The Young African Leadership Initiative (YALI) online course on Digital Marketing",
    date: "October 2022",
  },
  // {
  //     id: 'cert-009',
  //     title: 'The Resilient Entrepreneur by YALI',
  //     description: 'The Young African Leadership Initiative (YALI) online course on The Resilient Entrepreneur: Planning, Adapting and Persevering.',
  //     date: 'December 2022'
  // },
  // {
  //     id: 'cert-010',
  //     title: 'Strategies for Personal Growth and Development by YALI',
  //     description: 'The Young African Leadership Initiative (YALI) online course on Strategies for Personal Growth and Development',
  //     date: 'May 2022'
  // },
  // {
  //     id: 'cert-011',
  //     title: 'Understanding the rights of Women and Girls by YALI',
  //     description: 'The Young African Leadership Initiative (YALI) online course on Understanding the right of women and girls',
  //     date: 'March 2022'
  // },
  // {
  //     id: 'cert-012',
  //     title: 'Community Journalism by YALI',
  //     description: 'The Young African Leadership Initiative (YALI) online course Community Journalism: Basic Principles for effective storytelling',
  //     date: 'December 2021'
  // },
  // {
  //     id: 'cert-013',
  //     title: 'Fundamentals of Personal Money Management by YALI',
  //     description: 'The Young African Leadership Initiative (YALI) online course on Fundamentals of personal money management',
  //     date: 'December 2021'
  // },
  // {
  //     id: 'cert-014',
  //     title: 'Developing Mentoring and Supporting Youth Leadership by YALI',
  //     description: 'The Young African Leadership Initiative (YALI) online course on Developing mentoring and supporting youth leadership',
  //     date: 'November 2021'
  //}
];

// Awards
export const awards = [
  {
    title: "Diana Award Recipient Roll of Honor",
    description:
      "Selected as a top 200 finalist from a pool of 1700 nominations allover the world for having a creating a positive contribution to society by building a platform that provide academic resources to students in Africa especially those affected by crisis.",
    date: "2024",
    category: "Global",
  },
  {
    title: "Global Student Top 50 Finalist",
    description:
      "Selected as a top 50 finalist from a pool of 3851 students making real impact in education and society.",
    date: "2023",
    category: "Global",
  },
  {
    title: "Ambassador Award for Excellent Encouragement",
    description:
      "Awarded for ranking 2nd globally as International Youth Maths Competition Ambassador for Cameroon.",
    date: "2023",
    category: "Mathematics",
  },
];

// Events
export const events = [
  {
    title: "Headstarter - Software Engineering Fellow",
    description:
      "Built and deployed 4 AI projects in 5 weeks using React JS, Firebase, and more.",
    date: "2023",
    category: "Engineering",
  },
  {
    title: "McKinsey Forward Program",
    description:
      "A three-month program focused on skills for future-proof work.",
    date: "2023",
    category: "Leadership",
  },
  {
    title: "Digital Literacy Forum by Meta",
    description: "Discussed ways of promoting and ensuring online safety.",
    date: "June 2022",
    category: "Technology",
  },
];

// Contact information
export const contacts = [
  {
    id: "github",
    name: "GitHub",
    link: "https://github.com/9117KET",
    target: "_blank",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kinlo-ephriam-tangiri-a70113218/",
    target: "_blank",
  },
  { id: "x", name: "X", link: "https://x.com/KinloEphriam", target: "_blank" },
  {
    id: "leetcode",
    name: "LeetCode",
    link: "https://leetcode.com/u/kinlotangiri911/",
    target: "_blank",
  },
  {
    id: "email",
    name: "Email",
    link: "mailto:kinlotangiri911@gmail.com",
    target: "_blank",
  },
];

// Descriptions of types of builds the portfolio owner can perform
export const builds = [
  "KET Academy (An e-learning platform for secondary and high school students in Africa)",
  "AI Chatbot",
  "AI Flashcards",
  "Expense Tracker",
  "AI Customer Support",
  "My portfolio websites",
  "Rate my Professor RAG App",
  "Inventory management system",
  "IoT recommendation framework",
  "Sustainable Shopping Assistant",
  "BMW Group Hackathon on Causal ML",
  "Brain Tumor Classification with Neural Network",
  "AI-powered Churn Prediction for a bank customer",
  "Pentagon-A real time image generation web app with natural language",
];

// Hobbies
export const hobbies = [
  "Listening to podcasts (Diary of a CEO, Huberman Lab, Jordan Peterson)",
  "Watching documentaries, tutorials, and CIA/FBI/Crime series",
  //"Reading tech articles and self-development books",
  "Studying chess positions",
  "Playing Table Tennis",
  "Learning Piano",
];

// Blog posts
export const posts: Post[] = [
  {
    id: "ai_africa",
    title: "AI, IoT, Big Data & Africa",
    date: "June 10, 2024",
    category: "AI-Post",
    description:
      "The Potential of IoT, AI, and Big Data for Rwanda's Future: A Case Study of Kigali Innovation City (KIC).",
    content:
      "The fields of Artificial Intelligence (AI), Big Data, and the Internet of Things (IoT) have been transforming industries globally, and Africa is no different. This post explores the historical timeline of AI, IoT, and Big Data over the last 6 decades.",
    type: "Blog",
  },
  {
    id: "spring_beans",
    title: "Understanding IoC, DI, and Beans in Spring Framework",
    date: "April 15, 2024",
    category: "Article",
    description:
      "A deep dive into Inversion of Control, Dependency Injection, and Beans in the Spring Framework, with practical examples and best practices.",
    content: "Beans",
    type: "Blog",
  },
];
