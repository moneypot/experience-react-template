import { useState, useEffect } from "react";

// This is an optional hook that automatically updates the light vs dark theme
// based on the user's system if their preferred theme is 'auto'.

// The user's preferred theme, 'auto' means determined by prefers-color-scheme
export type ThemePreference = Theme | "auto";

// The applied theme
type Theme = "light" | "dark";

export function useTheme(themePreference: ThemePreference): Theme {
  // Track the system theme
  const [systemTheme, setSystemTheme] = useState<Theme>(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  // Derive the actual theme based on preferences
  const derivedTheme =
    themePreference === "auto" ? systemTheme : themePreference;

  useEffect(() => {
    // Apply theme to the document
    document.documentElement.dataset.bsTheme = derivedTheme;

    // Listen for system theme changes
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleThemeChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    darkModeMediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, [derivedTheme]);

  return derivedTheme;
}
