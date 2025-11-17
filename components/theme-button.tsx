"use client";

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
  const baseClasses = "px-4 py-2 rounded-md flex items-center space-x-2 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const getButtonClass = () => {
    if (variant === 'outline') {
      return `${baseClasses} border border-blue-300 text-blue-700 hover:bg-blue-50 focus:ring-blue-500`;
    }
    
    return `${baseClasses} bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl shadow-blue-500/30 focus:ring-blue-500`;
  };

  const themeClasses = getButtonClass();
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${themeClasses} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
}