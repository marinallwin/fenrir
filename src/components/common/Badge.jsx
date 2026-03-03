import React from 'react';

const Badge = ({ 
  severity = 'low', 
  count, 
  size = 'md', 
  className = '',
  children 
}) => {
  // Base badge classes - using rounded-md for square with border radius
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md';
  
  // Severity color classes
  const severityClasses = {
    critical: 'bg-red-500 text-white',
    high: 'bg-orange-500 text-white',
    medium: 'bg-yellow-500 text-white',
    low: 'bg-green-500 text-white'
  };
  
  // Size classes - making them more square/rectangular
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs min-w-[1.5rem] h-5',
    md: 'px-2.5 py-1 text-sm min-w-[2rem] h-6',
    lg: 'px-3 py-1.5 text-base min-w-[2.5rem] h-8'
  };
  
  // Combine classes
  const badgeClasses = `
    ${baseClasses}
    ${severityClasses[severity]}
    ${sizeClasses[size]}
    ${className}
  `.trim();

  return (
    <span className={badgeClasses}>
      {children || count}
    </span>
  );
};

export default Badge;