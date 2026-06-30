import type { Achievement } from "@/data/portfolio";
import { useReveal } from "@/hooks/useReveal";

export function AchievementCard({ a, index }: { a: Achievement; index: number }) {
  const { ref, visible } = useReveal();
  const n = String(index + 1).padStart(2, "0");

  return (
    <article
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} grid grid-cols-12 gap-x-8 gap-y-4 border-t border-rule py-8 first:border-t-0`}
    >
      <div className="col-span-12 md:col-span-3">
        <div className="text-[13px] text-ink-mute">{n}</div>
        <div className="mt-1 text-[13px] text-ink">{a.date}</div>
        {a.team ? (
          <div className="mt-3 text-[13px] text-ink-soft">
            Team <span className="text-ink">{a.team}</span>
          </div>
        ) : null}
        {a.location ? (
          <div className="mt-1 text-[13px] text-ink-soft">{a.location}</div>
        ) : null}
        <div className="mt-3 text-[12px] text-accent">{a.badges[0]}</div>
      </div>

      <div className="col-span-12 md:col-span-9">
        <h3 className="max-w-3xl text-[22px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink md:text-[28px]">
          {a.title}
        </h3>
        <p className="mt-3 max-w-3xl text-[15px] leading-[1.65] text-ink-soft">
          {a.description}
        </p>

        {a.stats ? (
          <dl className="mt-5 flex flex-wrap gap-x-10 gap-y-4">
            {a.stats.map((s) => (
              <div key={s.label}>
                <dd className="text-[20px] font-semibold leading-none text-ink">
                  {s.value}
                </dd>
                <dt className="mt-1.5 text-[12px] text-ink-mute">{s.label}</dt>
              </div>
            ))}
          </dl>
        ) : null}

        {a.teamMembers ? (
          <p className="mt-5 text-[13.5px] text-ink-soft">
            <span className="text-ink-mute">Credits — </span>
            {a.teamMembers.join(", ")}
          </p>
        ) : null}
      </div>
    </article>
  );
}
