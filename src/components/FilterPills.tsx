interface FilterPillsProps {
  categories: readonly string[];
  selected: string;
  onSelect: (category: string) => void;
  /** Used in each pill's accessible name, e.g. "Filter projects by AI/ML". */
  noun: string;
  label?: string;
}

/**
 * Shared category filter row. Previously each page rolled its own, so the
 * pills were rounded-lg on two pages and rounded-full on the other two.
 */
export default function FilterPills({
  categories,
  selected,
  onSelect,
  noun,
  label = "Filter by category",
}: FilterPillsProps) {
  return (
    <div className="mb-8">
      <p className="font-label text-xs uppercase tracking-[0.25em] text-on-surface-variant mb-3">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = selected === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onSelect(category)}
              aria-label={`Filter ${noun} by ${category}`}
              aria-pressed={isActive}
              className={`cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                isActive
                  ? "border-primary bg-primary text-on-primary"
                  : "border-outline-variant/40 bg-surface-container-low text-on-surface-variant hover:border-primary/40 hover:bg-surface-container-high"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
