import React from 'react';

const StatusChip = ({ 
  status = 'completed', 
  text, 
  size = 'md', 
  className = '' 
}) => {
  // Base chip classes
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full';
  
  // Status color classes
  const statusClasses = {
    completed: 'bg-green-500 text-white',
    scheduled: 'bg-gray-500 text-white',
    failed: 'bg-red-500 text-white',
    running: 'bg-primary text-white',
    pending: 'bg-yellow-500 text-white'
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  };
  
  // Combine classes
  const chipClasses = `
    ${baseClasses}
    ${statusClasses[status]}
    ${sizeClasses[size]}
    ${className}
  `.trim();

  return (
    <span className={chipClasses}>
      {text || status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default StatusChip;