import { kernelContributions } from "@/data/kernel";

export function KernelContributions() {
  return (
    <div className="mt-6 max-w-3xl break-words">
      <h4 className="text-sm font-semibold text-ink">Scored security fixes</h4>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {kernelContributions
          .filter((patch) => patch.score !== undefined)
          .map((patch) => (
            <a
              key={patch.cve}
              href={`https://www.cve.org/CVERecord?id=${patch.cve}`}
              target="_blank"
              rel="noreferrer"
              className="min-w-0 rounded-lg border border-rule p-4 transition hover:border-accent"
            >
              <div className="font-mono text-[12px] text-accent">{patch.cve} ↗</div>
              <div className="mt-2 text-xl font-semibold text-ink">
                {patch.score?.toFixed(1)} High
              </div>
              <div className="mt-2 text-[12px] leading-relaxed text-ink-soft">{patch.title}</div>
            </a>
          ))}
      </div>
      <p className="mt-3 text-[12px] leading-relaxed text-ink-mute">
        CVSS 3.1 base scores from the Linux CNA, verified 21 September 2026. The other three
        assigned CVEs have no published Linux CNA score at this snapshot.
      </p>
      <details className="mt-5 rounded-lg border border-rule">
        <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-ink">
          All 15 mainline Linux kernel contributions
        </summary>
        <ol className="divide-y divide-rule border-t border-rule px-4">
          {kernelContributions.map((patch) => (
            <li key={patch.commit} className="py-3">
              <a
                href={patch.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm leading-relaxed text-ink hover:text-accent"
              >
                {patch.title} ↗
              </a>
              <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-[12px] text-ink-mute">
                <span className="font-mono">{patch.commit}</span>
                {patch.cve ? (
                  <a
                    href={`https://www.cve.org/CVERecord?id=${patch.cve}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent hover:underline"
                  >
                    {patch.cve} ·{" "}
                    {patch.score !== undefined
                      ? `${patch.score.toFixed(1)} High`
                      : "CVSS not listed"}{" "}
                    ↗
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </details>
      <p className="mt-3 text-[12px] leading-relaxed text-ink-mute">
        Two additional accepted patches remain in maintainer trees:{" "}
        <a
          className="text-accent hover:underline"
          href="https://kernel.googlesource.com/pub/scm/linux/kernel/git/jic23/iio/+/f0f3401388dc9ba396d0c64888cf5aaf65e0dc06"
          target="_blank"
          rel="noreferrer"
        >
          IIO aw96103 firmware length validation ↗
        </a>
        {" and "}
        <a
          className="text-accent hover:underline"
          href="https://github.com/pkshih/rtw/commit/273b0a8be083df6d0319ce62caa870e927f94a31"
          target="_blank"
          rel="noreferrer"
        >
          rtw89 firmware section-count bounds ↗
        </a>
        .
      </p>
    </div>
  );
}
