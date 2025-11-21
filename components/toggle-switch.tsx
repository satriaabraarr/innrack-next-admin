"use client";

interface ToggleSwitchProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  color?: "blue" | "green";
  disabled?: boolean;
}

export const ToggleSwitch = ({ 
  id, 
  name, 
  checked, 
  onChange, 
  color = "blue",
  disabled = false
}: ToggleSwitchProps) => {
  const colorClasses = {
    blue: checked ? 'bg-blue-500' : 'bg-gray-300',
    green: checked ? 'bg-green-500' : 'bg-gray-300'
  };

  return (
    <label 
      htmlFor={id} 
      className={`relative inline-flex items-center cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="sr-only"
      />
      <div className={`w-12 h-6 rounded-full transition-colors ${colorClasses[color]} ${disabled ? 'cursor-not-allowed' : ''}`}></div>
      <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
        checked ? 'transform translate-x-6' : ''
      } ${disabled ? 'cursor-not-allowed' : ''}`}></div>
    </label>
  );
};