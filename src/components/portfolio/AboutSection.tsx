export function AboutSection() {
  return (
    <section
      id="about"
      className="dia-noise relative isolate scroll-mt-24 overflow-hidden border-y border-rule bg-paper-deep text-ink"
    >
      <div className="pointer-events-none absolute -left-24 top-20 size-80 rounded-full bg-accent/8 blur-[110px]" />
      <div className="pointer-events-none absolute -right-28 bottom-8 size-96 rounded-full bg-ink/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[1240px] px-5 py-20 sm:px-6 md:py-24 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-mute">
          <span>
            <span className="text-ink">01</span> — About
          </span>
          <span>Kathmandu University · Computer Engineering</span>
        </div>

        <div className="mt-8 grid items-end gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.55fr)] lg:gap-14">
          <h2 className="max-w-4xl text-[44px] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-[64px] md:text-[78px]">
            More than the projects,{" "}
            <span className="font-serif font-normal italic text-ink-soft">
              here is the person behind them.
            </span>
          </h2>

          <p className="border-l-2 border-accent pl-5 font-sans text-[17px] leading-[1.6] text-ink-soft sm:text-[19px]">
            I am Laxman Acharya, a computer engineering student at Kathmandu University who learns
            best by building, explaining, and trying again.
          </p>
        </div>

        <div className="mt-12 grid gap-8 border-t border-rule pt-10 lg:grid-cols-[180px_minmax(0,1fr)_300px] lg:gap-12">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
              The story
            </span>
          </div>

          <div className="space-y-6 font-sans text-[16px] leading-[1.75] text-ink-soft sm:text-[18px]">
            <p>
              I have always been drawn to the moment when something confusing begins to make sense.
              That curiosity is what brought me to computer engineering, and it still guides the way
              I learn—by asking questions, taking ideas apart, and rebuilding them with a clearer
              understanding.
            </p>
            <p>
              University has given me the foundation, but teamwork has shaped me just as much.
              Hackathons, project deadlines, public presentations, and honest feedback have taught
              me to listen closely, communicate an idea simply, and stay calm when the first plan
              stops working.
            </p>
            <p>
              I am still early in the journey, and I value that. Every project gives me another
              chance to become more thoughtful, more capable, and more useful to the people around
              me. I want to keep growing without losing the curiosity that made me begin.
            </p>
          </div>

          <aside className="self-start rounded-[26px] border border-ink/10 bg-ink p-6 text-paper shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-7">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-paper/48">
              In a sentence
            </span>
            <p className="mt-6 font-serif text-[32px] italic leading-[1.08] sm:text-[38px]">
              Curious enough to ask why. Patient enough to keep improving.
            </p>
            <div className="mt-8 h-px bg-gradient-to-r from-accent via-accent/50 to-transparent" />
          </aside>
        </div>
      </div>
    </section>
  );
}
