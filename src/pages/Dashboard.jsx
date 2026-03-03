import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import StatsOverview from '../components/dashboard/StatsOverview';
import DashboardToolbar from '../components/dashboard/DashboardToolbar';
import ScanTable from '../components/dashboard/ScanTable';
import ToastContainer from '../components/common/ToastContainer';
import { mockScans, mockStats } from '../data/mockData';
import { useToast } from '../hooks/useToast';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { toasts, showSuccess, showInfo, hideToast } = useToast();

  // Filter scans based on search term
  const filteredScans = useMemo(() => {
    if (!searchTerm) return mockScans;
    
    return mockScans.filter(scan => 
      scan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scan.target.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scan.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term) {
      showInfo(`Searching for "${term}"...`);
    }
  };

  const handleNewScan = () => {
    showSuccess('New scan feature coming soon!');
  };

  const handleScanClick = (scan) => {
    showInfo(`Scan details: ${scan.name}`);
    // Remove navigation - scan details accessed via sidebar
  };

  return (
    <MainLayout title="Dashboard">
      {/* Project Info Bar - Light gray background */}
      <div className="bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between text-sm min-w-0">
          {/* Scrollable info items */}
          <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8 overflow-x-auto scrollbar-hide min-w-0 flex-1 pb-1">
            <div className="flex-shrink-0">
              <span className="text-gray-500 dark:text-gray-400">Org:</span>
              <span className="ml-2 font-medium text-gray-900 dark:text-white">Project X</span>
            </div>
            <div className="flex-shrink-0">
              <span className="text-gray-500 dark:text-gray-400">Owner:</span>
              <span className="ml-2 font-medium text-gray-900 dark:text-white">Nanmegiri</span>
            </div>
            <div className="flex-shrink-0">
              <span className="text-gray-500 dark:text-gray-400">Total Scans:</span>
              <span className="ml-2 font-medium text-gray-900 dark:text-white">100</span>
            </div>
            <div className="flex-shrink-0">
              <span className="text-gray-500 dark:text-gray-400">Scheduled:</span>
              <span className="ml-2 font-medium text-gray-900 dark:text-white">1000</span>
            </div>
            <div className="flex-shrink-0">
              <span className="text-gray-500 dark:text-gray-400">Rescans:</span>
              <span className="ml-2 font-medium text-gray-900 dark:text-white">100</span>
            </div>
            <div className="flex-shrink-0">
              <span className="text-gray-500 dark:text-gray-400">Failed Scans:</span>
              <span className="ml-2 font-medium text-gray-900 dark:text-white">100</span>
            </div>
          </div>
          
          {/* Timestamp - always visible */}
          <div className="flex items-center text-gray-500 dark:text-gray-400 flex-shrink-0 ml-4">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="whitespace-nowrap">10 mins ago</span>
          </div>
        </div>
      </div>

      {/* Main dashboard content - White background */}
      <div className="p-4 sm:p-6 bg-white dark:bg-gray-900 overflow-hidden">
        {/* Stats Overview */}
        <StatsOverview stats={mockStats} />
        
        {/* Toolbar */}
        <DashboardToolbar 
          onSearch={handleSearch}
          onNewScan={handleNewScan}
        />
        
        {/* Scan Table */}
        <ScanTable 
          scans={filteredScans}
        />
      </div>
      
      {/* Toast Notifications */}
      <ToastContainer 
        toasts={toasts}
        onToastClose={hideToast}
      />
    </MainLayout>
  );
};

export default Dashboard;