"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ThemeBadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'bundle' | 'active' | 'inactive';
  status?: boolean;
}

export function ThemeBadge({ 
  children, 
  className = "", 
  variant = 'bundle',
  status = true
}: ThemeBadgeProps) {
  
  const getBadgeStyle = () => {
    if (variant === 'active') {
      return status 
        ? "bg-green-100 text-green-800 border border-green-200" // Active
        : "bg-red-100 text-red-800 border border-red-200";     // Inactive
    }
    
    // Untuk bundle
    return status 
      ? "bg-blue-100 text-blue-800 border border-blue-200"     // Bundle
      : "bg-gray-100 text-gray-800 border border-gray-200";    // Single
  };

  return (
    <Badge 
      variant="outline"
      className={cn(
        "inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium min-w-[70px]",
        getBadgeStyle(),
        className
      )}
    >
      {children}
    </Badge>
  );
}