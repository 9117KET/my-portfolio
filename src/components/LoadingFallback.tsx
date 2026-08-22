/** Full-screen spinner shown while a lazily-loaded route chunk resolves. */
export default function LoadingFallback() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-surface transition-colors duration-200">
      <div
        className="h-12 w-12 animate-spin rounded-full border-b-2 border-primary"
        role="status"
        aria-label="Loading"
      ></div>
    </div>
  );
}
