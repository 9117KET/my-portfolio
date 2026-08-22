import { builds, hobbies, cvLink, skillCategories } from "../utils/constants";
import profileImage from "../utils/images/photo.png";
import Card from "./Card";
import SectionHeading from "./SectionHeading";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <section className="mt-8 mb-[-2%] max-w-full overflow-hidden">
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-8">
          <h1 className="typewriter text-[clamp(2.0rem,4.2vw,4.25rem)] font-headline font-extrabold tracking-tighter leading-[1.05] mb-6 relative w-fit sm:whitespace-nowrap">
            Kinlo Ephriam Tangiri
          </h1>

          <p className="text-lg sm:text-xl text-on-surface-variant leading-relaxed max-w-2xl">
            Hi! I'm Kinlo, a full-stack developer with a focus on AI
            applications. I have a Bachelor's in Computer Science with a minor
            in Data Science, and I specialized in Artificial Intelligence and
            Machine Learning. My thesis was on reducing hallucination in LLM
            applications across a range of industries. I also have experience in
            program and project management, from leading the team that built an
            e-learning platform from scratch to working as an assistant project
            manager on an EU-sponsored program for two years.
          </p>

          <div className="mt-10 flex flex-wrap gap-6 items-center">
            <a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-7 py-3.5 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-primary/85 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="font-label text-primary text-sm font-semibold tracking-wider hover:translate-x-1 transition-transform inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary/40 rounded"
            >
              Connect
              <span
                className="material-symbols-outlined text-sm"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </a>
          </div>

          <p className="text-sm text-on-surface-variant mt-8">
            Based in Bremen, Germany. Open to new roles. Sharing updates on{" "}
            <a
              href="https://www.linkedin.com/in/kinlo-ephriam-tangiri-a70113218/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-on-surface underline underline-offset-4"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>

        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-10"></div>
            <img
              src={profileImage}
              alt="Kinlo Ephriam Tangiri"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="mt-10">
        {/* About Me */}
        <div className="mt-8">
          <SectionHeading>About</SectionHeading>
          <p className="text-sm sm:text-base text-on-surface-variant max-w-3xl leading-relaxed">
            I enjoy learning, problem solving, and teaching. I've tutored
            mathematics and been a TA for Calculus I & II. After high school I
            led a team of more than 25 to build an e-learning platform providing
            free educational resources in crisis-affected regions.
          </p>
          <p className="text-sm sm:text-base text-on-surface-variant mt-6">
            When I'm not coding or studying:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {hobbies.map((hobby, key) => (
              <span
                key={key}
                className="px-3 py-1 text-xs sm:text-sm border border-outline-variant/30 rounded-lg bg-surface-container-lowest text-on-surface"
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-12">
          <SectionHeading>Skills</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillCategories.map((cat) => (
              <Card key={cat.id} variant="interactive">
                <h3 className="text-base font-semibold text-on-surface mb-3">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skillNames.map((name) => (
                    <span
                      key={name}
                      className="px-3 py-1 text-xs sm:text-sm border border-outline-variant/30 rounded-lg bg-surface-container-lowest text-on-surface"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* My Projects teaser */}
        <div className="mt-10">
          <SectionHeading>Selected work</SectionHeading>
          <div className="flex flex-wrap gap-2">
            {builds.slice(0, 6).map((build, key) => (
              <span
                key={key}
                className="px-3 py-1 text-xs sm:text-sm border border-outline-variant/30 rounded-lg bg-surface-container-lowest text-on-surface truncate max-w-[280px] sm:max-w-none"
                title={build}
              >
                {build}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-on-surface-variant">
            For details, visit the Projects section.
          </p>
          <div className="mt-3">
            <Link
              to="/projects"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary border border-primary/60 rounded-lg hover:bg-surface-container-low transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              See all projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
