import { projects } from "@/data/portfolio";
import { useGithubRepos } from "@/hooks/useGithubRepos";
import { SectionHeader } from "./SectionHeader";
import { ProjectCard } from "./ProjectCard";

export function SelectedWork() {
  const github = useGithubRepos();
  const syncedProjects = projects.map((project) => {
    const repoName = project.github.split("/").pop()?.toLowerCase();
    const repo = github.repos.find((item) => item.name.toLowerCase() === repoName);

    if (!repo) return project;

    const language =
      repo.language && !project.tech.includes(repo.language)
        ? [repo.language, ...project.tech]
        : project.tech;

    return {
      ...project,
      description: repo.description?.trim() || project.description,
      tech: language,
      year: new Date(repo.updated_at).getFullYear().toString(),
      github: repo.html_url,
    };
  });

  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-[1240px] px-6 py-20 md:py-24 lg:px-10">
        <SectionHeader
          number="03"
          kicker="Selected work"
          title="Small products with"
          titleAccent="a real reason to exist."
          intro="Language access, family health tracking, civic response systems, and claim validation — built as practical software, not portfolio props."
          meta={`${projects.length} projects · ${
            github.status === "ok" ? "synced with GitHub" : "2025–2026"
          }`}
        />
        <div
          className={`mobile-project-scroll project-marquee-window relative mt-10 snap-x snap-mandatory overflow-x-auto py-2 transition-opacity duration-500 sm:snap-none sm:overflow-hidden ${
            github.status === "loading" ? "opacity-90" : "opacity-100"
          }`}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-12 bg-gradient-to-r from-paper to-transparent sm:block md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-12 bg-gradient-to-l from-paper to-transparent sm:block md:w-24" />

          <div className="project-marquee-track flex w-max">
            {[0, 1].map((cycle) => (
              <div
                key={cycle}
                aria-hidden={cycle === 1}
                inert={cycle === 1}
                className={`${cycle === 1 ? "hidden sm:flex" : "flex"} gap-5 pr-5`}
              >
                {syncedProjects.map((project, index) => (
                  <ProjectCard
                    key={`${cycle}-${project.id}`}
                    p={project}
                    index={index}
                    forceVisible
                    className="min-h-[410px] w-[min(82vw,460px)] shrink-0 snap-start sm:w-[460px]"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-ink-mute">
          <span className="sm:hidden">Swipe through projects</span>
          <span className="hidden sm:inline">Projects move continuously</span>
          <span className="hidden sm:inline">Hover to pause</span>
        </div>
      </div>
    </section>
  );
}
