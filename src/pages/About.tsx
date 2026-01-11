import { Helmet } from "react-helmet-async";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Navbar from "../components/Navbar";
import styles from "../utils/style";

export default function About() {
  return (
    <div className="dark:bg-[#2D2E32] min-h-screen overflow-hidden">
      {" "}
      <Helmet>
        <title>
          Kinlo Ephriam Tangiri | Software Engineer & an AI Enthusiast
        </title>
        <meta
          name="description"
          content="Hi! I am Kinlo, a Computer Science graduate with a minor in Data Science and specialization in Artificial Intelligence and Machine Learning at Constructor University Germany. I love learning, teaching and building projects. I actively share my knowledge and insights mostly through writing on various professional platforms, especially on LinkedIn."
        />
        <meta
          name="keywords"
          content="Kinlo Ephriam Tangiri, software engineer, computer science graduate, AI ML specialist, data science, educational technology, Constructor University, AI enthusiast, portfolio, LinkedIn"
        />
        <meta
          property="og:title"
          content="Kinlo Ephriam Tangiri | Software Engineer & an AI Enthusiast"
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
          content="Kinlo Ephriam Tangiri | Software Engineer & an AI Enthusiast"
        />
        <meta
          name="twitter:description"
          content="Hi! I am Kinlo, a Computer Science graduate with a minor in Data Science and specialization in Artificial Intelligence and Machine Learning at Constructor University Germany. I love learning, teaching and building projects."
        />
      </Helmet>
      <div className={`${styles.flexCenter}`}>
        {" "}
        <div className={`${styles.boxWidth}`}>
          {" "}
          <Navbar clicked="about" />{" "}
        </div>
      </div>
      <main id="main-content" className={`${styles.flexStart} w-full`}>
        {" "}
        <div className={`${styles.boxWidth}`}>
          {" "}
          <AboutMe />
          <ContactMe />
        </div>
      </main>
    </div>
  );
}
