import { Briefcase } from "lucide-react";
import { experience, education, certifications } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.4fr_1fr] gap-16">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-violet-glow uppercase">Journey</p>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-white">Experience</h2>

          <div className="mt-12 relative pl-8 border-l border-violet-glow/20 space-y-10">
            {experience.map((job) => (
              <div key={job.role + job.period} className="relative">
                <span className="absolute -left-[2.35rem] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-iris to-fuchsia-glow">
                  <Briefcase size={12} className="text-white" />
                </span>
                <p className="text-xs text-mist/60">{job.period}</p>
                <h3 className="mt-1 font-display font-semibold text-white text-lg">{job.role}</h3>
                <ul className="mt-3 space-y-1.5">
                  {job.points.map((p) => (
                    <li key={p} className="text-sm text-mist/70 leading-relaxed">
                      · {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-violet-glow uppercase">Education</p>
            <div className="mt-6 space-y-5">
              {education.map((e) => (
                <div key={e.title} className="glow-card rounded-xl p-4">
                  <h4 className="font-display font-semibold text-white text-sm">{e.title}</h4>
                  <p className="mt-1 text-xs text-mist/70">{e.place}</p>
                  <p className="mt-1 text-xs text-mist/50">{e.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-violet-glow uppercase">Certifications</p>
            <ul className="mt-6 space-y-3">
              {certifications.map((c) => (
                <li key={c.label} className="text-sm text-mist/75 flex gap-2">
                  <span className="text-violet-glow">›</span>
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white underline decoration-violet-glow/40 underline-offset-2 transition-colors"
                    >
                      {c.label}
                    </a>
                  ) : (
                    c.label
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
