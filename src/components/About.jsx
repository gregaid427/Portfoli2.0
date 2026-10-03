import { Cloud, Code2, Smartphone, Sparkles } from "lucide-react";
import { profile } from "../data/portfolio";

const PILLARS = [
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    description: "React front ends paired with Node/Express and PHP back ends, wired to MySQL, MongoDB, or PostgreSQL.",
  },
  {
    icon: Smartphone,
    title: "Mobile Delivery",
    description:
      "Cross-platform apps in Flutter/Dart, shipped for real banking and survey products across three countries — including publishing to the App Store and Play Store myself.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "AWS Certified Cloud Practitioner — comfortable configuring servers, VPCs, and RDS to get apps running reliably in production.",
  },
  {
    icon: Sparkles,
    title: "AI-Augmented Workflow",
    description: "I fold AI tools like Claude into the coding loop — for scaffolding, review, and moving faster without cutting corners.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-violet-glow uppercase">About</p>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-white leading-tight">
              Hi, I'm {profile.name.split(" ")[0]} — nice to meet you.
            </h2>
            <p className="mt-6 text-mist/80 leading-relaxed">{profile.summary}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Ghana 🇬🇭", "Remote-friendly"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-violet-glow/25 bg-violet-glow/5 px-4 py-1.5 text-xs text-mist/85"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {PILLARS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="glow-card rounded-2xl p-5 hover:border-violet-glow/40 transition-colors"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-iris to-fuchsia-glow mb-4">
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="font-display font-semibold text-white text-base">{title}</h3>
                <p className="mt-2 text-sm text-mist/70 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
