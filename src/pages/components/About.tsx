import React from "react";
import { Helmet } from "react-helmet-async";
import AboutMe from "../../components/AboutMe";
import ContactMe from "../../components/ContactMe";
import Navbar from "../../components/Navbar";
import styles from "../../utils/style";

const About: React.FC = () => {
  return (
    <div className="dark:bg-[#2D2E32] min-h-screen overflow-hidden">
      <Helmet>
        <title>Kinlo Ephriam Tangiri</title>
      </Helmet>
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar clicked="about_me;" />
        </div>
      </div>

      <div className={`${styles.flexStart} w-full`}>
        <div className={`${styles.boxWidth}`}>
          <AboutMe />
          <ContactMe />
        </div>
      </div>
    </div>
  );
};

export default About;
