import { CheckCircle2 } from "lucide-react";
import { workAttitude } from "../data/portfolio";

export default function WorkAttitude() {
  return (
    <section id="attitude" className="relative py-24 md:py-32 bg-surface/40">
      <div className="pointer-events-none absolute inset-0 noise opacity-20" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-violet-glow uppercase">Approach</p>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-white">How I work</h2>
          <p className="mt-4 text-mist/75">
            Technical skill is table stakes — this is the working style behind it.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {workAttitude.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 glow-card rounded-2xl p-5 hover:border-violet-glow/40 transition-colors"
            >
              <CheckCircle2 className="shrink-0 text-violet-glow mt-0.5" size={22} />
              <div>
                <h3 className="font-display font-semibold text-white text-base">{item.title}</h3>
                <p className="mt-1.5 text-sm text-mist/70 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
