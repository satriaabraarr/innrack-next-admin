"use client";

import { useThemeConfig } from "@/components/active-theme-provider";

interface ThemeButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function ThemeButton({ children, className = "", onClick, type = "button" }: ThemeButtonProps) {
  const { activeTheme } = useThemeConfig();

  const getThemeColor = () => {
    switch (activeTheme) {
      case 'default':
        return 'bg-slate-500 hover:bg-slate-600 shadow-slate-500/30';
      case 'blue':
        return 'bg-blue-500 hover:bg-blue-600 shadow-blue-500/30';
      case 'green':
        return 'bg-green-500 hover:bg-green-600 shadow-green-500/30';
      case 'amber':
        return 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/30';
      case 'violet':
        return 'bg-violet-500 hover:bg-violet-600 shadow-violet-500/30';
      case 'mono-scaled':
        return 'bg-gray-600 hover:bg-gray-700 shadow-gray-500/30';
      default:
        return 'bg-blue-500 hover:bg-blue-600 shadow-blue-500/30';
    }
  };

  const themeColor = getThemeColor();

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${themeColor} text-white px-4 py-2 rounded-md flex items-center space-x-2 transition-colors shadow-lg hover:shadow-xl text-sm font-medium ${className}`}
    >
      {children}
    </button>
  );
}
