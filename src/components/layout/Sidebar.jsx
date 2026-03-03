import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FolderOpen, 
  Shield, 
  Calendar, 
  Bell, 
  Settings, 
  HelpCircle,
  UserCircle
} from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const Sidebar = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  
  const navigationItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: FolderOpen, label: 'Projects', path: '/projects' },
    { icon: Shield, label: 'Scans', path: '/scans' },
    { icon: Calendar, label: 'Schedule', path: '/schedule' },
    { icon: Bell, label:'Notifications', path: '/notifications' },
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: HelpCircle, label: 'Support', path: '/support' },
  ];

  const handleNavigation = (path) => {
    if (path === '/dashboard') {
      navigate(path);
    } else if (path === '/scans') {
      // Navigate to scan detail page with a default scan ID
      navigate('/scan/1');
    } else {
      // For now, just log other navigation attempts
      console.log(`Navigation to ${path} - not implemented yet`);
    }
  };

  return (
    <div className="w-64 flex flex-col h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      {/* Logo section */}
      <div className="p-4 sm:p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-lg">a</span>
          </div>
          <span className="text-xl font-semibold text-gray-900 dark:text-white">aps</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 sm:px-4 pb-4">
        <ul className="space-y-1 sm:space-y-2">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = item.path === '/scans' 
              ? location.pathname.startsWith('/scan') 
              : location.pathname === item.path;
            return (
              <li key={index}>
                <button
                  onClick={() => handleNavigation(item.path)}
                  className={`
                    w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm
                    ${isActive 
                      ? 'bg-teal-100 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400' 
                      : 'text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200'
                    }
                  `}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium truncate">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile with top border */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-3 sm:p-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
            <UserCircle className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
              Security Lead
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
              admin@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;