export type Theme = "light" | "dark";

export function getTheme(): Theme {
  const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const localTheme = localStorage.getItem("theme");

  // Validate stored theme
  if (localTheme === "dark" || localTheme === "light") {
    return localTheme;
  }

  // Fallback to system preference
  return darkTheme.matches ? "dark" : "light";
}
