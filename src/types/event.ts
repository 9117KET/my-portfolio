/**
 * Event Type Definition
 * 
 * This file defines the TypeScript types for technical events that the portfolio owner attends.
 * Events can be online or in-person technical conferences, workshops, webinars, or meetups
 * that discuss AI, new technologies, or tools relevant to software development.
 * 
 * Architecture Pattern: Type Definition
 * - This follows a type-first approach, defining data structures before implementation
 * - Enables type safety across the application when working with event data
 * - Similar pattern to the Post type, maintaining consistency in the codebase
 */

/**
 * EventType represents whether an event was attended online or in-person.
 * This distinction helps users understand the format and accessibility of the event.
 */
export type EventType = "Online" | "In-Person";

/**
 * Event interface models a technical event attended by the portfolio owner.
 * 
 * Key Design Decisions:
 * 1. id: Unique identifier for routing and data lookup (similar to blog posts)
 * 2. title: Event name or title
 * 3. date: When the event occurred (for chronological sorting and filtering)
 * 4. eventType: Distinguishes online vs in-person events
 * 5. organizer: Company or organization hosting the event (useful for filtering)
 * 6. technologies: Array of technologies/tools discussed (enables tag-based filtering)
 * 7. location: Optional for in-person events (geographic context)
 * 8. keyTakeaways: Bullet points of main learnings (quick reference for interviews)
 * 9. applications: How the knowledge can be applied in real companies/projects
 * 10. experience: Full narrative description of the event experience
 * 11. link: Optional URL to event website, recording, or resources
 * 
 * Real-world Application:
 * - Interview preparation: Quick reference for technologies and learnings
 * - Professional development tracking: Document continuous learning
 * - Networking: Remember key contacts and companies
 * - Knowledge management: Organize learnings from various sources
 */
export type Event = {
  id: string;
  title: string;
  date: string;
  eventType: EventType;
  organizer: string;
  technologies: string[];
  location?: string;
  keyTakeaways: string[];
  applications: string;
  experience: string;
  link?: string;
};
