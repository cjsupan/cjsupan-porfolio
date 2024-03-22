"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    //set the theme to local storage
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className={`${
        theme === "dark"
          ? "bg-primary-dark text-primary-light"
          : "bg-primary-light text-primary-dark"
      } w-8 h-8 flex items-center justify-center rounded-full  fixed bottom-8 right-8`}
      onClick={() => handleThemeToggle()}
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
};

export default ThemeToggle;
