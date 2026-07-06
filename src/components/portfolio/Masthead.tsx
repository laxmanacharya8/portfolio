import { useEffect, useRef, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#dispatches", label: "Achievements" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const searchItems = [
  {
    href: "#about",
    title: "About Laxman",
    keywords: "story computer engineering Kathmandu University working style background",
  },
  {
    href: "#dispatches",
    title: "HackForUHC 2026 — 1st Place",
    keywords: "hackathon winner health openimis claim achievements",
  },
  {
    href: "#dispatches",
    title: "openIMIS Community Meeting",
    keywords: "presentation digital public goods community health achievements",
  },
  {
    href: "#dispatches",
    title: "Harvard Health Hackathon",
    keywords: "harvard participant Kathmandu health systems AI hackathon achievements",
  },
  {
    href: "#work",
    title: "Bridgelens",
    keywords: "translation browser extension javascript tamang nepali language project",
  },
  {
    href: "#work",
    title: "Hamro Care",
    keywords: "react native fastapi mysql ai symptom family health project",
  },
  {
    href: "#work",
    title: "Zero-Burn",
    keywords: "typescript gis phone iot civic response waste burning mapping project",
  },
  {
    href: "#work",
    title: "openIMIS Niyam",
    keywords: "python openimis claim validation digital health backend rules project",
  },
  {
    href: "#contact",
    title: "Contact",
    keywords: "email linkedin available opportunity internship",
  },
];

export function Masthead() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const normalizedQuery = query.trim().toLowerCase();
  const results = normalizedQuery
    ? searchItems
        .filter((item) => `${item.title} ${item.keywords}`.toLowerCase().includes(normalizedQuery))
        .slice(0, 4)
    : [];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    window.addEventListener("hashchange", close);
    return () => {
      window.removeEventListener("resize", close);
      window.removeEventListener("hashchange", close);
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSearchOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!searchOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() => searchInputRef.current?.focus());

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = "";
    };
  }, [searchOpen]);

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery("");
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 lg:top-6">
      <div
        className={`fixed inset-0 z-[70] bg-paper/70 transition duration-300 ${
          searchOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!searchOpen}
      >
        <div className="absolute inset-0" />

        <div
          role="dialog"
          aria-modal="true"
          aria-label="Search portfolio"
          className={`absolute inset-x-0 top-0 h-[300px] bg-ink text-paper transition-transform duration-500 ease-out sm:h-[320px] ${
            searchOpen ? "translate-y-0" : "-translate-y-[150%]"
          }`}
        >
          <button
            type="button"
            onClick={closeSearch}
            aria-label="Close portfolio search"
            className="absolute right-4 top-4 z-30 inline-flex size-11 items-center justify-center rounded-full text-paper transition hover:rotate-6 hover:bg-paper/8 sm:right-8 sm:top-6"
          >
            <X className="size-7" />
          </button>

          <div className="relative z-10 mx-auto max-w-[780px] px-6 pt-12 sm:pt-14">
            <label className="flex items-center gap-3 border-b-[3px] border-accent pb-2">
              <Search className="size-6 shrink-0" />
              <span className="sr-only">Search projects and sections</span>
              <input
                ref={searchInputRef}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search the portfolio"
                className="min-w-0 flex-1 bg-transparent font-sans text-[20px] text-paper outline-none placeholder:text-paper/28 sm:text-[23px]"
              />
            </label>

            <p className="mx-auto mt-12 max-w-[680px] text-center font-sans text-[15px] font-medium italic leading-[1.45] sm:text-[17px]">
              Search through my story, projects, and achievements. Type anything to jump straight to
              the right place.
            </p>

            {normalizedQuery ? (
              <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-center">
                {results.length ? (
                  results.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={closeSearch}
                      className="border-b border-paper/45 font-sans text-[13px] font-semibold transition hover:border-accent hover:text-accent"
                    >
                      {item.title}
                    </a>
                  ))
                ) : (
                  <span className="font-sans text-[13px] text-paper/50">
                    No matching work found.
                  </span>
                )}
              </div>
            ) : null}
          </div>

          <svg
            aria-hidden
            className="absolute left-0 top-[calc(100%-1px)] h-[130px] w-full sm:h-[150px]"
            viewBox="0 0 1440 150"
            preserveAspectRatio="none"
          >
            <path
              fill="var(--ink)"
              d="M0 0H1440V28C1390 105 1300 103 1240 48C1165 120 1060 121 975 62C900 138 790 139 710 73C630 137 520 132 445 65C365 121 260 112 195 49C135 108 48 91 0 48Z"
            />
          </svg>
        </div>
      </div>

      <div className="w-[min(calc(100vw-2rem),720px)]">
        <div
          className={`stage-pill-shadow grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-[28px] border px-3 py-2 transition-all duration-300 sm:flex sm:justify-center sm:gap-5 sm:px-5 ${
            scrolled || open
              ? "border-ink/10 bg-ink/92 text-paper backdrop-blur-xl"
              : "border-ink/10 bg-ink text-paper"
          }`}
        >
          <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Back to top">
            <span className="relative inline-flex size-7 shrink-0 items-end justify-center overflow-hidden rounded-full bg-paper">
              <span className="mb-[-7px] block size-5 rounded-full bg-ink" />
            </span>
            <span className="truncate font-sans text-[14px] font-semibold text-paper">Laxman</span>
          </a>

          <nav className="hidden items-center gap-1 sm:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-1.5 font-sans text-[14px] font-medium text-paper/72 transition hover:bg-paper/8 hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setSearchOpen(true);
              }}
              aria-label="Search portfolio"
              aria-expanded={searchOpen}
              className="inline-flex size-9 items-center justify-center rounded-full text-paper/78 transition hover:bg-paper/8 hover:text-paper"
            >
              <Search className="size-4.5" />
            </button>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-portfolio-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex size-9 items-center justify-center rounded-full text-paper/78 transition hover:bg-paper/8 hover:text-paper sm:hidden"
            >
              {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
            <a
              href="mailto:laxmanacharya8848@gmail.com"
              className="group hidden items-center gap-2 rounded-full bg-paper px-3.5 py-1.5 font-sans text-[12.5px] font-semibold text-ink transition hover:bg-accent hover:text-paper sm:inline-flex"
            >
              <span className="size-1.5 rounded-full bg-accent live-dot group-hover:bg-paper" />
              Available
            </a>
          </div>
        </div>

        <div
          id="mobile-portfolio-menu"
          className={`mt-2 overflow-hidden rounded-[24px] border border-ink/10 bg-ink/92 text-paper shadow-[0_22px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl transition-all duration-300 sm:hidden ${
            open ? "max-h-80 opacity-100" : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <nav className="grid grid-cols-2 gap-1 p-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-[18px] px-4 py-3 font-sans text-[15px] font-semibold text-paper/84 transition hover:bg-paper/8 hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:laxmanacharya8848@gmail.com"
            onClick={() => setOpen(false)}
            className="mx-2 mb-2 flex items-center justify-between rounded-[18px] bg-paper px-4 py-3 font-sans text-[14px] font-semibold text-ink transition hover:bg-accent hover:text-paper"
          >
            Available for build work
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
