import hljs from "highlight.js/lib/core";
import java from "highlight.js/lib/languages/java";

// Register Java for syntax highlighting
hljs.registerLanguage("javascript", java);

export default function Beans() {
  return (
    <div className="font-mono mb-4 max-w-none">
      {/* Introduction */}
      <p className="mb-6">
        In this post, I will introduce the concept of IoC (Inversion of
        Control), DI (Dependency Injection), and Beans in the Spring Framework.
      </p>

      {/* IoC Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Understanding IoC
        </h2>
        <p>
          As its name suggests, IoC (Inversion of Control) is a principle that
          transfers the control of the program to a container or a framework, in
          our case, to the Spring Container.
        </p>
      </section>

      {/* Rest of your content with improved styling */}
      {/* ... existing content ... */}

      {/* Code examples with syntax highlighting */}
      <div className="my-6">
        <h3 className="text-xl font-bold mb-4">Example without DI:</h3>
        <pre className="language-java rounded-lg bg-gray-100 dark:bg-zinc-800 p-4 overflow-x-auto">
          <code>{/* Your existing code examples */}</code>
        </pre>
      </div>
    </div>
  );
}
