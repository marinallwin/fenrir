import React from 'react';

const StatsCard = ({ 
  title, 
  count, 
  change, 
  severity = 'low',
  className = '' 
}) => {
  const isPositive = change > 0;
  const isNegative = change < 0;
  
  const severityConfig = {
    critical: {
      dot: 'bg-red-500',
      text: 'text-red-500',
      count: 'text-red-500'
    },
    high: {
      dot: 'bg-orange-500',
      text: 'text-orange-500', 
      count: 'text-orange-500'
    },
    medium: {
      dot: 'bg-yellow-500',
      text: 'text-yellow-500',
      count: 'text-yellow-500'
    },
    low: {
      dot: 'bg-blue-500',
      text: 'text-blue-500',
      count: 'text-blue-500'
    }
  };

  const config = severityConfig[severity];

  return (
    <div className={`
      bg-white dark:bg-gray-800 
      rounded-lg p-6 
      transition-all duration-200 hover:shadow-sm
      ${className}
    `}>
      <div className="flex items-center space-x-2 mb-3">
        <div className={`w-2.5 h-2.5 rounded-full ${config.dot}`}></div>
        <h3 className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
          {title.toUpperCase()} SEVERITY
        </h3>
      </div>
      
      <div className="flex items-end justify-between">
        <div>
          <p className={`text-3xl font-bold ${config.count} mb-1`}>
            {count}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
            {isNegative ? '' : '+'}{change}% {isNegative ? 'decrease' : 'increase'} than yesterday
          </p>
        </div>
        
        <div className={`
          text-xs font-medium
          ${isNegative 
            ? 'text-green-500' 
            : 'text-red-500'
          }
        `}>
          <span>
            {isNegative ? '↓' : '↑'} {Math.abs(change)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;