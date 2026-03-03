import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = ({ className = '' }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        p-2 rounded-lg transition-all duration-200 
        bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600
        text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white
        border border-gray-200 dark:border-gray-600
        focus:outline-none focus:ring-2 focus:ring-teal-500/50
        ${className}
      `}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;