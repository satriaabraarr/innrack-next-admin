"use client";

import {
  createContext,
  ReactNode,
  useContext,
} from "react";

type ThemeContextType = {
  activeTheme: string;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ActiveThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  // Selalu gunakan theme blue
  const activeTheme = "blue";

  return (
    <ThemeContext.Provider value={{ activeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeConfig() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(
      "useThemeConfig must be used within an ActiveThemeProvider"
    );
  }
  return context;
}