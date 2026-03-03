import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ScanDetail from './pages/ScanDetail';

function App() {
  return (
    <ThemeProvider>
      <div className="w-full h-full overflow-x-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/scans" element={<Navigate to="/scan/1" replace />} />
            <Route path="/scan/:id" element={<ScanDetail />} />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;