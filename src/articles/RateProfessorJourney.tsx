export default function RateProfessorJourney() {
  return (
    <div className="font-mono mb-4 max-w-none">
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
        <p>
          <strong>API Layer:</strong> Next.js API routes are used to create
          serverless functions that handle requests between the frontend and
          backend services. These routes encapsulate the business logic for user
          authentication, review management, and AI-driven chat capabilities.
        </p>
      </section>

      {/* RAG Architecture */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          RAG Architecture
        </h2>
        <p>
          The Rate My Professor project implements a Retrieval-Augmented
          Generation (RAG) system that enhances AI responses with contextually
          relevant information from the database of professor reviews.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3 text-blue-700 dark:text-blue-300">
          1. Data Storage and Management
        </h3>
        <p>
          <strong>Firebase Firestore:</strong> Used as the primary database to
          store professor reviews, which include:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Professor name</li>
          <li>Subject</li>
          <li>Star rating</li>
          <li>Review text</li>
          <li>Creation timestamp</li>
          <li>User reactions</li>
          <li>Replies</li>
        </ul>
        <p>
          <strong>Pinecone Vector Database:</strong> Used to store vector
          embeddings of reviews for semantic search capabilities.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3 text-blue-700 dark:text-blue-300">
          2. Embedding Generation
        </h3>
        <p>
          <strong>OpenAI Embeddings API:</strong> The project uses OpenAI's
          text-embedding-3-small model to create vector embeddings of review
          content. The embedding process converts text reviews into
          high-dimensional vectors that capture semantic meaning.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto text-sm">
          {`// Example code for generating embeddings
async function generateEmbedding(text) {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
    encoding_format: "float"
  });
  return response.data[0].embedding;
}`}
        </pre>

        <h3 className="text-xl font-bold mt-6 mb-3 text-blue-700 dark:text-blue-300">
          3. RAG Pipeline Flow
        </h3>
        <h4 className="text-lg font-semibold mt-4 mb-2">
          Data Synchronization
        </h4>
        <p>
          When reviews are added, edited, or deleted in Firestore, the
          syncFirestoreWithPinecone() function is triggered. This function:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Retrieves all reviews from Firestore</li>
          <li>
            Creates embeddings for each review using OpenAI's embedding model
          </li>
          <li>
            Uploads these embeddings along with metadata to Pinecone's vector
            database
          </li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto text-sm">
          {`// Example of the synchronization function
async function syncFirestoreWithPinecone() {
  // Get all reviews from Firestore
  const reviewsSnapshot = await db.collection('reviews').get();
  const reviews = reviewsSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  // Generate embeddings and prepare vectors
  const vectors = [];
  for (const review of reviews) {
    const embedding = await generateEmbedding(review.text);
    vectors.push({
      id: review.id,
      values: embedding,
      metadata: {
        professor: review.professor,
        subject: review.subject,
        rating: review.rating,
        text: review.text
      }
    });
  }

  // Upsert to Pinecone
  await pineconeIndex.upsert({
    vectors
  });
}`}
        </pre>

        <h4 className="text-lg font-semibold mt-4 mb-2">
          Query/Retrieval Process
        </h4>
        <p>
          When a user submits a message in the chat interface, the
          queryReviews() function is called with the user's message to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Create an embedding of the user's message using the same OpenAI
            model
          </li>
          <li>
            Query Pinecone to find the top 3 most semantically similar review
            embeddings
          </li>
          <li>
            Return these matches with their metadata (professor, subject,
            rating, review text)
          </li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto text-sm">
          {`// Example of the query function
async function queryReviews(userMessage) {
  // Generate embedding for the user message
  const queryEmbedding = await generateEmbedding(userMessage);
  
  // Query Pinecone for similar reviews
  const queryResponse = await pineconeIndex.query({
    vector: queryEmbedding,
    topK: 3,
    includeMetadata: true
  });
  
  return queryResponse.matches;
}`}
        </pre>

        <h4 className="text-lg font-semibold mt-4 mb-2">Generation Process</h4>
        <p>
          The retrieved reviews are formatted into a structured context string
          that is injected into the system prompt for OpenAI's GPT-4 model. The
          user's message and conversation history are sent along with this
          enhanced prompt, and GPT-4 generates responses that are informed by
          the most relevant professor reviews.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto text-sm">
          {`// Example of the generation process
async function generateAIResponse(userMessage, conversationHistory) {
  // Get relevant reviews
  const relevantReviews = await queryReviews(userMessage);
  
  // Format reviews into context
  const context = relevantReviews.map(match => {
    const metadata = match.metadata;
    return \`Professor: \${metadata.professor}
Subject: \${metadata.subject}
Rating: \${metadata.rating}/5
Review: \${metadata.text}\`;
  }).join('\\n\\n');
  
  // Create system prompt with context
  const systemPrompt = \`You are an AI assistant for Constructor University students.
Use the following professor reviews to inform your responses:
\${context}
Answer questions about professors based on these reviews.
If you don't have relevant information, be honest about it.\`;
  
  // Generate response using OpenAI
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: systemPrompt },
      ...conversationHistory,
      { role: "user", content: userMessage }
    ],
    stream: true
  });
  
  return response;
}`}
        </pre>
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
        <p>
          <strong>Frontend Implementation:</strong> The chat interface uses
          React state to manage the conversation flow and streaming responses.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto text-sm">
          {`// Example of frontend chat component
function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;
    
    // Add user message to chat
    const newMessages = [
      ...messages,
      { role: 'user', content: inputText }
    ];
    setMessages(newMessages);
    setInputText('');
    setIsLoading(true);
    
    try {
      // Send request to API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages
        }),
      });
      
      if (!response.ok) throw new Error('Failed to get response');
      
      // Handle streaming response
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let aiResponse = '';
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value);
        aiResponse += chunk;
        
        // Update the AI response in real-time
        setMessages([
          ...newMessages,
          { role: 'assistant', content: aiResponse }
        ]);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index} className={\`message \${msg.role}\`}>
            {msg.content}
          </div>
        ))}
        {isLoading && <div className="loading-indicator">AI is typing...</div>}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask about a professor..."
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button onClick={handleSendMessage} disabled={isLoading}>
          Send
        </button>
      </div>
    </div>
  );
}`}
        </pre>
      </section>

      {/* Technical Challenges and Solutions */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Technical Challenges and Solutions
        </h2>
        <p>
          <strong>Streaming Response Handling:</strong> Implementing streaming
          responses from OpenAI required careful handling of the response chunks
          and state updates to provide a smooth typing effect.
        </p>
        <p>
          <strong>Vector Database Synchronization:</strong> Maintaining
          synchronization between Firestore and Pinecone was challenging. I
          implemented a synchronization mechanism that handles concurrent
          updates and ensures data consistency.
        </p>
        <p>
          <strong>Privacy and Rate Limiting:</strong> To prevent abuse while
          maintaining anonymity, the system uses IP-based rate limiting without
          storing personally identifiable information.
        </p>
        <p>
          <strong>Error Handling:</strong> Comprehensive error handling was
          implemented throughout the application to gracefully handle API
          failures, database connection issues, and invalid user inputs.
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
          The RAG architecture proved particularly effective for providing
          contextually relevant responses based on real student reviews,
          creating a more useful and informative assistant than would be
          possible with a standard LLM implementation.
        </p>
        <p>
          Future improvements include enhancing the AI's recommendation
          capabilities, implementing more advanced embedding techniques, and
          expanding the platform to support more universities and courses.
        </p>
      </section>
    </div>
  );
}
