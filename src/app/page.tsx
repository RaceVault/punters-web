import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-10 lg:px-12">
      <header className="flex flex-col gap-6 rounded-[2rem] border border-outline bg-surface px-6 py-5 shadow-[0_20px_60px_-35px_rgba(9,17,31,0.45)] backdrop-blur md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary">
            OddsOn
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Global layout and theme foundation for RaceVault punters.
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <section className="grid flex-1 gap-6 py-8 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="rounded-[2rem] border border-outline bg-panel p-8 shadow-[0_28px_80px_-45px_rgba(9,17,31,0.5)]">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Theme system ready
          </span>
          <h2 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            One visual system, consistent from first load to every future screen.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            The root layout now exposes shared metadata, responsive viewport settings,
            branded surface tokens, and a persisted dark or light mode toggle that
            carries across the application.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <article className="rounded-3xl border border-outline bg-surface p-5">
              <p className="text-sm font-medium text-muted">Font stack</p>
              <p className="mt-3 text-2xl font-semibold">Inter via next/font</p>
            </article>
            <article className="rounded-3xl border border-outline bg-surface p-5">
              <p className="text-sm font-medium text-muted">Brand tokens</p>
              <p className="mt-3 text-2xl font-semibold">Primary, accent, surface</p>
            </article>
            <article className="rounded-3xl border border-outline bg-surface p-5">
              <p className="text-sm font-medium text-muted">Theme state</p>
              <p className="mt-3 text-2xl font-semibold">Stored in localStorage</p>
            </article>
          </div>
        </div>

        <aside className="flex flex-col justify-between rounded-[2rem] border border-outline bg-surface p-8 shadow-[0_28px_80px_-45px_rgba(9,17,31,0.5)] backdrop-blur">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
              Included in this slice
            </p>
            <ul className="mt-6 space-y-4 text-base text-muted">
              <li className="rounded-2xl border border-outline bg-panel px-4 py-4">
                Global metadata and responsive viewport export in the app root.
              </li>
              <li className="rounded-2xl border border-outline bg-panel px-4 py-4">
                HTML-level data-theme switching with design tokens exposed to Tailwind.
              </li>
              <li className="rounded-2xl border border-outline bg-panel px-4 py-4">
                A reusable client ThemeProvider and visible toggle control for QA.
              </li>
            </ul>
          </div>

          <div className="mt-8 rounded-3xl bg-[linear-gradient(135deg,color-mix(in_srgb,var(--primary)_82%,white),var(--accent))] p-[1px]">
            <div className="rounded-[calc(1.5rem-1px)] bg-background px-5 py-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
                Next step
              </p>
              <p className="mt-3 text-xl font-semibold">
                Build the first real punter-facing screens on top of these shared primitives.
              </p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
