import Navbar from "../components/Navbar";
import { skills, skillCategories } from "../utils/constants";
import styles from "../utils/style";
import Card from "../components/Card";
import { Helmet } from "react-helmet-async";

export default function Skills() {
  const skillsByName = Object.fromEntries(
    skills.map((s) => [s.name, s.years])
  );

  return (
    <div className="dark:bg-[#2D2E32] min-h-screen">
      <Helmet>
        <title>Skills | Kinlo Ephriam Tangiri</title>
        <meta
          name="description"
          content="Technical skills and experience: Frontend, Data & ML, DevOps & Tools, Backend. JavaScript, TypeScript, Python, React, Next.js, TensorFlow, LangChain, Supabase, and more."
        />
        <meta
          name="keywords"
          content="skills, backend, frontend, React, TypeScript, Python, machine learning, DevOps, portfolio skills"
        />
        <meta property="og:title" content="Skills | Kinlo Ephriam Tangiri" />
        <meta
          property="og:description"
          content="Technical skills: Frontend, Data & ML, DevOps & Tools, Backend."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Skills | Kinlo Ephriam Tangiri" />
        <meta
          name="twitter:description"
          content="Technical skills: Frontend, Data & ML, DevOps & Tools, Backend."
        />
      </Helmet>
      <div className={styles.flexCenter}>
        <div className={styles.boxWidth}>
          <Navbar clicked="skills" />
        </div>
      </div>
      <div className={`${styles.flexStart} w-full`}>
        <div className={styles.boxWidth}>
          <div className={`${styles.boxWidth} mt-5 p-8 dark:text-gray-300`}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-gray-100 text-black mb-1">
              Skills
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-mono mb-2">
              <span className="text-blue-600 dark:text-blue-400">{">"}</span>{" "}
              skills:~$ cat skills.md
            </p>
            <p className="text-sm sm:text-base dark:text-gray-300 text-black mb-8">
              Technologies and tools I work with, grouped by area.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skillCategories.map((cat) => {
                const categorySkills = cat.skillNames
                  .map((name) => ({ name, years: skillsByName[name] }))
                  .filter((s) => s.years != null);
                return (
                  <Card key={cat.id}>
                    <h2 className="text-lg font-semibold dark:text-gray-200 mb-4">
                      {cat.title}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map(({ name, years }) => (
                        <span
                          key={name}
                          className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-300"
                        >
                          {name}
                          <span className="text-gray-500 dark:text-gray-400 ml-1">
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
    </div>
  );
}
