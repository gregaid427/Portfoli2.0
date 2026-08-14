import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-violet-glow/10 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mist/50">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.</p>
        <div className="flex items-center gap-6">
          <a href="#top" className="hover:text-mist transition-colors">Back to top</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-mist transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
