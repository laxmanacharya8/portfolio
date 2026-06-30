type Props = {
  number: string;
  kicker: string;
  title: string;
  /** Optional fragment rendered in Instrument Serif italic as an accent inside the title. */
  titleAccent?: string;
  intro?: string;
  meta?: string;
};

export function SectionHeader({ number, kicker, title, titleAccent, intro, meta }: Props) {
  return (
    <header className="border-t border-rule pt-6">
      <div className="flex items-center justify-between gap-5 text-[12px] text-ink-mute">
        <span className="text-ink">
          {number} <span className="text-ink-mute">— {kicker}</span>
        </span>
        {meta ? <span className="hidden sm:inline">{meta}</span> : null}
      </div>

      <h2 className="mt-6 max-w-3xl font-sans text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[44px] md:text-[52px]">
        {title}
        {titleAccent ? (
          <>
            {" "}
            <span className="font-serif font-normal italic text-ink-soft">
              {titleAccent}
            </span>
          </>
        ) : null}
      </h2>

      {intro ? (
        <p className="mt-5 max-w-2xl font-sans text-[16px] leading-[1.6] text-ink-soft">
          {intro}
        </p>
      ) : null}
    </header>
  );
}
