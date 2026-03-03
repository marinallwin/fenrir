import React from 'react';
import { Loader2 } from 'lucide-react';

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  icon, 
  loading = false, 
  disabled = false,
  children, 
  className = '',
  ...props 
}) => {
  // Base button classes with responsive design
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border-0 w-full max-w-full';
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-teal-500 hover:bg-teal-600 active:bg-teal-700 text-white focus:ring-teal-500/50 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    secondary: 'bg-white hover:bg-gray-50 active:bg-gray-100 text-gray-900 border border-gray-200 hover:border-gray-300 focus:ring-gray-500/50 shadow-sm hover:shadow-md',
    ghost: 'bg-transparent hover:bg-gray-100 active:bg-gray-200 text-gray-700 focus:ring-gray-500/50',
    danger: 'bg-red-500 hover:bg-red-600 active:bg-red-700 text-white focus:ring-red-500/50 shadow-lg hover:shadow-xl'
  };
  
  // Responsive size classes
  const sizeClasses = {
    sm: 'px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm h-8 sm:h-9 rounded-md sm:rounded-lg',
    md: 'px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base h-10 sm:h-12 rounded-lg sm:rounded-xl',
    lg: 'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg h-12 sm:h-14 lg:h-16 rounded-lg sm:rounded-xl'
  };
  
  // Combine classes
  const buttonClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `.trim();

  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
      )}
      {icon && !loading && (
        <span className="mr-2">{icon}</span>
      )}
      <span className="truncate">{children}</span>
    </button>
  );
};

export default Button;