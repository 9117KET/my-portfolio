// import React from "react";

export default function ReactPatterns() {
  return (
    <div className="font-mono mb-4 max-w-none">
      {/* Introduction */}
      <section className="mb-8">
        <p className="mb-6">
          React design patterns are essential tools in a developer's arsenal,
          helping create more maintainable, reusable, and scalable components.
          In this article, we'll explore three powerful patterns: Compound
          Components, Render Props, and Custom Hooks, with practical examples
          that you can start using today.
        </p>
      </section>

      {/* Compound Components */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          1. Compound Components Pattern
        </h2>
        <p className="mb-4">
          Compound components provide a flexible and expressive way to build
          components that share state while maintaining a clean API. Think of
          them like HTML's select and option tags working together.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-4">
            Example: Custom Select Component
          </h3>
          <pre className="language-typescript rounded-lg bg-gray-200 dark:bg-zinc-900 p-4 overflow-x-auto">
            <code>{`
// Select.tsx
const SelectContext = React.createContext<any>(null);

const Select = ({ children, onValueChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <SelectContext.Provider value={{ isOpen, setIsOpen, selectedValue, setSelectedValue }}>
      <div className="select-container">
        {children}
      </div>
    </SelectContext.Provider>
  );
};

Select.Trigger = () => {
  const { selectedValue, setIsOpen } = useContext(SelectContext);
  return (
    <button onClick={() => setIsOpen(true)}>
      {selectedValue || 'Select...'}
    </button>
  );
};

Select.Options = ({ children }) => {
  const { isOpen } = useContext(SelectContext);
  return isOpen ? <div className="options">{children}</div> : null;
};

Select.Option = ({ value, children }) => {
  const { setSelectedValue, setIsOpen } = useContext(SelectContext);
  return (
    <div onClick={() => {
      setSelectedValue(value);
      setIsOpen(false);
    }}>
      {children}
    </div>
  );
};
            `}</code>
          </pre>
        </div>
      </section>

      {/* Render Props Pattern */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          2. Render Props Pattern
        </h2>
        <p className="mb-4">
          Render Props is a pattern that allows components to share code by
          passing a function as a prop that returns a React element. This
          pattern is particularly useful for cross-cutting concerns like data
          fetching or state management.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-4">
            Example: Mouse Position Tracker
          </h3>
          <pre className="language-typescript rounded-lg bg-gray-200 dark:bg-zinc-900 p-4 overflow-x-auto">
            <code>{`
const MouseTracker = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return render(position);
};

// Usage
<MouseTracker
  render={({ x, y }) => (
    <div>
      Mouse position: {x}, {y}
    </div>
  )}
/>
            `}</code>
          </pre>
        </div>
      </section>

      {/* Custom Hooks Pattern */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          3. Custom Hooks Pattern
        </h2>
        <p className="mb-4">
          Custom Hooks allow you to extract component logic into reusable
          functions. They're the most flexible way to share stateful logic
          between components without adding more components to your tree.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-4">
            Example: useLocalStorage Hook
          </h3>
          <pre className="language-typescript rounded-lg bg-gray-200 dark:bg-zinc-900 p-4 overflow-x-auto">
            <code>{`
const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
};

// Usage
const [theme, setTheme] = useLocalStorage('theme', 'light');
            `}</code>
          </pre>
        </div>
      </section>

      {/* Further Reading */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Further Reading and Resources
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a
              href="https://reactpatterns.com/"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              React Patterns Official Documentation
            </a>
          </li>
          <li>
            <a
              href="https://kentcdodds.com/blog/compound-components-with-react-hooks"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Kent C. Dodds: Compound Components with React Hooks
            </a>
          </li>
          <li>
            <a
              href="https://www.patterns.dev/react"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Patterns.dev - React Patterns
            </a>
          </li>
          <li>
            <a
              href="https://usehooks.com/"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              useHooks - Collection of Custom React Hooks
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
