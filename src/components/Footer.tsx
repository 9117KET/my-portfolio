import { contacts } from "../utils/constants";

type FooterLink = {
  id: string;
  name: string;
  link: string;
};

function pickFooterLinks(all: FooterLink[]): FooterLink[] {
  const preferred = new Set(["github", "linkedin", "email"]);
  const picked = all.filter((c) => preferred.has(c.id));
  return picked.length > 0 ? picked : all.slice(0, 3);
}

export default function Footer() {
  const links = pickFooterLinks(contacts);

  return (
    <footer className="w-full border-t border-outline-variant/30 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <div className="text-primary font-bold tracking-tighter">
            <span className="text-primary/70">{`<`}</span>KET
            <span className="text-primary/70">{`/>`}</span>
          </div>
          <p className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant mt-2">
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
              className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 rounded"
            >
              {l.name}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

