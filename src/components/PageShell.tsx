import { type ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

export default function PageShell({
  children,
  className = "",
}: PageShellProps) {
  return (
    <div className={"min-h-screen bg-surface " + className}>
      <div className="sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <Navbar />
        </div>
      </div>

      <main id="main-content" className="max-w-7xl mx-auto px-6 sm:px-8 pt-10 pb-24">
        {children}
      </main>

      <Footer />
    </div>
  );
}

