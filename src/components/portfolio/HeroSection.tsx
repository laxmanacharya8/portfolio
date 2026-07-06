import portraitImg from "@/assets/laxman-portrait.png";

const proof = [
  ["01", "HackForUHC", "1st place winner"],
  ["02", "openIMIS", "Presented to global community"],
  ["03", "Harvard Health", "Hackathon participant"],
];

// Dia-style mixed wordmark: heavy Fraunces "Lax" morphs weight/softness,
// paired with a light Instrument Serif italic "man" that breathes in sync.
const heavy = ["L", "a", "x"];
const light = ["m", "a", "n"];

export function HeroSection() {
  return (
    <section
      id="top"
      className="dia-stage dia-noise relative isolate min-h-[min(100svh,900px)] overflow-hidden bg-paper text-ink lg:min-h-[100svh]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-paper to-transparent" />

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center px-5 pb-12 pt-28 text-center sm:px-8 sm:pb-16 sm:pt-32 lg:min-h-[100svh] lg:px-10 lg:pb-20 lg:pt-20">
        <h1
          aria-label="Laxman"
          className="float-in whitespace-nowrap pb-[0.12em] text-[clamp(76px,23vw,108px)] leading-[1] tracking-[-0.025em] text-ink sm:text-[150px] md:text-[180px] lg:text-[clamp(190px,18vw,230px)]"
        >
          <span className="font-display font-black">
            {heavy.map((ch, i) => (
              <span
                key={`h-${i}`}
                aria-hidden
                className="morph-letter"
                style={{ ["--morph-delay" as string]: `${i * 0.14}s` }}
              >
                {ch}
              </span>
            ))}
          </span>
          <span className="font-serif italic font-light text-ink-soft">
            {light.map((ch, i) => (
              <span
                key={`l-${i}`}
                aria-hidden
                className="morph-letter-soft"
                style={{ ["--morph-delay" as string]: `${(i + 3) * 0.14}s` }}
              >
                {ch}
              </span>
            ))}
          </span>
        </h1>

        <div className="mt-7 grid w-full max-w-[1120px] items-center gap-10 sm:mt-8 sm:gap-12 lg:mt-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <p className="float-in max-w-[700px] font-sans text-[21px] font-medium leading-[1.2] text-ink sm:text-[29px] md:text-[32px] lg:max-w-[500px] lg:text-[34px]">
              A computer engineer you can hand{" "}
              <span className="font-serif italic text-ink-soft">real problems</span> to.
            </p>

            <div className="float-in mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8 lg:justify-start">
              <a
                href="#contact"
                className="stage-pill-shadow group inline-flex min-h-14 items-center gap-3 rounded-[24px] bg-ink px-7 font-sans text-[16px] font-semibold text-paper transition hover:bg-accent sm:px-8 sm:text-[17px]"
              >
                Get in touch
                <span aria-hidden className="text-[20px] transition group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#dispatches"
                className="inline-flex min-h-14 items-center rounded-[24px] border border-ink/14 bg-ink/6 px-5 font-sans text-[14px] font-medium text-ink transition hover:border-ink/24 hover:bg-ink/10 sm:px-6 sm:text-[15px]"
              >
                See achievements
              </a>
            </div>
          </div>

          <div className="relative flex w-full justify-center lg:justify-end">
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-accent/14 blur-[90px] sm:h-[520px] sm:w-[520px] lg:left-auto lg:right-4 lg:translate-x-0" />
            <img
              src={portraitImg}
              alt="Laxman Acharya, Computer Engineering student at Kathmandu University"
              className="hero-portrait relative z-10 h-[clamp(270px,42svh,340px)] w-auto max-w-full select-none object-contain sm:h-[clamp(340px,44svh,440px)] lg:h-[clamp(320px,42svh,440px)]"
              loading="eager"
              draggable={false}
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-4 bottom-4 z-30 hidden grid-cols-3 gap-3 lg:grid">
        {proof.map(([n, label, detail]) => (
          <a
            key={n}
            href="#dispatches"
            className="group grid grid-cols-[2.5rem_1fr] items-center gap-4 rounded-[22px] border border-ink/8 bg-paper/42 px-4 py-3 text-left backdrop-blur-md transition hover:border-ink/18 hover:bg-paper-raised/70"
          >
            <span className="font-mono text-[11px] text-ink-mute">{n}</span>
            <span>
              <span className="block font-sans text-[14px] font-semibold text-ink">{label}</span>
              <span className="block font-sans text-[12.5px] text-ink-mute transition group-hover:text-ink-soft">
                {detail}
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
