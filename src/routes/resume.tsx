import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";

const resumeFile = "/Laxman_Acharya_Resume.pdf";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume | Laxman Acharya" },
      {
        name: "description",
        content: "View and download Laxman Acharya's software engineering resume.",
      },
      { property: "og:title", content: "Resume | Laxman Acharya" },
      {
        property: "og:description",
        content: "Laxman Acharya's software engineering resume.",
      },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <main className="flex min-h-dvh flex-col bg-paper-deep text-ink">
      <header className="border-b border-rule bg-paper/95 px-4 py-3 backdrop-blur sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft transition hover:text-accent sm:text-[11px]"
          >
            <ArrowLeft className="size-4 transition group-hover:-translate-x-0.5" />
            Back to portfolio
          </Link>

          <div className="flex items-center gap-2">
            <a
              href={resumeFile}
              target="_blank"
              rel="noreferrer"
              className="inline-flex size-10 items-center justify-center rounded-full border border-ink/12 text-ink-soft transition hover:border-accent hover:bg-accent hover:text-paper sm:hidden"
              aria-label="Open resume PDF"
              title="Open PDF"
            >
              <ExternalLink className="size-4" />
            </a>
            <a
              href={resumeFile}
              download="Laxman_Acharya_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-ink px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.14em] text-paper transition hover:-translate-y-0.5 hover:bg-accent sm:text-[10px]"
            >
              <Download className="size-3.5" />
              Download
            </a>
          </div>
        </div>
      </header>

      <section className="flex flex-1 flex-col px-2 py-2 sm:px-4 sm:py-4 lg:px-8">
        <h1 className="sr-only">Laxman Acharya's resume</h1>
        <div className="mx-auto flex min-h-[calc(100dvh-5.5rem)] w-full max-w-[1400px] flex-1 overflow-hidden rounded-xl border border-ink/10 bg-white shadow-[0_20px_70px_rgba(20,15,12,0.12)] sm:rounded-2xl">
          <iframe
            src={`${resumeFile}#view=FitH`}
            title="Laxman Acharya resume"
            className="min-h-[calc(100dvh-5.5rem)] w-full flex-1 border-0 bg-white"
          />
        </div>
      </section>
    </main>
  );
}
