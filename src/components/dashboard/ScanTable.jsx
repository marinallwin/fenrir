import React from 'react';
import Badge from '../common/Badge';
import StatusChip from '../common/StatusChip';
import { formatRelativeTime } from '../../utils/formatters';

const ScanTable = ({ scans }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700/50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                SCAN NAME
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                TYPE
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                STATUS
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                PROGRESS
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                VULNERABILITIES
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                LAST SCAN
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {scans.map((scan) => (
              <tr 
                key={scan.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
              >
                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {scan.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {scan.target}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-900 dark:text-gray-300">
                    {scan.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <StatusChip status={scan.status} />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-teal-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${scan.progress}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 min-w-[3rem]">
                      {scan.progress}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-1">
                    {scan.vulnerabilities.critical > 0 && (
                      <Badge count={scan.vulnerabilities.critical} severity="critical" size="sm" />
                    )}
                    {scan.vulnerabilities.high > 0 && (
                      <Badge count={scan.vulnerabilities.high} severity="high" size="sm" />
                    )}
                    {scan.vulnerabilities.medium > 0 && (
                      <Badge count={scan.vulnerabilities.medium} severity="medium" size="sm" />
                    )}
                    {scan.vulnerabilities.low > 0 && (
                      <Badge count={scan.vulnerabilities.low} severity="low" size="sm" />
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {formatRelativeTime(scan.lastScan)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="lg:hidden">
        {scans.map((scan) => (
          <div
            key={scan.id}
            className="p-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {scan.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {scan.target}
                </p>
              </div>
              <StatusChip status={scan.status} />
            </div>
            
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-900 dark:text-gray-300">
                {scan.type}
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-teal-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${scan.progress}%` }}
                  />
                </div>
                <span className="text-xs text-gray-700 dark:text-gray-300">
                  {scan.progress}%
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                {scan.vulnerabilities.critical > 0 && (
                  <Badge count={scan.vulnerabilities.critical} severity="critical" size="sm" />
                )}
                {scan.vulnerabilities.high > 0 && (
                  <Badge count={scan.vulnerabilities.high} severity="high" size="sm" />
                )}
                {scan.vulnerabilities.medium > 0 && (
                  <Badge count={scan.vulnerabilities.medium} severity="medium" size="sm" />
                )}
                {scan.vulnerabilities.low > 0 && (
                  <Badge count={scan.vulnerabilities.low} severity="low" size="sm" />
                )}
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {formatRelativeTime(scan.lastScan)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScanTable;