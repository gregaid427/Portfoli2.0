import { ExternalLink, Globe, Smartphone } from "lucide-react";
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

function WebGallery({ images, alt }) {
  const [hero, ...rest] = images.slice(0, 3);

  return (
    <div>
      <div className="rounded-xl overflow-hidden border border-violet-glow/20">
        <img src={hero} alt={alt} className="w-full h-auto" />
      </div>
      {rest.length > 0 && (
        <div className="mt-2 grid grid-cols-2 gap-2">
          {rest.map((src) => (
            <div key={src} className="rounded-lg overflow-hidden border border-violet-glow/20">
              <img src={src} alt={alt} className="w-full h-auto" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileGallery({ images, alt }) {
  return (
    <div className="flex flex-wrap gap-2">
      {images.slice(0, 4).map((src) => (
        <div key={src} className="w-36 sm:w-40 rounded-xl overflow-hidden border border-violet-glow/20">
          <img src={src} alt={alt} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ project, gradient }) {
  const isMobile = project.type === "mobile";
  const hasImages = project.images?.length > 0;

  return (
    <article className="glow-card rounded-2xl p-6 flex flex-col sm:flex-row gap-6 hover:border-violet-glow/40 transition-colors">
      <div className="sm:w-[33%] shrink-0">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-violet-glow/10 border border-violet-glow/20 px-2.5 py-1 text-[11px] font-medium text-mist/85">
            {isMobile ? <Smartphone size={12} /> : <Globe size={12} />}
            {isMobile ? "Mobile" : "Web"}
          </span>
          {isMobile && (
            <span className="inline-flex w-fit items-center gap-1 rounded-full bg-violet-glow/10 border border-violet-glow/20 px-2.5 py-1 text-[11px] font-medium text-mist/85">
              iOS &amp; Android
            </span>
          )}
        </div>

        <h3 className="mt-3 font-display font-semibold text-white text-lg leading-snug">{project.name}</h3>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-md bg-violet-glow/10 border border-violet-glow/20 px-2 py-1 text-[11px] text-mist/85"
            >
              {s}
            </span>
          ))}
        </div>

        <p className="mt-3 text-sm text-mist/70 leading-relaxed max-w-2xl">{project.description}</p>

        {project.links?.length > 0 && (
          <div className="mt-3 flex flex-col gap-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-mist/60">
              {isMobile ? "Get the app" : "View live project"}
            </span>
            <div className="flex flex-wrap gap-x-5 gap-y-1.5">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-white underline decoration-violet-glow/60 decoration-2 underline-offset-2 hover:decoration-fuchsia-glow hover:text-fuchsia-glow transition-colors"
                >
                  {link.label}
                  <ExternalLink size={13} />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="sm:w-[67%] min-w-0">
        {hasImages ? (
          isMobile ? (
            <MobileGallery images={project.images} alt={project.name} />
          ) : (
            <WebGallery images={project.images} alt={project.name} />
          )
        ) : (
          <div
            className={`h-40 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}
          >
            <span className="font-display font-extrabold text-3xl text-white/90 tracking-tight">
              {initials(project.name)}
            </span>
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-violet-glow uppercase">Work</p>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-white">Selected projects</h2>
          <p className="mt-4 text-mist/75">
            Web platforms and their mobile counterparts, shipped for clients across fintech, education,
            tourism, and faith-based organizations — including publishing apps to the App Store and Play
            Store myself.
          </p>
        </div>
      </div>

      <div className="mt-14 max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={`${project.name}-${project.type}`}
              project={project}
              gradient={GRADIENTS[i % GRADIENTS.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
