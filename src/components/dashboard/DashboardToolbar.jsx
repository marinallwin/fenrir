import React from 'react';
import { Search, Filter, Columns } from 'lucide-react';
import Button from '../common/Button';

const DashboardToolbar = ({ onSearch, onNewScan, onFilter, onColumns }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleFilter = () => {
    if (onFilter) {
      onFilter();
    } else {
      console.log('Filter functionality coming soon...');
    }
  };

  const handleColumns = () => {
    if (onColumns) {
      onColumns();
    } else {
      console.log('Column customization coming soon...');
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
        <input
          type="text"
          placeholder="Search scans by name or type..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-200"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-3">
        <button 
          onClick={handleFilter}
          className="inline-flex items-center px-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </button>
        
        <button 
          onClick={handleColumns}
          className="inline-flex items-center px-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
        >
          <Columns className="w-4 h-4 mr-2" />
          Columns
        </button>
        
        <button 
          onClick={onNewScan}
          className="inline-flex items-center px-6 py-2.5 bg-teal-500 hover:bg-teal-600 text-white rounded-lg text-sm font-medium transition-colors"
        >
          New scan
        </button>
      </div>
    </div>
  );
};

export default DashboardToolbar;