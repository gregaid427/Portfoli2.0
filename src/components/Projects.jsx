import { Smartphone, Globe } from "lucide-react";
import { projects } from "../data/portfolio";

function initials(name) {
  return name
    .split(" ")
    .filter((w) => w[0] && w[0] === w[0].toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const GRADIENTS = [
  "from-iris to-fuchsia-glow",
  "from-violet-deep to-violet-glow",
  "from-fuchsia-glow to-iris",
  "from-violet-glow to-violet-deep",
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-violet-glow uppercase">Work</p>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-white">Selected projects</h2>
          <p className="mt-4 text-mist/75">
            A cross-section of web platforms and mobile apps shipped for clients across fintech, health,
            education, and non-profit work.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <article
              key={project.name}
              className="group glow-card rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:border-violet-glow/45 transition-all duration-300 flex flex-col"
            >
              <div
                className={`relative h-36 bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]} flex items-center justify-center`}
              >
                <span className="font-display font-extrabold text-4xl text-white/90 tracking-tight">
                  {initials(project.name)}
                </span>
                <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-ink/40 backdrop-blur-sm px-2.5 py-1 text-[11px] text-white/90 font-medium">
                  {project.mobile ? <Smartphone size={12} /> : <Globe size={12} />}
                  {project.mobile ? "Mobile + Web" : "Web"}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display font-semibold text-white text-base">{project.name}</h3>
                <p className="mt-2 text-sm text-mist/70 leading-relaxed flex-1">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-violet-glow/10 border border-violet-glow/20 px-2 py-1 text-[11px] text-mist/85"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
