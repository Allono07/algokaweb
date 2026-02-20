export type SiteTheme = "space" | "modern-light";

// Theme switch flag:
// - "space" keeps the current dark/space design.
// - "modern-light" enables the new clean light theme.
export const SITE_THEME: SiteTheme = "modern-light";

export const IS_MODERN_THEME = SITE_THEME === "modern-light";

// Keeps the optional alternate AgencyHome route disabled by default.
export const USE_AGENCY_THEME = false;
