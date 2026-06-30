import { achievements } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { AchievementCard } from "./AchievementCard";

export function AchievementTimeline() {
  return (
    <section id="dispatches" className="relative">
      <div className="mx-auto max-w-[1240px] px-6 py-20 md:py-24 lg:px-10">
        <SectionHeader
          number="02"
          kicker="Achievements"
          title="Work that survived"
          titleAccent="outside the classroom."
          intro="Awards, presentations, and public-health rooms where the work had to be clear enough for people beyond the codebase."
          meta={`${achievements.length} entries · 2025–2026`}
        />
        <div className="mt-10">
          {achievements.map((a, i) => (
            <AchievementCard key={a.id} a={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
