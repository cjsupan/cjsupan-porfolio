"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return <ThemeProvider>{children}</ThemeProvider>;
}
