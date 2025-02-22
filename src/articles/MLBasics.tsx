export default function MLBasics() {
  return (
    <div className="font-sans mb-4 text-lg prose prose-lg dark:prose-invert max-w-none">
      {/* Introduction */}
      <section className="mb-8">
        <p className="mb-6">
          Machine Learning (ML) has become an integral part of our daily lives,
          from Netflix recommendations to voice assistants like Siri. But what
          exactly is machine learning, and how does it work? Let's break it down
          in simple terms that anyone can understand.
        </p>
      </section>

      {/* What is Machine Learning? */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          What is Machine Learning?
        </h2>
        <p className="mb-4">
          Think of machine learning as teaching a computer to learn from
          experience, much like how humans learn. Instead of explicitly
          programming every single rule, we show the computer many examples and
          let it figure out the patterns on its own.
        </p>
        <p className="mb-4">
          For instance, rather than writing rules to identify cats in photos, we
          show the computer thousands of cat pictures, and it learns to
          recognize the common features that make a cat a cat.
        </p>
      </section>

      {/* Types of Machine Learning */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Three Main Types of Machine Learning
        </h2>
        <div className="pl-6">
          <h3 className="text-xl font-semibold mb-2">1. Supervised Learning</h3>
          <p className="mb-4">
            Like learning with a teacher. We provide the computer with labeled
            examples: - Input: A photo - Label: "This is a cat" The computer
            learns to match inputs with correct labels.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            2. Unsupervised Learning
          </h3>
          <p className="mb-4">
            Like learning by observation. The computer finds patterns in data
            without labels: - Grouping similar customers together - Finding
            unusual transactions in banking data
          </p>

          <h3 className="text-xl font-semibold mb-2">
            3. Reinforcement Learning
          </h3>
          <p className="mb-4">
            Like learning through trial and error. The computer learns by
            receiving rewards or penalties: - How AI learns to play games - How
            self-driving cars learn to navigate
          </p>
        </div>
      </section>

      {/* Common Applications */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Real-World Applications
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Recommendation Systems:</strong> Netflix suggesting movies,
            Spotify recommending songs
          </li>
          <li>
            <strong>Image Recognition:</strong> Face unlock on phones, medical
            image analysis
          </li>
          <li>
            <strong>Natural Language Processing:</strong> ChatGPT, Google
            Translate
          </li>
          <li>
            <strong>Fraud Detection:</strong> Banks identifying suspicious
            transactions
          </li>
        </ul>
      </section>

      {/* Basic Concepts */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Key Concepts in Machine Learning
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Training Data</h3>
            <p>
              The examples we use to teach the computer. Like flashcards for
              studying.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Features</h3>
            <p>
              The characteristics we look at. For a house price prediction:
              size, location, age, etc.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Model</h3>
            <p>
              The "brain" we're training. It takes inputs and makes predictions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Accuracy</h3>
            <p>How often the model's predictions are correct.</p>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Getting Started with Machine Learning
        </h2>
        <p className="mb-4">
          Want to explore machine learning? Here's a simple path to begin:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Learn Python - It's the most popular language for ML</li>
          <li>Study basic statistics and probability</li>
          <li>Try beginner-friendly libraries like scikit-learn</li>
          <li>Practice with datasets from Kaggle.com</li>
          <li>Build simple projects like prediction models</li>
        </ol>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Conclusion
        </h2>
        <p>
          Machine learning isn't just for experts. It's a powerful tool that's
          reshaping our world, and understanding its basics helps us better
          appreciate and interact with the technology around us. Whether you're
          looking to enter the field or just want to understand how your
          favorite apps work, these fundamentals provide a solid foundation.
        </p>
      </section>
    </div>
  );
}
