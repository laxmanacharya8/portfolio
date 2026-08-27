import { ClientOnly, createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Download } from "lucide-react";
import { lazy, Suspense } from "react";

const resumeFile = "/resume.pdf";
const resumePreview = "/Laxman_Acharya_Resume_Preview.webp";
const ResumePdfViewer = lazy(() =>
  import("@/components/resume/ResumePdfViewer").then((module) => ({
    default: module.ResumePdfViewer,
  })),
);

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume | Laxman Acharya" },
      {
        name: "description",
        content: "View and download Laxman Acharya's hardware and systems engineering resume.",
      },
      { property: "og:title", content: "Resume | Laxman Acharya" },
      {
        property: "og:description",
        content: "Laxman Acharya's hardware and systems engineering resume.",
      },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <main className="flex h-dvh flex-col overflow-hidden bg-[#0b0b0b] text-white">
      <header className="relative z-10 flex h-14 shrink-0 items-center border-b border-white/10 bg-[#111] px-3 sm:px-5">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-3">
          <Link
            to="/"
            className="group inline-flex h-10 items-center gap-2 rounded-full px-3 font-mono text-[9px] uppercase tracking-[0.14em] text-white/70 transition hover:bg-white/10 hover:text-white sm:text-[10px]"
          >
            <ArrowLeft className="size-4 transition group-hover:-translate-x-0.5" />
            Portfolio
          </Link>

          <a
            href={resumeFile}
            download="Laxman_Acharya_Resume.pdf"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-4 font-mono text-[9px] uppercase tracking-[0.14em] text-black transition hover:-translate-y-0.5 hover:bg-[#f0f0f0] sm:text-[10px]"
          >
            <Download className="size-3.5" />
            PDF
          </a>
        </div>
      </header>

      <section className="flex min-h-0 flex-1 items-start justify-center overflow-auto p-2 sm:p-4">
        <h1 className="sr-only">Laxman Acharya's resume</h1>
        <ClientOnly fallback={<ResumePreview />}>
          <Suspense fallback={<ResumePreview />}>
            <ResumePdfViewer file={resumeFile} />
          </Suspense>
        </ClientOnly>
      </section>
    </main>
  );
}

function ResumePreview() {
  return (
    <img
      src={resumePreview}
      alt="Laxman Acharya hardware and systems engineering resume"
      width={1530}
      height={1980}
      className="block h-auto w-full max-w-[1000px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
    />
  );
}
