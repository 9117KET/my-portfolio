export default function TypeScriptTips() {
  return (
    <div className="font-mono mb-4 max-w-none">
      {/* Introduction */}
      <section className="mb-8">
        <p className="mb-6">
          TypeScript has become an essential tool in modern web development,
          offering type safety and enhanced developer experience. Let's explore
          some key best practices and tips that will help you write better
          TypeScript code in 2024.
        </p>
      </section>

      {/* Basic Types and Type Inference */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          1. Embrace Type Inference
        </h2>
        <p className="mb-4">
          TypeScript is smart enough to infer types in many cases. Don't
          over-annotate when unnecessary:
        </p>
        <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded-lg mb-4">
          <pre className="language-typescript">
            <code>
              {`// Unnecessary type annotation
const message: string = "Hello";

// Let TypeScript infer the type
const message = "Hello";

// Use type annotations when inference isn't possible
function parseCoordinate(coord: string): { x: number; y: number } {
  const [x, y] = coord.split(',').map(Number);
  return { x, y };
}`}
            </code>
          </pre>
        </div>
      </section>

      {/* Interface vs Type */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          2. Interface vs Type: Making the Right Choice
        </h2>
        <p className="mb-4">
          Both interfaces and types can define object shapes, but they have
          subtle differences:
        </p>
        <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded-lg mb-4">
          <pre className="language-typescript">
            <code>
              {`// Interface: Better for object-oriented design and extendable APIs
interface User {
  name: string;
  age: number;
}

// Type: Better for unions, intersections, and primitive types
type Status = "pending" | "approved" | "rejected";
type NumberOrString = number | string;`}
            </code>
          </pre>
        </div>
      </section>

      {/* Strict Mode Benefits */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          3. Enable Strict Mode
        </h2>
        <p className="mb-4">
          Always enable strict mode in your tsconfig.json for better type
          safety:
        </p>
        <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded-lg mb-4">
          <pre className="language-json">
            <code>
              {`{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}`}
            </code>
          </pre>
        </div>
      </section>

      {/* Real-World Applications */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Real-World Applications
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>React Components:</strong> Type-safe props and state
            management
          </li>
          <li>
            <strong>API Integration:</strong> Type-safe API responses and
            requests
          </li>
          <li>
            <strong>Form Handling:</strong> Type validation for form inputs
          </li>
          <li>
            <strong>State Management:</strong> Type-safe Redux/Context actions
            and reducers
          </li>
        </ul>
      </section>

      {/* Common Pitfalls */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Common Pitfalls to Avoid
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Overusing the 'any' type - it defeats TypeScript's purpose</li>
          <li>Not utilizing utility types (Partial, Pick, Omit, etc.)</li>
          <li>Ignoring TypeScript errors instead of fixing them</li>
          <li>Not keeping TypeScript and dependencies updated</li>
        </ul>
      </section>

      {/* Resources */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Resources for Further Learning
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a
              href="https://www.typescriptlang.org/docs/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Official TypeScript Documentation
            </a>
          </li>
          <li>
            <a
              href="https://github.com/type-challenges/type-challenges"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Type Challenges Repository
            </a>
          </li>
          <li>
            <a
              href="https://basarat.gitbook.io/typescript/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              TypeScript Deep Dive
            </a>
          </li>
          <li>
            <a
              href="https://www.totaltypescript.com/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Total TypeScript
            </a>
          </li>
        </ul>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Conclusion
        </h2>
        <p>
          TypeScript continues to evolve, and staying up-to-date with best
          practices will help you write more maintainable and robust
          applications. Remember that TypeScript is a tool to help you catch
          errors early and make your code more self-documenting.
        </p>
      </section>
    </div>
  );
}
