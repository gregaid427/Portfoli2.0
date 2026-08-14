import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import GithubMark from "./icons/GithubMark";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-surface/40">
      <div className="pointer-events-none absolute inset-0 noise opacity-20" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full bg-violet-glow/15 blur-[140px]" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-violet-glow uppercase">Contact</p>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-white">
            Let's build something together.
          </h2>
          <p className="mt-4 text-mist/75 max-w-md">
            Have a project, a role, or just want to talk shop about fintech apps or AI-assisted dev
            workflows? My inbox is open.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm text-mist/85 hover:text-white transition-colors"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-glow/10 border border-violet-glow/20">
                <Mail size={16} />
              </span>
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-sm text-mist/85 hover:text-white transition-colors"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-glow/10 border border-violet-glow/20">
                <Phone size={16} />
              </span>
              {profile.phone}
            </a>
            <div className="flex items-center gap-3 text-sm text-mist/85">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-glow/10 border border-violet-glow/20">
                <MapPin size={16} />
              </span>
              {profile.location}
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-mist/85 hover:text-white transition-colors"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-glow/10 border border-violet-glow/20">
                <GithubMark size={16} />
              </span>
              github.com/gregaid427
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glow-card rounded-2xl p-7 space-y-5">
          <div>
            <label className="text-xs text-mist/70" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-1.5 w-full rounded-lg bg-ink/60 border border-violet-glow/20 px-4 py-2.5 text-sm text-white placeholder:text-mist/40 focus:outline-none focus:border-violet-glow/60 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-xs text-mist/70" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1.5 w-full rounded-lg bg-ink/60 border border-violet-glow/20 px-4 py-2.5 text-sm text-white placeholder:text-mist/40 focus:outline-none focus:border-violet-glow/60 transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-xs text-mist/70" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="mt-1.5 w-full rounded-lg bg-ink/60 border border-violet-glow/20 px-4 py-2.5 text-sm text-white placeholder:text-mist/40 focus:outline-none focus:border-violet-glow/60 transition-colors resize-none"
              placeholder="Tell me about the project…"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-iris to-fuchsia-glow px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-deep/40 hover:scale-[1.02] transition-transform"
          >
            Send message
            <Send size={15} />
          </button>
        </form>
      </div>
    </section>
  );
}
