import { ArrowRight, Mail } from "lucide-react";
import GithubMark from "./icons/GithubMark";
import profileImg from "../assets/profile.jpeg";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="pointer-events-none absolute inset-0 noise opacity-30" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[560px] w-[560px] rounded-full bg-violet-glow/25 blur-[140px]" />
      <div className="pointer-events-none absolute top-40 -right-40 h-[420px] w-[420px] rounded-full bg-fuchsia-glow/20 blur-[130px]" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-glow/30 bg-violet-glow/10 px-4 py-1.5 text-xs font-medium tracking-wide text-mist">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-glow animate-pulse" />
            Open to new opportunities
          </span>

          <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-white">
            Building sleek, reliable
            <br />
            <span className="text-gradient">web &amp; mobile products.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base md:text-lg text-mist/85 leading-relaxed">
            I'm {profile.name}, a {profile.role.toLowerCase()} based in {profile.location}. {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-iris to-fuchsia-glow px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-deep/40 hover:shadow-violet-deep/60 hover:scale-[1.03] transition-all"
            >
              View my work
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-violet-glow/30 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-violet-glow/10 transition-colors"
            >
              <Mail size={16} />
              Get in touch
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-mist/80 hover:text-white transition-colors"
            >
              <GithubMark size={18} />
              GitHub
            </a>
          </div>

          <div className="mt-14 flex items-center gap-10">
            <div>
              <p className="font-display text-2xl font-bold text-white">7+</p>
              <p className="text-xs text-mist/70 mt-1">Years experience</p>
            </div>
            <div className="h-8 w-px bg-violet-glow/20" />
            <div>
              <p className="font-display text-2xl font-bold text-white">20+</p>
              <p className="text-xs text-mist/70 mt-1">Projects shipped</p>
            </div>
            <div className="h-8 w-px bg-violet-glow/20" />
            <div>
              <p className="font-display text-2xl font-bold text-white">3</p>
              <p className="text-xs text-mist/70 mt-1">Countries served</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto md:ml-auto">
          <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-iris via-violet-glow to-fuchsia-glow blur-2xl opacity-40 scale-105" />
          <div className="relative rounded-[2.5rem] p-1.5 bg-gradient-to-br from-violet-glow/60 via-iris/40 to-fuchsia-glow/60">
            <div className="rounded-[2.2rem] overflow-hidden bg-surface w-64 h-80 sm:w-72 sm:h-[23rem]">
              <img
                src={profileImg}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
