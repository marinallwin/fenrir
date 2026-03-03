import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { mockScans, mockLogs, mockVulnerabilities, mockScanMetadata, mockScanProgress } from '../data/mockData';

// Helper function to render highlighted text
const renderHighlightedText = (message, highlights = []) => {
  if (!highlights || highlights.length === 0) {
    return message;
  }

  let result = message;
  let offset = 0;
  
  highlights.forEach((highlight, index) => {
    const { text, type } = highlight;
    const startIndex = result.indexOf(text, offset);
    
    if (startIndex !== -1) {
      const beforeText = result.substring(0, startIndex);
      const highlightedText = result.substring(startIndex, startIndex + text.length);
      const afterText = result.substring(startIndex + text.length);
      
      let colorClass = '';
      switch (type) {
        case 'url':
          colorClass = 'text-teal-400';
          break;
        case 'header':
          colorClass = 'text-blue-400';
          break;
        case 'keyword':
          colorClass = 'text-yellow-400';
          break;
        default:
          colorClass = 'text-gray-300';
      }
      
      result = (
        <>
          {beforeText}
          <span className={colorClass}>{highlightedText}</span>
          {afterText}
        </>
      );
      offset = startIndex + text.length;
    }
  });
  
  return result;
};

const ScanDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('activity');
  const scan = mockScans.find(s => s.id === id);

  if (!scan) {
    return (
      <MainLayout title="Scan Not Found">
        <div className="p-4 sm:p-6">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Scan Not Found
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              The scan you're looking for doesn't exist.
            </p>
          </div>
        </div>
      </MainLayout>
    );
  }

  const steps = [
    { name: 'Spidering', status: 'active' },
    { name: 'Mapping', status: 'pending' },
    { name: 'Testing', status: 'pending' },
    { name: 'Validating', status: 'pending' },
    { name: 'Reporting', status: 'pending' }
  ];

  const breadcrumbs = [
    { label: 'Scan', active: false },
    { label: 'Private Assets', active: false },
    { label: 'New Scan', active: true }
  ];

  const actions = [
    <button key="export" className="px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
      Export Report
    </button>,
    <button key="stop" className="px-3 sm:px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs sm:text-sm font-medium transition-colors">
      Stop Scan
    </button>
  ];

  return (
    <MainLayout title="Scan" breadcrumbs={breadcrumbs} actions={actions}>
      <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-900 min-h-full overflow-hidden">
        {/* Progress and Steps Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 shadow-sm overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Circular Progress */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="32"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    className="text-gray-200 dark:text-gray-700"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="32"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 32}`}
                    strokeDashoffset={`${2 * Math.PI * 32 * (1 - 0 / 100)}`}
                    className="text-teal-500 transition-all duration-300"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">0%</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">In Progress</span>
                </div>
              </div>
            </div>

            {/* Step Tracker */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center flex-1">
                    <div className="flex items-center space-x-3 sm:flex-col sm:space-x-0 sm:space-y-2">
                      <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${
                        step.status === 'active' 
                          ? 'bg-teal-500 text-white' 
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                      }`}>
                        {step.status === 'active' ? (
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                        ) : (
                          <span>{index + 1}</span>
                        )}
                      </div>
                      <span className="text-xs sm:text-xs font-medium text-gray-600 dark:text-gray-400">{step.name}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden sm:block flex-1 h-0.5 bg-gray-200 dark:bg-gray-700 mx-3"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Metadata Row */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 text-sm">
            <div>
              <span className="text-gray-500 dark:text-gray-400 text-xs font-medium block">Scan Type</span>
              <p className="font-medium text-gray-900 dark:text-white mt-1 truncate">{mockScanMetadata.scanType}</p>
            </div>
            <div>
              <span className="text-gray-500 dark:text-gray-400 text-xs font-medium block">Targets</span>
              <p className="font-medium text-gray-900 dark:text-white mt-1 truncate">{mockScanMetadata.targets}</p>
            </div>
            <div>
              <span className="text-gray-500 dark:text-gray-400 text-xs font-medium block">Started At</span>
              <p className="font-medium text-gray-900 dark:text-white mt-1 truncate">Nov 22, 09:00AM</p>
            </div>
            <div>
              <span className="text-gray-500 dark:text-gray-400 text-xs font-medium block">Credentials</span>
              <p className="font-medium text-gray-900 dark:text-white mt-1 truncate">{mockScanMetadata.credentials}</p>
            </div>
            <div>
              <span className="text-gray-500 dark:text-gray-400 text-xs font-medium block">Files</span>
              <p className="font-medium text-gray-900 dark:text-white mt-1 truncate">{mockScanMetadata.files}</p>
            </div>
            <div>
              <span className="text-gray-500 dark:text-gray-400 text-xs font-medium block">Checklists</span>
              <p className="font-medium text-gray-900 dark:text-white mt-1 truncate">{mockScanMetadata.checklists}</p>
            </div>
          </div>
        </div>

        {/* Console and Findings Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 overflow-hidden">
          {/* Live Scan Console - Full width on mobile, 2/3 on desktop */}
          <div className="xl:col-span-2 order-1 min-w-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
              <div className="border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 py-3 space-y-2 sm:space-y-0 min-w-0">
                  <div className="flex items-center space-x-2 min-w-0">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">Live Scan Console</h3>
                  </div>
                  <div className="flex items-center justify-between min-w-0">
                    <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
                      <button
                        onClick={() => setActiveTab('activity')}
                        className={`px-3 py-1.5 text-xs font-medium relative whitespace-nowrap ${
                          activeTab === 'activity'
                            ? 'text-teal-600 dark:text-teal-400'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                        }`}
                      >
                        Activity Log
                        {activeTab === 'activity' && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500"></div>
                        )}
                      </button>
                      <button
                        onClick={() => setActiveTab('verification')}
                        className={`px-3 py-1.5 text-xs font-medium relative whitespace-nowrap ${
                          activeTab === 'verification'
                            ? 'text-teal-600 dark:text-teal-400'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                        }`}
                      >
                        Verification Loops
                        {activeTab === 'verification' && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500"></div>
                        )}
                      </button>
                    </div>
                    <div className="flex items-center space-x-2 ml-4 flex-shrink-0">
                      <button className="text-gray-400 hover:text-gray-600 p-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 p-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-3 sm:p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 h-64 sm:h-80 lg:h-96 overflow-y-auto custom-scrollbar font-mono text-xs leading-relaxed border-t border-gray-200 dark:border-gray-700">
                {mockLogs.map((log) => (
                  <div key={log.id} className="mb-1 flex min-w-0">
                    <span className="text-gray-500 mr-2 flex-shrink-0 text-xs">[{log.timestamp}]</span>
                    <div className="flex-1 text-xs sm:text-xs break-words min-w-0">
                      {log.highlights && log.highlights.length > 0 ? (
                        <span>
                          {(() => {
                            let result = log.message;
                            log.highlights.forEach((highlight) => {
                              const regex = new RegExp(`(${highlight.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'g');
                              const colorClass = highlight.type === 'url' ? 'text-teal-600' :
                                               highlight.type === 'header' ? 'text-blue-600' :
                                               highlight.type === 'keyword' ? 'text-yellow-600' :
                                               'text-gray-800 dark:text-gray-200';
                              result = result.replace(regex, `<span class="${colorClass}">$1</span>`);
                            });
                            return <span dangerouslySetInnerHTML={{ __html: result }} />;
                          })()}
                        </span>
                      ) : (
                        <span>{log.message}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Finding Log - Full width on mobile, 1/3 on desktop */}
          <div className="xl:col-span-1 order-2 min-w-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
              <div className="border-b border-gray-200 dark:border-gray-700 px-4 py-3">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">Finding Log</h3>
              </div>
              
              <div className="p-3 sm:p-4 h-64 sm:h-80 lg:h-96 overflow-y-auto custom-scrollbar space-y-3 sm:space-y-4">
                {mockVulnerabilities.map((vuln) => (
                  <div key={vuln.id} className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-3 sm:p-4 shadow-sm overflow-hidden">
                    <div className="flex items-start justify-between mb-2 sm:mb-3">
                      <span className={`px-2 py-1 rounded-md text-xs font-bold flex-shrink-0 ${
                        vuln.severity === 'critical' ? 'bg-red-500 text-white' :
                        vuln.severity === 'high' ? 'bg-orange-500 text-white' :
                        vuln.severity === 'medium' ? 'bg-yellow-500 text-white' :
                        'bg-green-500 text-white'
                      }`}>
                        {vuln.severity.charAt(0).toUpperCase() + vuln.severity.slice(1)}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0 ml-2">
                        {vuln.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 leading-tight break-words">
                      {vuln.title}
                    </h4>
                    <p className="text-xs text-teal-600 dark:text-teal-400 mb-2 sm:mb-3 font-mono bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded break-all">
                      {vuln.endpoint}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed break-words">
                      {vuln.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="mt-4 sm:mt-6 bg-white dark:bg-gray-800 rounded-lg px-4 sm:px-6 py-3 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 text-sm">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div>
                <span className="text-gray-500 dark:text-gray-400">Sub-agents:</span>
                <span className="ml-2 font-medium text-gray-900 dark:text-white">0</span>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400">Parallel Executions:</span>
                <span className="ml-2 font-medium text-gray-900 dark:text-white">2</span>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400">Operations:</span>
                <span className="ml-2 font-medium text-gray-900 dark:text-white">1</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="text-red-500 font-medium text-xs">Critical: 0</span>
                <span className="text-orange-500 font-medium text-xs">High: 0</span>
                <span className="text-yellow-500 font-medium text-xs">Medium: 0</span>
                <span className="text-green-500 font-medium text-xs">Low: 0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ScanDetail;
