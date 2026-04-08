import { contacts } from "../utils/constants";

type FooterLink = {
  id: string;
  name: string;
  link: string;
};

function pickFooterLinks(all: FooterLink[]): FooterLink[] {
  const preferred = new Set(["github", "linkedin", "website", "email"]);
  const picked = all.filter((c) => preferred.has(c.id));
  return picked.length > 0 ? picked : all.slice(0, 3);
}

export default function Footer() {
  const links = pickFooterLinks(contacts);

  return (
    <footer className="w-full border-t border-white/5 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <div className="text-teal-300 font-bold tracking-tighter">
            <span className="text-teal-200">{`<`}</span>KET
            <span className="text-teal-200">{`/>`}</span>
          </div>
          <p className="font-mono text-[10px] tracking-widest uppercase text-slate-500 mt-2">
            © {new Date().getFullYear()}
          </p>
        </div>

        <nav aria-label="Footer links" className="flex gap-10">
          {links.map((l) => (
            <a
              key={l.id}
              href={l.link}
              target={l.link.startsWith("http") ? "_blank" : undefined}
              rel={l.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-mono text-[10px] tracking-widest uppercase text-slate-400 hover:text-teal-300 transition-colors opacity-80 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary/40 rounded"
            >
              {l.name}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

