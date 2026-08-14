import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-surface/40">
      <div className="pointer-events-none absolute inset-0 noise opacity-20" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-violet-glow uppercase">Stack</p>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-white">
            Skills &amp; technologies
          </h2>
          <p className="mt-4 text-mist/75">
            The tools I reach for most, from interface to infrastructure — including AI-assisted coding as
            part of the everyday workflow.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="glow-card rounded-2xl p-6 hover:-translate-y-1 hover:border-violet-glow/40 transition-all duration-300"
            >
              <h3 className="font-display font-semibold text-white text-lg">{group.title}</h3>
              <p className="mt-1.5 text-sm text-mist/65">{group.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-violet-glow/10 border border-violet-glow/20 px-3 py-1.5 text-xs text-mist/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
