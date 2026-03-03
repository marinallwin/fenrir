// Theme configuration objects for light and dark modes
export const lightTheme = {
  mode: 'light',
  colors: {
    primary: '#0CC8A8',
    background: '#FFFFFF',
    surface: '#F5F5F5',
    text: '#1A1A1A',
    textSecondary: '#6B7280',
    border: '#E5E5E5',
    accent: '#0CC8A8',
    severity: {
      critical: '#EF4444',
      high: '#F97316',
      medium: '#EAB308',
      low: '#22C55E'
    },
    status: {
      completed: '#22C55E',
      scheduled: '#6B7280',
      failed: '#EF4444',
      running: '#0CC8A8'
    }
  },
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem' // 30px
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    }
  }
};

export const darkTheme = {
  mode: 'dark',
  colors: {
    primary: '#0CC8A8',
    background: '#0F0F0F',
    surface: '#1A1A1A',
    text: '#FFFFFF',
    textSecondary: '#9CA3AF',
    border: '#333333',
    accent: '#0CC8A8',
    severity: {
      critical: '#EF4444',
      high: '#F97316',
      medium: '#EAB308',
      low: '#22C55E'
    },
    status: {
      completed: '#22C55E',
      scheduled: '#6B7280',
      failed: '#EF4444',
      running: '#0CC8A8'
    }
  },
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem' // 30px
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    }
  }
};

// Tailwind CSS class mappings for themes
export const themeClasses = {
  light: {
    background: 'bg-white',
    surface: 'bg-gray-50',
    text: 'text-gray-900',
    textSecondary: 'text-gray-500',
    border: 'border-gray-200',
  },
  dark: {
    background: 'bg-dark-bg',
    surface: 'bg-dark-surface', 
    text: 'text-white',
    textSecondary: 'text-gray-400',
    border: 'border-dark-border',
  }
};

// Severity color mappings
export const severityClasses = {
  critical: 'bg-severity-critical text-white',
  high: 'bg-severity-high text-white',
  medium: 'bg-severity-medium text-white',
  low: 'bg-severity-low text-white'
};

// Status color mappings
export const statusClasses = {
  completed: 'bg-green-500 text-white',
  scheduled: 'bg-gray-500 text-white',
  failed: 'bg-red-500 text-white',
  running: 'bg-primary text-white'
};