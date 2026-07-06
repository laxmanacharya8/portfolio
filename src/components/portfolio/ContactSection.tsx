import { ArrowUpRight, FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { socials } from "@/data/portfolio";

const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  socials.email,
)}`;

const openTo = ["Software engineering internships", "Hackathon teams", "Undergraduate research"];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="dia-stage dia-noise relative isolate scroll-mt-24 overflow-hidden border-t border-rule bg-paper-deep text-ink"
    >
      <div className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-accent/8 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-ink/5 blur-[110px]" />

      <div className="relative mx-auto max-w-[1240px] px-4 pb-12 pt-20 sm:px-6 sm:pb-8 md:pt-24 lg:px-10">
        <div className="flex items-center justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.1em] text-ink-mute sm:text-[11px] sm:tracking-[0.12em]">
          <span>
            <span className="text-ink">04</span> — Contact
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent))]" />
            Kathmandu · UTC+5:45
          </span>
        </div>

        <h2 className="mt-7 max-w-5xl text-[38px] font-semibold leading-[1.03] tracking-[-0.03em] text-ink sm:mt-8 sm:text-[64px] md:text-[80px]">
          Let's build something{" "}
          <span className="font-serif font-normal italic text-ink-soft">
            that actually matters.
          </span>
        </h2>

        <div className="relative mt-8 overflow-hidden rounded-[28px] border border-ink/10 bg-paper/45 p-4 shadow-[0_28px_90px_rgba(20,15,12,0.08)] backdrop-blur-md sm:mt-12 sm:rounded-[34px] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
          <div className="pointer-events-none absolute -right-16 -top-24 size-72 rounded-full bg-accent/8 blur-[80px]" />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.55fr)_minmax(280px,0.75fr)] lg:gap-16">
            <div>
              <p className="max-w-2xl font-sans text-[17px] leading-[1.65] text-ink-soft sm:text-[19px]">
                Have a useful problem, an ambitious idea, or a team that cares about the details?
                Start with a simple hello.
              </p>

              <a
                href={emailComposeUrl}
                target="_blank"
                rel="noreferrer"
                className="group mt-6 grid w-full max-w-2xl grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-[22px] border border-ink/10 bg-ink px-4 py-4 text-paper transition duration-300 hover:-translate-y-1 hover:bg-accent hover:shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:mt-8 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:gap-4 sm:rounded-[26px] sm:px-7 sm:py-6"
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-paper/15 bg-paper/8 sm:size-11">
                  <Mail className="size-4 sm:size-4.5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[8px] uppercase tracking-[0.16em] text-paper/55 sm:text-[9px] sm:tracking-[0.18em]">
                    Start a conversation
                  </span>
                  <span className="mt-1 block truncate font-sans text-[12px] font-semibold sm:text-[20px]">
                    {socials.email}
                  </span>
                </span>
                <ArrowUpRight className="hidden size-5 shrink-0 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:block" />
              </a>
            </div>

            <aside>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
                Open to right now
              </p>
              <ol className="mt-4 grid gap-2">
                {openTo.map((item, index) => (
                  <li
                    key={item}
                    className="group flex items-center gap-4 rounded-[18px] border border-ink/9 bg-paper-raised/45 px-4 py-4 transition hover:-translate-y-0.5 hover:border-accent/35 hover:bg-paper-raised/80"
                  >
                    <span className="font-mono text-[10px] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-sans text-[14px] font-medium text-ink-soft transition group-hover:text-ink sm:text-[15px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </aside>
          </div>

          <footer className="relative mt-8 flex flex-col items-center gap-4 rounded-[22px] border border-ink/10 bg-paper-raised/55 px-4 py-5 text-center text-[11px] text-ink-mute shadow-[0_14px_45px_rgba(20,15,12,0.06)] sm:grid sm:grid-cols-[1fr_auto_1fr] sm:gap-5 sm:px-5 sm:py-4 sm:text-left">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-3.5" />
              Built in Kathmandu
            </span>

            <nav aria-label="Contact links" className="flex items-center gap-2">
              <a
                href={emailComposeUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
                title="Email"
                className="inline-flex size-10 items-center justify-center rounded-full border border-ink/12 text-ink-soft transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-paper"
              >
                <Mail className="size-4" />
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="inline-flex size-10 items-center justify-center rounded-full border border-ink/12 text-ink-soft transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-paper"
              >
                <Github className="size-4" />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="inline-flex size-10 items-center justify-center rounded-full border border-ink/12 text-ink-soft transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-paper"
              >
                <Linkedin className="size-4" />
              </a>
              <Link
                to="/resume"
                aria-label="View resume"
                title="Resume"
                className="inline-flex size-10 items-center justify-center rounded-full border border-ink/12 text-ink-soft transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-paper"
              >
                <FileText className="size-4" />
              </Link>
            </nav>

            <span className="sm:text-right">© {new Date().getFullYear()} Laxman Acharya</span>
          </footer>
        </div>
      </div>
    </section>
  );
}
