import React from 'react';
import { Search, Filter, Columns } from 'lucide-react';
import Button from '../common/Button';
import ThemeToggle from '../common/ThemeToggle';

const Header = ({ title, onMenuToggle, showMobileMenu = false, breadcrumbs, actions }) => {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Mobile menu + Breadcrumbs */}
        <div className="flex items-center space-x-4 min-w-0 flex-1">
          {showMobileMenu && (
            <button
              onClick={onMenuToggle}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex-shrink-0"
            >
              <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
          
          {/* Breadcrumbs */}
          {breadcrumbs ? (
            <nav className="flex items-center space-x-2 text-sm min-w-0">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  <span className={`${crumb.active ? 'text-teal-600 dark:text-teal-400' : 'text-gray-500 dark:text-gray-400'} truncate`}>
                    {crumb.label}
                  </span>
                </React.Fragment>
              ))}
            </nav>
          ) : (
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
              {title}
            </h1>
          )}
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
          {actions && (
            <div className="hidden sm:flex items-center space-x-2">
              {actions}
            </div>
          )}
          <ThemeToggle />
          
          {/* Mobile actions menu */}
          {actions && (
            <div className="sm:hidden">
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile actions dropdown */}
      {actions && (
        <div className="sm:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col space-y-2">
            {actions}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;