/**
 * Events Data File
 *
 * This file contains all technical events attended by the portfolio owner.
 * Events include conferences, workshops, webinars, and meetups that discuss
 * AI, new technologies, or tools relevant to software development.
 *
 * File Creation Purpose:
 * - Centralized data management: All events in one place for easy maintenance
 * - Separation of concerns: Data separate from UI components
 * - Type safety: Uses the Event type for consistency
 * - Easy updates: Add new events by simply adding objects to the array
 *
 * Architecture Pattern: Data Layer
 * - Follows the same pattern as blog-posts.ts and projects.ts
 * - Enables easy filtering, sorting, and searching
 * - Can be extended to fetch from an API in the future
 *
 * Usage:
 * - Imported by Events page for display
 * - Used for filtering by technology, organizer, or event type
 * - Referenced in interviews to discuss continuous learning
 */

import { Event } from "../types/event";

/**
 * events array contains all technical events attended.
 *
 * Data Structure:
 * - Sorted by date (newest first) for better UX
 * - Each event includes comprehensive information for interview prep
 * - Technologies array enables tag-based filtering
 *
 * Problem-Solving Approach:
 * - Structured data makes it easy to filter and search
 * - Key takeaways provide quick reference points
 * - Applications section connects learning to practical use
 */
export const events: Event[] = [
  {
    id: "bmw-causal-ml-hackathon",
    title:
      "BMW Group Hackathon: Causal Machine Learning & Prescriptive Analytics",
    date: "2025",
    eventType: "In-Person",
    organizer: "BMW Group",
    location: "Constructor University",
    technologies: [
      "Causal Machine Learning",
      "DoWhy",
      "CausalLearn",
      "Prescriptive Analytics",
      "Predictive Modeling",
      "Data Cleaning",
      "Feature Engineering",
      "Model Training",
      "Data Visualization",
      "Dashboard Development",
      "Sensor Data Analysis",
      "Manufacturing Analytics",
      "Python",
      "Machine Learning",
      "Statistical Analysis",
      "Causal Inference",
      "DAG (Directed Acyclic Graphs)",
      "Counterfactual Analysis",
    ],
    keyTakeaways: [
      "Causal Machine Learning goes beyond correlation to identify cause-and-effect relationships, enabling actionable insights in manufacturing processes",
      "DoWhy is a Python library that provides a unified interface for causal inference, implementing the four-step process: model, identify, estimate, and refute causal effects",
      "CausalLearn is an open-source library that offers advanced causal discovery algorithms, including constraint-based, score-based, and functional causal model methods",
      "Prescriptive Analytics extends beyond prediction to recommend specific actions that optimize outcomes, answering 'what should we do?' rather than just 'what will happen?'",
      "Working with real production data (44,818 training points, 376 test points) from BMW's Dingolfing facility provided authentic experience with industrial-scale datasets",
      "Sensor data from 370+ sensors requires sophisticated feature engineering and dimensionality reduction techniques to extract meaningful patterns",
      "Causal models can identify which sensor readings or process parameters actually cause OK/NOK outcomes, not just correlate with them",
      "The challenge required balancing model accuracy with interpretability, as prescriptive recommendations need to be explainable to manufacturing engineers",
      "Dashboard visualization is crucial for translating complex ML outputs into actionable insights for non-technical stakeholders",
      "Team collaboration in a time-constrained environment (3 days) required effective task distribution, parallel workstreams, and continuous integration of components",
      "Causal inference helps answer counterfactual questions: 'What would happen if we changed this parameter?' enabling true prescriptive recommendations",
      "The hackathon emphasized the importance of data cleaning and preprocessing, as real-world manufacturing data contains missing values, outliers, and inconsistencies",
    ],
    applications:
      "Causal Machine Learning and Prescriptive Analytics have transformative applications across manufacturing and industrial operations. In automotive production, these techniques can identify root causes of quality issues, predict equipment failures before they occur, and recommend optimal process parameter adjustments to maximize yield rates. The approach enables manufacturers to move from reactive problem-solving to proactive optimization, reducing waste, improving quality, and increasing production efficiency. Beyond manufacturing, causal ML applies to healthcare (identifying treatment effectiveness), finance (understanding market drivers), and supply chain management (optimizing inventory levels). The key advantage is moving beyond 'what happened' to 'why it happened' and 'what should we do about it.' Prescriptive analytics transforms data into actionable recommendations, enabling decision-makers to optimize outcomes based on causal understanding rather than mere correlations. This is particularly valuable in complex systems with many interacting variables, where traditional machine learning might identify spurious correlations that don't hold under intervention.",
    experience:
      "This was my very first hackathon experience, and it was an incredible introduction to competitive data science and real-world industrial applications. BMW Group hosted an exclusive three-day hackathon for Constructor University students, focusing on Causal Machine Learning - a field that goes beyond traditional predictive modeling to understand cause-and-effect relationships.\n\n" +
      "The challenge was centered around Causal Machine Learning and Prescriptive Analytics, working with a real BMW dataset collected at their Dingolfing production center. We received 44,818 training data points and 376 testing data points, representing sensor readings from over 370 sensors monitoring car part production processes. Our task was to build a Causal ML model using either DoWhy or CausalLearn to predict whether a car part would be OK (acceptable) or NOK (Not OK) after processing.\n\n" +
      "Causal Machine Learning fundamentally differs from traditional ML by focusing on causal relationships rather than correlations. While standard ML might identify that 'high temperature correlates with NOK,' causal ML determines whether 'high temperature causes NOK' - a critical distinction for prescriptive recommendations. We used DoWhy, a Python library that implements a four-step causal inference framework: (1) Model - create a causal graph representing relationships, (2) Identify - determine if the causal effect can be estimated from data, (3) Estimate - compute the causal effect using methods like propensity score matching or instrumental variables, and (4) Refute - test the robustness of our estimates.\n\n" +
      "The data cleaning process was extensive, as manufacturing sensor data contains missing values, outliers, and inconsistencies. We implemented techniques like median imputation for missing values, outlier detection using IQR (Interquartile Range) methods, and feature engineering to create meaningful aggregations from the 370+ sensor readings. Feature selection was crucial - we needed to identify which sensors actually influence part quality, not just correlate with it.\n\n" +
      "Building the causal model required constructing a Directed Acyclic Graph (DAG) representing our understanding of the manufacturing process. This involved domain knowledge about which sensors might causally influence others and the final OK/NOK outcome. DoWhy's refutation methods helped us validate our causal assumptions, testing whether our estimates were robust to different assumptions.\n\n" +
      "The prescriptive analytics component was particularly challenging - we needed to provide specific recommendations to increase OK outcomes or reduce NOK probabilities. This required counterfactual analysis: 'If we adjust sensor X from value A to value B, what would be the expected change in OK probability?' We developed a recommendation engine that suggested optimal parameter adjustments based on causal effect estimates.\n\n" +
      "Creating the dashboard was essential for presenting our solution. We built visualizations showing: (1) Causal graph structure, (2) Feature importance based on causal effects (not correlations), (3) Predicted probabilities for test cases, (4) Prescriptive recommendations with expected impact, and (5) Model performance metrics. The dashboard needed to be interpretable by manufacturing engineers, not just data scientists.\n\n" +
      "Working as a team with Mohamed Goda Ebrahim, Nuraly Astanakulov, and Fortune Atiba was both challenging and rewarding. We divided responsibilities: data cleaning and preprocessing, causal model development, prescriptive analytics implementation, and dashboard creation. The three-day timeline was intense - we brainstormed approaches even during non-hackathon hours, iterating on our solution based on preliminary results.\n\n" +
      "The experience taught me the importance of causal thinking in machine learning. Traditional ML models can achieve high accuracy but may fail when deployed if they rely on spurious correlations. Causal ML provides a framework for building more robust, interpretable models that can guide real-world interventions. The hackathon also highlighted the value of clear communication - translating complex causal inference results into actionable recommendations for domain experts.\n\n" +
      "This hackathon was an intense but valuable learning experience that introduced me to advanced ML concepts, real-world industrial data challenges, and the collaborative dynamics of competitive data science. The combination of theoretical causal inference methods with practical manufacturing problems created a perfect learning environment that I'll carry forward into future projects.",
    link: "https://www.bmwgroup.com/",
  },
  {
    id: "neo4j-knowledge-graphs-ai-webinar",
    title: "Building Trustworthy AI with Knowledge Graphs and Neo4j",
    date: "January 13, 2026",
    eventType: "Online",
    organizer: "Neo4j",
    technologies: [
      "Neo4j",
      "Knowledge Graphs",
      "Graph Databases",
      "Property Graph",
      "Cypher",
      "RAG",
      "GraphRAG",
      "LLMs",
      "Context Engineering",
      "MCP Server",
      "Neo4j Aura Agent",
      "Enterprise AI",
      "Vector Embeddings",
      "Pattern Matching",
    ],
    keyTakeaways: [
      "Only 5% of enterprise AI projects reach production, with 95% failing due to brittle workflows, lack of context, and misalignment with operations",
      "Knowledge graphs improve LLM accuracy by 54% compared to traditional SQL-based approaches, providing minimal viable context for AI systems",
      "Context engineering is the evolution beyond prompt engineering, focusing on providing the right amount of structured data to LLMs through retrieval, memory, and tools",
      "Property graph data models consist of nodes (entities), relationships (actions/interactions), and properties (attributes), enabling native storage of interconnected data",
      "Graph pattern matching with Cypher allows AI agents to efficiently query complex relationships and answer non-trivial questions that would be difficult with traditional databases",
      "Knowledge graphs provide three key benefits: boosted accuracy through better context, improved explainability via transparent retrieval logic, and future-proofing through flexible data models",
      "Neo4j Aura Agent enables building, testing, and deploying intelligent agents in minutes with a low-code, no-code platform that works out of the box",
      "MCP (Model Context Protocol) server allows any LLM to connect to Neo4j, enabling schema reading and Cypher query execution for graph-powered AI applications",
      "Graph databases eliminate the need for refactoring when adding new data relationships, as everything is pre-joined and relationships can be added dynamically",
      "Real-world case studies show significant business outcomes: 10x faster time to insight, 30x customer acquisition boost, 80% reduction in manual verification, and elimination of 4000+ hours of manual data curation",
    ],
    applications:
      "Knowledge graphs can transform enterprise AI applications across multiple industries. For HR departments, they enable intelligent talent search, skills analysis, team composition recommendations, and employee similarity matching. In customer service, they power intent analysis and personalized messaging by revealing hidden connections between customer behaviors and interests. Financial services can use them for fraud detection, risk assessment, and faster loan approvals by connecting disparate data sources. Healthcare and biomedical research benefit from integrating curated data sources, ensuring traceability and reducing hallucinations in LLM-based discovery tools. Media and gaming companies can accelerate reporting and analytics by creating semantic layers over hundreds of database tables. The key is implementing a knowledge graph layer on top of existing enterprise data platforms rather than full replatforming, making it accessible to AI agents through tools like MCP servers or Neo4j Aura Agent. This approach enables businesses to build trustworthy, explainable AI systems that stakeholders can trust and that scale with evolving data requirements.",
    experience:
      "I attended an insightful webinar presented by Zach Blumenfeld, AI/ML Product Specialist at Neo4j, which explored how knowledge graphs solve critical challenges in enterprise AI adoption. The session began by addressing the stark reality that 95% of enterprise AI projects fail to reach production, primarily due to data management issues. The presentation introduced context engineering as a crucial concept - moving beyond simple prompt engineering to strategically provide minimal viable context to LLMs through structured data retrieval, memory systems, and tool integration.\n\n" +
      "The core of the webinar focused on how knowledge graphs, specifically Neo4j's property graph model, organize data as interconnected entities (nodes), relationships, and properties. This native graph structure makes data 'AI-ready' by capturing rich context and enabling efficient pattern matching queries. A compelling live demonstration showed an HR agent example, comparing traditional RAG workflows (which could only retrieve 5 documents) versus graph-powered approaches (which accurately retrieved all 28 Python developers) using Cypher pattern matching.\n\n" +
      "The demo illustrated advanced capabilities like qualified path patterns for finding employee similarities and multi-hop relationship queries that would be extremely complex in SQL. The presentation also covered Neo4j's latest products: the MCP server for connecting any LLM to Neo4j, and Neo4j Aura Agent - a low-code platform for building and deploying intelligent agents in minutes.\n\n" +
      "Real-world case studies were particularly impressive: a gaming company achieved 10x faster reporting, a marketing company saw 30x customer acquisition growth, a lending company reduced loan approval from 48 hours to 2 hours, and a biomedical company eliminated 4000+ hours of manual curation. The Q&A session addressed entity extraction from PDFs and HRIS systems, MCP server architecture, and compatibility with local LLM models.\n\n" +
      "This webinar provided a comprehensive understanding of how knowledge graphs address the three pillars of trustworthy AI: accuracy, explainability, and future-proofing. The practical examples and technical depth made it clear how businesses can integrate Neo4j into their AI infrastructure to overcome the production gap and build reliable, scalable AI systems.",
    link: "https://neo4j.com/",
  },
];
