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
