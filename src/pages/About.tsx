import { Helmet } from "react-helmet-async";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import PageShell from "../components/PageShell";

export default function About() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Helmet>
        <title>
          Kinlo Ephriam Tangiri | Full-Stack Developer (AI Focus) with Management Experience
        </title>
        <meta
          name="description"
          content="Hi! I am Kinlo, a Computer Science graduate with a minor in Data Science and specialization in Artificial Intelligence and Machine Learning at Constructor University Germany. I love learning, teaching and building projects. I actively share my knowledge and insights mostly through writing on various professional platforms, especially on LinkedIn."
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
          content="Hi! I am Kinlo, a Computer Science graduate with a minor in Data Science and specialization in Artificial Intelligence and Machine Learning at Constructor University Germany. I love learning, teaching and building projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kinlo Ephriam Tangiri | Full-Stack Developer (AI Focus) with Management Experience"
        />
        <meta
          name="twitter:description"
          content="Hi! I am Kinlo, a full-stack developer with an AI/ML focus, a Computer Science degree and a Data Science minor, plus hands-on experience in program and project management. I love learning, teaching and building projects."
        />
      </Helmet>
      <PageShell current="about">
        <AboutMe />
        <ContactMe />
      </PageShell>
    </div>
  );
}
