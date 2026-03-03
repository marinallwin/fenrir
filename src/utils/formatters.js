// Utility functions for data formatting

/**
 * Format a date to relative time (e.g., "4d ago", "2h ago")
 * @param {Date} date - The date to format
 * @returns {string} - Formatted relative time string
 */
export function formatRelativeTime(date) {
  if (!date) return '';
  
  const now = new Date();
  const diffInSeconds = Math.floor((now - new Date(date)) / 1000);
  
  // Define time intervals in seconds
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60
  };
  
  // Find the appropriate interval
  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / seconds);
    if (interval >= 1) {
      const suffix = unit === 'day' ? 'd' : 
                   unit === 'hour' ? 'h' : 
                   unit === 'minute' ? 'm' : 
                   unit === 'week' ? 'w' : 
                   unit === 'month' ? 'mo' : 'y';
      return `${interval}${suffix} ago`;
    }
  }
  
  return 'Just now';
}

/**
 * Format percentage change with +/- indicators and appropriate colors
 * @param {number} value - The percentage change value
 * @returns {object} - Object with formatted text and color class
 */
export function formatPercentageChange(value) {
  if (value === 0) {
    return {
      text: '0%',
      colorClass: 'text-gray-500'
    };
  }
  
  const isPositive = value > 0;
  const formattedValue = Math.abs(value);
  
  return {
    text: `${isPositive ? '+' : '-'}${formattedValue}%`,
    colorClass: isPositive ? 'text-red-500' : 'text-green-500' // Red for increase (bad), green for decrease (good)
  };
}

/**
 * Format a number with appropriate suffixes (K, M, B)
 * @param {number} num - The number to format
 * @returns {string} - Formatted number string
 */
export function formatNumber(num) {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + 'B';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

/**
 * Format timestamp for console logs (HH:MM:SS format)
 * @param {Date|string} timestamp - The timestamp to format
 * @returns {string} - Formatted time string
 */
export function formatConsoleTime(timestamp) {
  if (!timestamp) return '';
  
  const date = new Date(timestamp);
  return date.toLocaleTimeString('en-US', { 
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

/**
 * Get severity color class for Tailwind CSS
 * @param {string} severity - The severity level (critical, high, medium, low)
 * @returns {string} - Tailwind CSS color class
 */
export function getSeverityColorClass(severity) {
  const colorMap = {
    critical: 'bg-red-500 text-white',
    high: 'bg-orange-500 text-white',
    medium: 'bg-yellow-500 text-white',
    low: 'bg-green-500 text-white'
  };
  
  return colorMap[severity] || colorMap.low;
}

/**
 * Get status color class for Tailwind CSS
 * @param {string} status - The status (completed, scheduled, failed, running)
 * @returns {string} - Tailwind CSS color class
 */
export function getStatusColorClass(status) {
  const colorMap = {
    completed: 'bg-green-500 text-white',
    scheduled: 'bg-gray-500 text-white',
    failed: 'bg-red-500 text-white',
    running: 'bg-primary text-white',
    pending: 'bg-yellow-500 text-white'
  };
  
  return colorMap[status] || colorMap.pending;
}

/**
 * Calculate total vulnerabilities from vulnerability object
 * @param {object} vulnerabilities - Object with critical, high, medium, low counts
 * @returns {number} - Total count
 */
export function getTotalVulnerabilities(vulnerabilities) {
  if (!vulnerabilities) return 0;
  
  return (vulnerabilities.critical || 0) + 
         (vulnerabilities.high || 0) + 
         (vulnerabilities.medium || 0) + 
         (vulnerabilities.low || 0);
}

/**
 * Format scan metadata date
 * @param {Date} date - The date to format
 * @returns {string} - Formatted date string
 */
export function formatScanDate(date) {
  if (!date) return '';
  
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
}