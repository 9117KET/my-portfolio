// Re-export all data from separate files for backward compatibility
export {
  navLinks,
  cvLink,
  thesisLink,
  builds,
  hobbies,
  contacts,
  skills,
} from "../data/constants";
export { projects } from "../data/projects";
export { experience } from "../data/experience";
export { posts } from "../data/blog-posts";
export { certificates, awards, events } from "../data/misc";

// Legacy exports for backward compatibility - these will be removed in future versions
// Please update your imports to use the specific data files instead
