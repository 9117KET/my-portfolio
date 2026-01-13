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
  // Example event structure - replace with your actual events
  // {
  //   id: "aws-summit-2024",
  //   title: "AWS Summit Berlin 2024",
  //   date: "June 15, 2024",
  //   eventType: "In-Person",
  //   organizer: "Amazon Web Services",
  //   technologies: ["AWS Bedrock", "Generative AI", "RAG", "Serverless"],
  //   location: "Berlin, Germany",
  //   keyTakeaways: [
  //     "AWS Bedrock provides managed access to multiple foundation models",
  //     "RAG architecture can significantly improve LLM accuracy for domain-specific queries",
  //     "Serverless architecture reduces operational overhead for AI applications",
  //   ],
  //   applications:
  //     "Can be applied to build enterprise document query systems, customer support chatbots, and knowledge management platforms. The RAG pattern is particularly useful for companies with large internal documentation.",
  //   experience:
  //     "Attended the AWS Summit in Berlin where I learned about the latest developments in generative AI on AWS. The session on building RAG applications with Bedrock was particularly insightful, showing how to combine vector databases with LLMs for accurate, context-aware responses. I had the opportunity to network with other developers working on similar projects.",
  //   link: "https://aws.amazon.com/events/summits/berlin/",
  // },
];
