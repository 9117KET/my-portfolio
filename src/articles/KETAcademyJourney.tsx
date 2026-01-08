export default function KETAcademyJourney() {
  return (
    <div className="font-mono mb-4 max-w-none">
      {/* Motivation */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Project Motivation
        </h2>
        <p>
          KET Academy was born from my experience of dropping out of school due
          to crisis in my country and in the process I developed a vision to
          provide accessible education to students in crisis-affected regions of
          Africa. The challenge was clear: create a platform that works well
          even with limited internet connectivity and provides valuable
          educational resources.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Initial Prototype
        </h2>
        <p>
          The development process for KET Academy was done with my dev-partner
          and co-founder Nfor Glen (CS @ Princeton University), we initially
          started by developing a crappy version with HTML, CSS and Javascript
          (https://ket-academy.github.io/), shortly after working on this, we
          realized how important it was to build something more scalable and
          modern which led us to our present platform with student dashboard, AI
          agent/chatbots for study assistance, Virtual ambassador, academic
          counselor, scholarship and university admission assistant
        </p>
      </section>

      {/* Architecture */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Technical Architecture
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Frontend:</strong> React with TypeScript for type safety and
            better developer experience
          </li>
          <li>
            <strong>Backend:</strong> Node.js with Express for API development
          </li>
          <li>
            <strong>Database:</strong> Firestore
          </li>
          <li>
            <strong>Authentication:</strong>
          </li>
        </ul>
      </section>

      {/* Development Process */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Development Process
        </h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Initial Research and Planning (2 weeks)</li>
          <li>MVP Development (6 weeks)</li>
          <li>Beta Testing with 50 students (4 weeks)</li>
          <li>Refinement and Feature Addition (8 weeks)</li>
          <li>Launch and Continuous Improvement</li>
        </ol>
      </section>

      {/* Project Breakdown */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Project Breakdown
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              1. Research and Planning Phase
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Conducted user research with students in crisis-affected regions
              </li>
              <li>
                Analyzed existing e-learning platforms and their limitations
              </li>
              <li>Identified key requirements for offline functionality</li>
              <li>Created wireframes and user flow diagrams</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">2. MVP Development</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Set up React project with TypeScript configuration</li>
              <li>Implemented core authentication system using JWT</li>
              <li>Created basic content management system</li>
              <li>Developed offline-first architecture</li>
              <li>Built responsive UI components with Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">3. Beta Testing</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Deployed beta version to 50 test users</li>
              <li>Gathered feedback through user surveys</li>
              <li>Identified performance bottlenecks</li>
              <li>Documented user experience issues</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              4. Refinement and Feature Addition
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Enhanced offline synchronization capabilities</li>
              <li>Implemented content caching system</li>
              <li>Added progress tracking features</li>
              <li>Optimized database queries for better performance</li>
              <li>Integrated analytics for usage tracking</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              5. Launch and Monitoring
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Deployed to production environment</li>
              <li>Set up monitoring and error tracking</li>
              <li>Established feedback collection system</li>
              <li>Created documentation for future maintenance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Challenges and Solutions */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Challenges and Solutions
        </h2>
        {/* Add content about specific challenges and how they were overcome */}
      </section>

      {/* Impact and Metrics */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Impact and Results
        </h2>
        {/* Add content about the project's impact */}
      </section>

      {/* Project Architecture Image */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Project Architecture Image
        </h2>
        <img
          src="path/to/your/architecture-image.png"
          alt="Project Architecture"
          className="w-full h-auto"
        />
        <p className="mt-4">
          This image illustrates the architecture of the KET Academy platform,
          showcasing the integration of various components and technologies.
        </p>
      </section>

      {/* Future Plans and Roadmap */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Future Plans and Roadmap
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Expand the platform to include more interactive learning modules.
          </li>
          <li>
            Integrate additional AI-driven features for personalized learning.
          </li>
          <li>
            Enhance offline capabilities to reach more students in remote areas.
          </li>
          <li>
            Collaborate with educational institutions for content accreditation.
          </li>
        </ul>
      </section>
    </div>
  );
}
