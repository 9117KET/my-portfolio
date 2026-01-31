// Import tech events and transform them to match Misc page format
import { events as techEvents } from "./events";
import { Event } from "../types/event";

// Certificates
export const certificates = [
  {
    id: "cert-001",
    title: "Introduction to Generative AI",
    description: "Introductory online course offered by Google",
    date: "August 2023",
    link: "https://www.cloudskillsboost.google/public_profiles/12ec80bf-2095-44f9-a2a2-942f98ce5627/badges/4929157?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    id: "cert-002",
    title: "Introduction to Large Language Model",
    description: "Introductory online course offered by Google",
    date: "September 2023",
    link: "https://www.cloudskillsboost.google/public_profiles/12ec80bf-2095-44f9-a2a2-942f98ce5627/badges/5257460?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    id: "cert-003",
    title: "Introduction to Design Thinking",
    description:
      "Dunin-Deshpande Queen's Innovation Centre Canada through the Jim Leech Mastercard Foundation Fellowship at Queen's University",
    date: "March 2023",
    link: "https://credentials.innovationcentre.queensu.ca/8d1f789a-62db-4c66-8fa1-bb0b7f71befd",
  },
  {
    id: "cert-004",
    title: "Ignite Entrepreneurship",
    description:
      "Dunin-Deshpande Queen's Innovation Centre Canada through the Jim Leech Mastercard Foundation Fellowship at Queen's University",
    date: "March 2023",
    link: "https://credentials.innovationcentre.queensu.ca/6d884a37-934e-4f9a-91f1-1faf93eff9d4",
  },
  {
    id: "cert-005",
    title: "Explore Entrepreneurship",
    description:
      "Dunin-Deshpande Queen's Innovation Centre Canada through the Jim Leech Mastercard Foundation Fellowship at Queen's University",
    date: "March 2023",
    link: "https://credentials.innovationcentre.queensu.ca/821a092f-7690-4c78-81d6-c44cd5ffadd4",
  },
  {
    id: "cert-006",
    title: "Launch Entrepreneurship",
    description:
      "Dunin-Deshpande Queen's Innovation Centre Canada through the Jim Leech Mastercard Foundation Fellowship at Queen's University",
    date: "September 2023",
    link: "https://credentials.innovationcentre.queensu.ca/989b437d-3a1c-4796-96b6-0648749e7d1f",
  },
  {
    id: "cert-007",
    title: "Jim Leech Mastercard Foundation Fellowship on Entrepreneurship",
    description:
      "Dunin-Deshpande Queen's Innovation Centre Canada through the Jim Leech Mastercard Foundation Fellowship at Queen's University",
    date: "September 2023",
    link: "https://credentials.innovationcentre.queensu.ca/e1b27888-afac-423a-b18a-a3278ec4bc51",
  },
  {
    id: "cert-008",
    title: "AWS AI/ML Nano Degree",
    description: "Amazon Web Services nano degree in AI and Machine Learning",
    date: "2025",
    link: "https://www.udacity.com/certificate/e/ac7c6aec-8152-11f0-b847-63c4749bf0b9",
  },
];

// Awards (resume-aligned: Additional Qualifications)
export const awards = [
  {
    title: "Diana Award Recipient",
    description:
      "Selected from 1700 nominees for building academic e-platforms for Africa.",
    date: "2024",
    category: "Global",
    link: "https://diana-award.org.uk/our-programmes-and-initiatives/award-and-development/roll-of-honour/roll-of-honour-2024",
  },
  {
    title: "Top 50 Global Student Prize",
    description:
      "Selected as a top 50 finalist from 3851 applicants across 122 countries.",
    date: "2023",
    category: "Global",
    link: "https://globalteacherprize.org/news/global-student-prize-finalists/2023-finalists-global-student-prize/1012/1012-Kinlo-Ephriam-Tangiri",
  },
  {
    title: "Ambassador Award for Excellent Encouragement",
    description:
      "Awarded for ranking 2nd globally as International Youth Maths Competition Ambassador for Cameroon.",
    date: "2023",
    category: "Mathematics",
    link: "https://iymc.info/c/AmbassadorCertificate-AC-2024-KINTANGIRI-d1dc194a93b9e53fd15d2a3c47748505.pdf",
  },
];

// Transform tech events to the format expected by Misc page
// This allows tech events to be displayed in the Misc page with full details available
const transformTechEvent = (event: Event) => {
  return {
    id: event.id,
    title: event.title,
    description: `${event.eventType} event by ${event.organizer}${event.location ? ` in ${event.location}` : ""}. Technologies: ${event.technologies.join(", ")}`,
    date: event.date,
    category: event.eventType,
    // Store full event data for modal display
    fullEventData: event,
  };
};

// Events - combines old format events with new tech events
// Tech events are transformed to show in the list, but full details are available in fullEventData
export const events = [
  ...techEvents.map(transformTechEvent),
  // Keep old format events for backward compatibility
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
      "A three-month program focused on skills for future-proof work (Additional Qualification per resume).",
    date: "2023",
    category: "Leadership",
    link: "https://www.credly.com/badges/7ab48715-90f5-4221-a61b-81601bf934db/linked_in_profile",
  },
  {
    title: "Digital Literacy Forum by Meta",
    description: "Discussed ways of promoting and ensuring online safety.",
    date: "June 2022",
    category: "Technology",
  },
];
