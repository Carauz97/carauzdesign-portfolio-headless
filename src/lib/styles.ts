// lib/styles.ts
export const contentWidth = "mx-auto w-full max-w-4xl";

export const panel =
  "rounded-xl border border-border bg-surface shadow-lg shadow-black/20";

const btn =
  "inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-2.5 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export const btnPrimary = `${btn} border-border-button bg-primary text-background hover:bg-primary-hover active:bg-primary-active`;
export const btnSecondary = `${btn} border-border-button-secondary bg-secondary text-background hover:bg-secondary-hover`;

export const chip =
  "rounded-full border border-border bg-background px-3 py-1 text-xs text-muted";
