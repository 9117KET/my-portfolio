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
          Kinlo Ephriam Tangiri | Software Engineer & Student Entrepreneur
        </title>
        <meta
          name="description"
          content="Kinlo Ephriam Tangiri is a final-year Computer Science student specializing in AI/ML at Constructor University. Passionate about building educational technology and AI solutions for underserved communities."
        />
        <meta
          name="keywords"
          content="Kinlo Ephriam Tangiri, software engineer, computer science student, AI ML specialist, educational technology, Constructor University, portfolio"
        />
        <meta
          property="og:title"
          content="Kinlo Ephriam Tangiri | Software Engineer & Student Entrepreneur"
        />
        <meta
          property="og:description"
          content="Final-year Computer Science student specializing in AI/ML at Constructor University. Passionate about building educational technology and AI solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kinlo Ephriam Tangiri | Software Engineer & Student Entrepreneur"
        />
        <meta
          name="twitter:description"
          content="Final-year Computer Science student specializing in AI/ML at Constructor University. Passionate about building educational technology and AI solutions."
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
