import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/portfolio";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#attitude", label: "How I Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/80 backdrop-blur-md border-b border-violet-glow/10" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-display font-semibold text-lg tracking-tight text-white">
          {profile.name.split(" ")[0]} <span className="text-gradient">{profile.name.split(" ").slice(1).join(" ")}</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-mist/90">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-iris to-fuchsia-glow px-5 py-2 text-sm font-medium text-white shadow-lg shadow-violet-deep/30 hover:scale-105 transition-transform"
        >
          Let's talk
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-surface/95 backdrop-blur-md border-t border-violet-glow/10 px-6 py-4">
          <ul className="flex flex-col gap-4 text-mist">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
