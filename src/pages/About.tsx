import { Helmet } from "react-helmet-async";
import { canonicalUrl } from "../utils/url";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import PageShell from "../components/PageShell";

export default function About() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Helmet>
        <link rel="canonical" href={canonicalUrl()} />
        <title>
          Kinlo Ephriam Tangiri | Full-Stack Developer (AI Focus) with
          Management Experience
        </title>
        <meta
          name="description"
          content="Kinlo Ephriam Tangiri, Bremen. BSc in Computer Science, Data Science minor, AI/ML specialization. Thesis on reducing hallucination in LLM applications."
        />
        <meta
          name="keywords"
          content="Kinlo Ephriam Tangiri, full-stack developer, AI-focused developer, management experience, computer science graduate, AI ML specialist, data science, educational technology, Constructor University, portfolio, LinkedIn"
        />
        <meta
          property="og:title"
          content="Kinlo Ephriam Tangiri | Full-Stack Developer (AI Focus) with Management Experience"
        />
        <meta
          property="og:description"
          content="BSc in Computer Science with a Data Science minor, specialized in AI/ML. Thesis on reducing hallucination in LLM applications, plus program and project management experience."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl()} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kinlo Ephriam Tangiri | Full-Stack Developer (AI Focus) with Management Experience"
        />
        <meta
          name="twitter:description"
          content="BSc in Computer Science with a Data Science minor, specialized in AI/ML. Thesis on reducing hallucination in LLM applications, plus program and project management experience."
        />
      </Helmet>
      <PageShell>
        <AboutMe />
        <ContactMe />
      </PageShell>
    </div>
  );
}
