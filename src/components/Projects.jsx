import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Globe, Smartphone } from "lucide-react";
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

function ImageSlider({ images, alt, perView = 1 }) {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(images.length / perView);

  const prev = () => setPage((p) => (p - 1 + pageCount) % pageCount);
  const next = () => setPage((p) => (p + 1) % pageCount);

  const visible = images.slice(page * perView, page * perView + perView);

  return (
    <div className="absolute inset-0 overflow-hidden bg-ink">
      <div className="flex h-full gap-1">
        {visible.map((src, i) => (
          <div key={`${page}-${i}`} className="h-full flex-1 min-w-0 flex items-center justify-center bg-surface-2">
            <img src={src} alt={alt} className="h-full w-full object-contain" />
          </div>
        ))}
      </div>

      {pageCount > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-iris text-white border border-iris shadow-lg shadow-black/40 hover:bg-violet-deep hover:border-violet-deep transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-iris text-white border border-iris shadow-lg shadow-black/40 hover:bg-violet-deep hover:border-violet-deep transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === page ? "w-5 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectCard({ project, gradient }) {
  const isMobile = project.type === "mobile";

  return (
    <article className="h-full min-h-[26rem] sm:min-h-[28rem] glow-card rounded-2xl overflow-hidden flex flex-col sm:flex-row hover:border-violet-glow/40 transition-colors">
      <div className="sm:w-[38%] shrink-0 p-5 flex flex-col gap-3">
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

        <h3 className="font-display font-semibold text-white text-base leading-snug">{project.name}</h3>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-md bg-violet-glow/10 border border-violet-glow/20 px-2 py-1 text-[11px] text-mist/85"
            >
              {s}
            </span>
          ))}
        </div>

        <p className="text-sm text-mist/70 leading-relaxed">{project.description}</p>

        {project.links?.length > 0 && (
          <div className="mt-auto flex flex-col gap-1.5 pt-2">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-mist/60">
              {isMobile ? "Get the app" : "View live project"}
            </span>
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
        )}
      </div>

      <div className="sm:w-[62%] relative min-h-[16rem]">
        {project.images?.length > 0 ? (
          <ImageSlider images={project.images} alt={project.name} perView={isMobile ? 2 : 1} />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} flex items-center justify-center`}
          >
            <span className="font-display font-extrabold text-4xl text-white/90 tracking-tight">
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
