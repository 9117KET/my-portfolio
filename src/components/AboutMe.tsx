import {
  builds,
  hobbies,
  cvLink,
  skills,
  skillCategories,
} from "../utils/constants";
import profileImage from "../utils/images/28-removebg-preview.png";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function AboutMe() {
  const skillsByName = Object.fromEntries(
    skills.map((s) => [s.name, s.years])
  );

  return (
    <section className="mt-8 mb-[-2%] max-w-full overflow-hidden">
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-8">
          <h1
            className="text-[clamp(2.0rem,4.2vw,4.25rem)] font-headline font-extrabold tracking-tighter leading-[1.05] mb-6 relative w-fit sm:whitespace-nowrap
              before:absolute before:inset-0 before:animate-typewriter before:bg-surface
              after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-primary
              sm:before:w-[calc(100% + 0.125em)]"
          >
            Kinlo - Ephriam -Tangiri
          </h1>

          <p className="text-lg sm:text-xl text-on-surface-variant leading-relaxed max-w-2xl">
            Hi! I'm Kinlo - A full-stack developer with an AI/ML focus, I have a BSc in
            Computer Science and a Data Science minor and specialization in AI/ML, I also have experience
            in program and project management.
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
              <span className="material-symbols-outlined text-sm" aria-hidden="true">
                arrow_forward
              </span>
            </a>
          </div>

          <p className="text-sm text-outline mt-8">
            Bremen, Germany • Sharing updates on{" "}
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
          <div className="relative flex py-5 items-center group">
            <div className="flex-grow border-t border-outline-variant/30 transform transition-transform duration-300 group-hover:scale-x-105"></div>
            <span className="text-lg sm:text-xl md:text-3xl font-semibold flex-shrink mx-4 text-outline transition-colors duration-300 group-hover:text-primary">
              <span className="text-primary">{">"}</span> About Me:
            </span>
            <div className="flex-grow border-t border-outline-variant/30 transform transition-transform duration-300 group-hover:scale-x-105"></div>
          </div>
          <p className="pl-2 md:pl-6 text-sm sm:text-base text-on-surface-variant max-w-3xl leading-relaxed">
            I enjoy learning, problem solving, and teaching. I've tutored
            mathematics and been a TA for Calculus I & II. After high school I
            co-built an e-learning platform to provide free educational resources
            in crisis-affected regions.
          </p>
          <p className="pl-2 md:pl-6 text-sm sm:text-base text-on-surface-variant mt-4">
            <span className="text-primary">|</span> When I'm not coding or
            studying:
          </p>
          <div className="pl-2 md:pl-6 mt-2 flex flex-wrap gap-2">
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

        {/* Terminal profile accent */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <Card className="lg:col-span-5 bg-surface-container-low border-outline-variant/20 overflow-hidden">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-error/70"></div>
              <div className="w-3 h-3 rounded-full bg-tertiary/70"></div>
              <div className="w-3 h-3 rounded-full bg-primary/70"></div>
            </div>
            <div className="font-label text-sm text-primary/90 space-y-2">
              <p className="text-outline/70 italic">// ket.dev profile data</p>
              <p>
                <span className="text-tertiary">location:</span>{" "}
                <span className="text-emerald-600 dark:text-emerald-400">"Bremen, Germany"</span>
              </p>
              <p>
                <span className="text-tertiary">status:</span>{" "}
                <span className="text-emerald-600 dark:text-emerald-400">"Open to impactful work"</span>
              </p>
              <p>
                <span className="text-tertiary">stack:</span>{" "}
                [<span className="text-emerald-600 dark:text-emerald-400">"React", "TypeScript", "Python", "RAG"</span>]
              </p>
              <p>
                <span className="text-tertiary">focus:</span>{" "}
                <span className="text-emerald-600 dark:text-emerald-400">"Full-Stack & AI Engineering"</span>
              </p>
            </div>
          </Card>

          <div className="lg:col-span-7">
            {/* Skills as category cards */}
            <div>
              <div className="relative flex py-5 items-center group">
                <div className="flex-grow border-t border-outline-variant/30 transform transition-transform duration-300 group-hover:scale-x-105"></div>
                <span className="text-lg sm:text-xl md:text-3xl font-semibold flex-shrink mx-4 text-outline transition-colors duration-300 group-hover:text-primary">
                  <span className="text-primary">{">"}</span> Skills & Experience:
                </span>
                <div className="flex-grow border-t border-outline-variant/30 transform transition-transform duration-300 group-hover:scale-x-105"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {skillCategories.map((cat) => {
                  const categorySkills = cat.skillNames
                    .map((name) => ({
                      name,
                      years: skillsByName[name as keyof typeof skillsByName],
                    }))
                    .filter((s) => s.years != null);
                  return (
                    <Card key={cat.id} variant="interactive">
                      <h3 className="text-base font-semibold text-on-surface mb-3">
                        {cat.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {categorySkills.map(({ name, years }) => (
                          <span
                            key={name}
                            className="px-3 py-1 text-xs sm:text-sm border border-outline-variant/30 rounded-lg bg-surface-container-lowest text-on-surface"
                          >
                            {name}
                            <span className="text-on-surface-variant ml-1">
                              ({years}y)
                            </span>
                          </span>
                        ))}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* My Projects teaser */}
        <div className="mt-10">
          <div className="relative flex py-5 items-center group">
            <div className="flex-grow border-t border-outline-variant/30 transform transition-transform duration-300 group-hover:scale-x-105"></div>
            <span className="text-lg sm:text-xl md:text-3xl font-semibold flex-shrink mx-4 text-outline transition-colors duration-300 group-hover:text-primary">
              <span className="text-primary">{">"}</span> My Projects
            </span>
            <div className="flex-grow border-t border-outline-variant/30 transform transition-transform duration-300 group-hover:scale-x-105"></div>
          </div>
          <div className="pl-2 md:pl-6 mt-4 flex flex-wrap gap-2">
            {builds.slice(0, 6).map((build, key) => (
              <span
                key={key}
                className="px-3 py-1 text-xs sm:text-sm border border-outline-variant/30 rounded-lg bg-surface-container-lowest text-on-surface truncate max-w-[280px] sm:max-w-none"
                title={build}
              >
                {build.replace(/\s*-+$/g, "").trim()}
              </span>
            ))}
          </div>
          <p className="pl-2 md:pl-6 mt-4 text-sm text-on-surface-variant">
            For details, visit the Projects section.
          </p>
          <div className="pl-2 md:pl-6 mt-3">
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
