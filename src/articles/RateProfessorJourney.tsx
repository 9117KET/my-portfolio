export default function RateProfessorJourney() {
  return (
    <div className="font-sans mb-4 text-lg prose prose-lg dark:prose-invert max-w-none">
      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Introduction
        </h2>
        <p>
          Rate my professor AI assistant is a platform that enables Constructor
          University students to anonymously rate their professors purely from
          their experience and interaction. There is an AI chat interface where
          students can ask anything about professors depending on students'
          feedback as well as any questions about Constructor University in
          general.
        </p>
        <p>
          My motivation for creating this platform is to give students the
          autonomy to share their experiences with others, help new students
          know the teaching style of professors, and know which professors to
          choose for subjects having multiple professors. The entire student
          review given by the university is not fun, and doesn't sound that
          anonymous given that technically, we submit with our student emails
          and also it is generally done at the end of the lectures when the
          professor is present and might not give students that full privacy to
          share. Most importantly, other students can't share their experiences
          with each other. This platform takes care of that and will be
          expanding to other universities.
        </p>
      </section>

      {/* Technologies Used */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Technologies Used
        </h2>
        <p>
          <strong>Frontend:</strong> The platform is built using React and
          Next.js, leveraging the power of server-side rendering and static site
          generation for optimal performance. Material-UI is used for styling
          and creating responsive, accessible UI components.
        </p>
        <p>
          <strong>Backend:</strong> Firebase is used for backend services,
          including Firestore for real-time database management. The platform
          also integrates with OpenAI for AI-powered features and Pinecone for
          vector database services.
        </p>
        <p>
          <strong>APIs and Services:</strong> The application uses the OpenAI
          API to generate embeddings and chat completions, and Pinecone is used
          for storing and querying vector embeddings.
        </p>
      </section>

      {/* Architecture */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Architecture
        </h2>
        <p>
          <strong>Client-Server Model:</strong> The application follows a
          client-server architecture where the frontend communicates with the
          backend via RESTful API endpoints.
        </p>
        <p>
          <strong>Component Structure:</strong> The application is structured
          into modular React components, such as TipsModal, HowToUseModal, and
          ViewReviewsModal, each responsible for specific functionalities.
        </p>
        <p>
          <strong>State Management:</strong> React hooks like useState and
          useEffect are used for managing component state and side effects,
          ensuring a responsive and dynamic user experience.
        </p>
      </section>

      {/* AI Chat Functionality */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          AI Chat Functionality
        </h2>
        <p>
          <strong>User Interaction:</strong> Users interact with the AI through
          a chat interface on the homepage. Messages are sent to the server via
          a POST request to the /api/chat endpoint.
        </p>
        <p>
          <strong>Processing User Messages:</strong> The server processes user
          messages by generating embeddings using OpenAI's API. These embeddings
          are then used to query Pinecone for similar reviews, which are used to
          provide context for the AI's response.
        </p>
        <p>
          <strong>Generating AI Responses:</strong> The AI generates a response
          using the context from similar reviews. This response is streamed back
          to the client, providing a seamless chat experience.
        </p>
      </section>

      {/* Conclusion */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Conclusion
        </h2>
        <p>
          Developing this platform was a learning experience in integrating AI
          with user-generated content. The use of modern web technologies like
          Next.js and Firebase made it possible to create a responsive and
          scalable application.
        </p>
        <p>
          Future improvements include enhancing the AI's recommendation
          capabilities and expanding the platform to support more universities
          and courses.
        </p>
      </section>
    </div>
  );
}
