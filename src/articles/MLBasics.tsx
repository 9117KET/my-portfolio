export default function MLBasics() {
  return (
    <div className="font-sans mb-4 text-lg prose prose-lg dark:prose-invert max-w-none">
      {/* Introduction */}
      <section className="mb-8">
        <p className="mb-6">
          Machine Learning (ML) has revolutionized countless aspects of our
          daily lives—from personalized content recommendations on streaming
          platforms to sophisticated voice assistants that respond to our
          commands. This transformative technology continues to reshape
          industries and enhance user experiences across digital platforms. In
          this article, we'll explore the fundamental concepts of machine
          learning in accessible terms, providing a comprehensive foundation for
          understanding this powerful field.
        </p>
      </section>

      {/* What is Machine Learning? */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          What is Machine Learning?
        </h2>
        <p className="mb-4">
          At its core, machine learning represents a paradigm shift in how we
          approach computing problems. Rather than explicitly programming every
          possible rule and scenario, machine learning enables computers to
          learn from experience and data—mirroring human learning processes.
          This approach allows systems to identify patterns, make predictions,
          and improve performance over time without constant human intervention.
        </p>
        <p className="mb-4">
          For example, instead of meticulously coding rules to identify cats in
          photographs (accounting for endless variations in size, color,
          position, and lighting), a machine learning approach involves exposing
          the algorithm to thousands of diverse cat images. Through this
          process, the system gradually learns to recognize the distinctive
          features and patterns that characterize felines across countless
          variations.
        </p>
      </section>

      {/* Types of Machine Learning */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Three Fundamental Paradigms of Machine Learning
        </h2>
        <div className="pl-6">
          <h3 className="text-xl font-semibold mb-2">1. Supervised Learning</h3>
          <p className="mb-4">
            Supervised learning functions like education with a dedicated
            instructor. The algorithm receives labeled training examples where
            inputs are paired with their correct outputs. For instance, an image
            (input) might be labeled "cat" (output). Through extensive exposure
            to these labeled examples, the system learns to accurately classify
            new, previously unseen data. Common applications include email spam
            detection, sentiment analysis, and medical diagnosis support.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            2. Unsupervised Learning
          </h3>
          <p className="mb-4">
            Unsupervised learning operates through independent pattern
            discovery, similar to how we might naturally group objects with
            shared characteristics. Without labeled examples, these algorithms
            identify inherent structures within data. Applications include
            customer segmentation for targeted marketing, anomaly detection in
            security systems, and topic modeling in document analysis—all
            without requiring pre-labeled datasets.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            3. Reinforcement Learning
          </h3>
          <p className="mb-4">
            Reinforcement learning simulates learning through environmental
            interaction and feedback. The algorithm (agent) performs actions in
            an environment, receiving rewards or penalties based on its
            decisions. Through this iterative process, it optimizes its strategy
            to maximize cumulative rewards over time. This approach powers
            advanced game-playing AI (like AlphaGo), robotics control systems,
            and autonomous vehicle navigation algorithms.
          </p>
        </div>
      </section>

      {/* Common Applications */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Transformative Real-World Applications
        </h2>
        <p className="mb-4">
          Machine learning has permeated virtually every industry, delivering
          innovations that were once considered science fiction:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Recommendation Systems:</strong> Personalized content
            curation on platforms like Netflix, Amazon, and Spotify,
            significantly enhancing user engagement and satisfaction
          </li>
          <li>
            <strong>Computer Vision:</strong> Advanced image recognition
            enabling facial authentication, autonomous vehicles, medical
            diagnostic imaging, and industrial quality control
          </li>
          <li>
            <strong>Natural Language Processing:</strong> Sophisticated language
            models powering conversational AI, real-time translation services,
            sentiment analysis, and automated content generation
          </li>
          <li>
            <strong>Financial Intelligence:</strong> Fraud detection systems
            that continuously adapt to new patterns, algorithmic trading
            strategies, and automated credit scoring models
          </li>
        </ul>
      </section>

      {/* Basic Concepts */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Essential Concepts in Machine Learning
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Training Data</h3>
            <p>
              The foundation of any machine learning system—a curated collection
              of examples used to teach the algorithm. The quality, diversity,
              and volume of this data directly influence the model's performance
              and generalization capabilities.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Features</h3>
            <p>
              The specific attributes or variables the model uses to make
              predictions. For real estate price prediction, features might
              include square footage, location coordinates, number of bedrooms,
              school district ratings, and property age.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Model</h3>
            <p>
              The algorithmic framework that processes inputs and generates
              predictions. Models range from simple linear regressions to
              complex neural networks with millions of parameters, each with
              specific strengths for different problem domains.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Evaluation Metrics</h3>
            <p>
              Quantitative measures assessing model performance, including
              accuracy, precision, recall, F1-score, and area under the ROC
              curve—each providing unique insights into different aspects of
              model effectiveness.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Beginning Your Machine Learning Journey
        </h2>
        <p className="mb-4">
          For those inspired to explore machine learning, here's a structured
          pathway to build your expertise:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Master Python programming—the industry-standard language for ML
            development with its extensive ecosystem of specialized libraries
          </li>
          <li>
            Build a strong foundation in mathematics, focusing on linear
            algebra, calculus, statistics, and probability theory
          </li>
          <li>
            Explore beginner-friendly frameworks like scikit-learn for
            implementing classical algorithms with minimal complexity
          </li>
          <li>
            Engage with real-world datasets from repositories like Kaggle, UCI
            Machine Learning Repository, and Google Dataset Search
          </li>
          <li>
            Develop progressive projects—from simple classification tasks to
            more complex applications—building your portfolio while reinforcing
            concepts
          </li>
        </ol>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Conclusion
        </h2>
        <p>
          Machine learning represents a fascinating intersection of computer
          science, statistics, and domain expertise that continues to transform
          our digital landscape. Understanding these fundamental concepts
          provides valuable insight into the technologies shaping our daily
          experiences—whether you're aiming to pursue a career in the field,
          enhance existing products with AI capabilities, or simply develop a
          deeper appreciation for the intelligent systems around us. As machine
          learning continues to evolve, these core principles remain the
          essential building blocks for innovation and discovery.
        </p>
      </section>
    </div>
  );
}
