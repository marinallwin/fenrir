import React from 'react';

const ProgressBar = ({ 
  progress = 0, 
  percentage = 0, 
  color = 'primary', 
  showLabel = true, 
  size = 'md',
  className = '' 
}) => {
  // Use progress prop if provided, otherwise fall back to percentage
  const value = progress !== undefined ? progress : percentage;
  
  // Ensure value is between 0 and 100
  const clampedValue = Math.min(Math.max(value, 0), 100);
  
  // Base container classes
  const containerClasses = 'relative bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden';
  
  // Size classes
  const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  };
  
  // Color classes for the progress bar - using teal as primary
  const colorClasses = {
    primary: 'bg-teal-500',
    green: 'bg-green-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    blue: 'bg-blue-500'
  };
  
  // Progress bar classes
  const progressClasses = `
    h-full transition-all duration-300 ease-out
    ${colorClasses[color]}
  `.trim();
  
  // Container classes
  const fullContainerClasses = `
    ${containerClasses}
    ${sizeClasses[size]}
    ${className}
  `.trim();

  return (
    <div className="flex items-center space-x-3">
      <div className={fullContainerClasses}>
        <div 
          className={progressClasses}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 min-w-[3rem]">
          {clampedValue}%
        </span>
      )}
    </div>
  );
};

export default ProgressBar;