import { Helmet } from "react-helmet-async";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Navbar from "../components/Navbar";
import styles from "../utils/style";

export function About() {
  // Define the About component
  return (
    <div className="dark:bg-[#2D2E32] min-h-screen overflow-hidden">
      {" "}
      {/* Set dark background and minimum screen height */}
      <Helmet>
        <title>Kinlo Ephriam Tangiri</title> {/* Set the page title */}
      </Helmet>
      <div className={`${styles.flexCenter}`}>
        {" "}
        {/* Center content horizontally */}
        <div className={`${styles.boxWidth}`}>
          {" "}
          {/* Apply width styling */}
          <Navbar clicked="about_me;" />{" "}
          {/* Navbar component with 'about_me' as the active link */}
        </div>
      </div>
      <div className={`${styles.flexStart} w-full`}>
        {" "}
        {/* Align content to the start of the flex container */}
        <div className={`${styles.boxWidth}`}>
          {" "}
          {/* Apply width styling */}
          <AboutMe /> {/* Render the AboutMe component */}
          <ContactMe /> {/* Render the ContactMe component */}
        </div>
      </div>
    </div>
  );
}
