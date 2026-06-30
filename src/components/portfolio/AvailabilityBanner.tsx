import { socials } from "@/data/portfolio";

const slots = [
  {
    n: "i.",
    title: "Software engineering internships",
    body: "Summer / part-time roles in health-tech, dev tools, or applied AI. Comfortable across web, mobile, and small backends.",
  },
  {
    n: "ii.",
    title: "Hackathons & build sprints",
    body: "Open to teaming up — especially around digital public goods, accessibility, and open-source health.",
  },
  {
    n: "iii.",
    title: "Undergraduate research",
    body: "Happy to co-author or contribute to research in digital health, language technology, and OSS sustainability.",
  },
];

export function AvailabilityBanner() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1240px] px-6 py-20 md:py-28 lg:px-10">
        <div className="grid grid-cols-12 gap-x-8 border-t border-ink/85 pt-8">
          <div className="col-span-12 mb-6 flex items-center justify-between">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink">
              § 05 — Editor's note
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
              Summer 2026 onward
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <p className="font-display text-[28px] font-bold leading-[1.15] tracking-[-0.015em] text-ink md:text-[38px]">
              <span className="text-accent">“</span>I'm looking for the kind of team that lets a
              junior engineer ship to real users in the first month — and is honest about what that
              takes.
              <span className="text-accent">”</span>
            </p>

            <p className="font-mono mt-5 text-[11px] uppercase tracking-[0.22em] text-ink-mute">
              — Laxman, on what he wants next
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={`mailto:${socials.email}?subject=Internship%20opportunity`}
                className="group font-sans inline-flex items-center gap-2 bg-ink px-5 py-3 text-[13px] text-paper transition hover:bg-accent"
              >
                Write me about an internship
                <span aria-hidden className="transition group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#work"
                className="font-sans border-b border-ink/60 pb-0.5 text-[13px] text-ink transition hover:border-accent hover:text-accent"
              >
                Re-read the work
              </a>
            </div>

            <dl className="font-mono mt-10 grid grid-cols-2 gap-y-4 border-t border-rule pt-5 text-[11px] text-ink-mute sm:grid-cols-3">
              <div>
                <dt className="uppercase tracking-[0.18em]">Location</dt>
                <dd className="mt-1 text-ink">Kathmandu, Nepal</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em]">Timezone</dt>
                <dd className="mt-1 text-ink">UTC+5:45</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em]">Work mode</dt>
                <dd className="mt-1 text-ink">Remote · Hybrid · On-site</dd>
              </div>
            </dl>
          </div>

          <aside className="col-span-12 mt-10 md:col-span-5 md:mt-0 md:border-l md:border-rule md:pl-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
              Currently open to
            </div>
            <ul className="mt-4">
              {slots.map((s) => (
                <li
                  key={s.title}
                  className="grid grid-cols-[2rem_1fr] gap-3 border-b border-rule-soft py-4 last:border-b-0"
                >
                  <span className="font-mono pt-1 text-[10px] uppercase tracking-[0.2em] text-ink-mute">
                    {s.n}
                  </span>
                  <div>
                    <div className="font-display text-[18px] font-bold tracking-[-0.01em] leading-snug text-ink">
                      {s.title}
                    </div>
                    <p className="mt-1.5 font-sans text-[13.5px] leading-relaxed text-ink-soft">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
