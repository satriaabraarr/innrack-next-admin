"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ThemeButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: 'primary' | 'outline';
  disabled?: boolean;
}

export function ThemeButton({ 
  children, 
  className = "", 
  onClick, 
  type = "button",
  variant = "primary",
  disabled = false
}: ThemeButtonProps) {
  
  // Map variant ThemeButton ke variant shadcn
  const getShadcnVariant = () => {
    if (variant === 'outline') return 'outline';
    return 'default'; // 'primary' kita mapping ke 'default'
  };
  
  const shadcnVariant = getShadcnVariant();
  
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant={shadcnVariant}
      className={cn(
        "flex items-center gap-2 transition-all cursor-pointer",
        // Custom styling untuk variant primary
        variant === 'primary' && "bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl shadow-blue-500/25 focus-visible:ring-blue-500",
        // Custom styling untuk variant outline  
        variant === 'outline' && "border-blue-300 text-blue-700 hover:bg-blue-50 hover:text-blue-800 focus-visible:ring-blue-500",
        className
      )}
    >
      {children}
    </Button>
  );
}