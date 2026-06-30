import { Github } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { useReveal } from "@/hooks/useReveal";

const KIND_LABEL: Record<Project["accent"], string> = {
  language: "Language access",
  health: "Digital health",
  systems: "Systems",
  finance: "Student finance",
};

export function ProjectCard({
  p,
  index,
  className = "",
  forceVisible = false,
}: {
  p: Project;
  index: number;
  className?: string;
  forceVisible?: boolean;
}) {
  const { ref, visible } = useReveal();
  const n = String(index + 1).padStart(2, "0");

  return (
    <article
      ref={ref}
      className={`${forceVisible ? "" : `reveal ${visible ? "is-visible" : ""}`} group flex flex-col rounded-[20px] border border-rule bg-paper p-6 transition hover:border-ink/25 hover:bg-paper-raised/60 ${className}`}
    >
      <div className="flex items-center justify-between text-[12px] text-ink-mute">
        <span>
          {n} · {KIND_LABEL[p.accent]}
        </span>
        <span>{p.year}</span>
      </div>

      <h3 className="mt-6 text-[26px] font-semibold leading-[1.1] tracking-[-0.015em] text-ink md:text-[30px]">
        {p.title}
      </h3>
      <p className="mt-1.5 text-[13.5px] text-ink-mute">{p.type}</p>

      <p className="mt-5 text-[15px] leading-[1.6] text-ink-soft">{p.description}</p>

      <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5 text-[13px] text-ink-soft">
        {p.tech.map((t, i) => (
          <span key={t}>
            {t}
            {i < p.tech.length - 1 ? <span className="ml-3 text-ink-mute">·</span> : null}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-rule pt-5">
        <a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-ink transition hover:text-accent"
        >
          <Github className="h-3.5 w-3.5" />
          Source
          <span aria-hidden>→</span>
        </a>
        <span className="text-[12px] text-ink-mute">{p.caseStudyLabel}</span>
      </div>
    </article>
  );
}
