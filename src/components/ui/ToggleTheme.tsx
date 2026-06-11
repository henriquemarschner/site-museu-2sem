"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";

interface ToggleThemeProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number; // não usado, mantido por compatibilidade
}

export const ToggleTheme = ({ className, ...props }: ToggleThemeProps) => {
  const [isDark, setIsDark] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const applySaved = () => {
      try {
        const saved = localStorage.getItem("theme");
        if (saved === "dark" || saved === "light") {
          document.documentElement.classList.toggle("dark", saved === "dark");
        }
      } catch {}
    };
    const update = () =>
      setIsDark(document.documentElement.classList.contains("dark"));

    applySaved();
    update();

    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => obs.disconnect();
  }, []);

  const toggleTheme = useCallback(() => {
    if (!buttonRef.current) return;
    const newTheme = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", newTheme);
    try {
      localStorage.setItem("theme", newTheme ? "dark" : "light");
    } catch {}
    setIsDark(newTheme);
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      aria-label="Alternar tema"
      className={`p-2 rounded-full transition-colors duration-300 ${
        isDark
          ? "hover:text-amber-400 text-amber-500 bg-gray-700"
          : "hover:text-blue-500 text-blue-600 bg-gray-200"
      } ${className ?? ""}`}
      {...props}
    >
      {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
    </button>
  );
};

export default ToggleTheme;
