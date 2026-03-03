import React, { createContext, useContext, useState, useEffect } from 'react';
import { lightTheme, darkTheme } from '../config/theme';

// Create the theme context
const ThemeContext = createContext();

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or default to light
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) {
        return saved === 'dark';
      }
      // Default to light mode
      return false;
    }
    return false;
  });

  // Get current theme object
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  // Update localStorage and document class when theme changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const themeValue = isDarkMode ? 'dark' : 'light';
      localStorage.setItem('theme', themeValue);
      
      // Update document class for Tailwind dark mode
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDarkMode]);

  // Initial setup on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ensure the initial theme is applied
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  // Context value
  const value = {
    theme: currentTheme,
    isDarkMode,
    toggleTheme,
    themeMode: isDarkMode ? 'dark' : 'light'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;