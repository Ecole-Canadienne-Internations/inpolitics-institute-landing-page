import { useEffect, useState } from "react";

export type LandingLanguage = "fr" | "en" | "es";
const KEY = "inpolitics-landing-language";

export function getLandingLanguage(): LandingLanguage | null {
  try {
    const value = localStorage.getItem(KEY);
    return value === "fr" || value === "en" || value === "es" ? value : null;
  } catch {
    return null;
  }
}

export function saveLandingLanguage(value: LandingLanguage) {
  try { localStorage.setItem(KEY, value); } catch { /* Private browsing */ }
  window.dispatchEvent(new Event("inpolitics-language-change"));
}

export function useLandingLanguage() {
  const [language, setLanguage] = useState<LandingLanguage | null>(getLandingLanguage);
  useEffect(() => {
    const sync = () => setLanguage(getLandingLanguage());
    window.addEventListener("inpolitics-language-change", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("inpolitics-language-change", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);
  return language;
}
