"use client";

import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-3 rounded-full border border-outline bg-surface/80 px-4 py-2 text-sm font-semibold text-foreground shadow-sm backdrop-blur transition hover:border-primary/50 hover:bg-panel"
      aria-label="Toggle color theme"
      aria-pressed={theme === "dark"}
    >
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
        {theme === "dark" ? "M" : "S"}
      </span>
      <span>{theme === "dark" ? "Dark mode" : "Light mode"}</span>
    </button>
  );
}