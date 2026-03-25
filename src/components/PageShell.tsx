import { type ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type CurrentNav =
  | "about"
  | "projects"
  | "experience"
  | "misc"
  | "blog"
  | "notfound";

interface PageShellProps {
  children: ReactNode;
  current: CurrentNav;
  className?: string;
}

export default function PageShell({
  children,
  current,
  className = "",
}: PageShellProps) {
  return (
    <div className={"min-h-screen bg-surface " + className}>
      <div className="sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <Navbar clicked={current} />
        </div>
      </div>

      <main id="main-content" className="max-w-7xl mx-auto px-6 sm:px-8 pt-10 pb-24">
        {children}
      </main>

      <Footer />
    </div>
  );
}

