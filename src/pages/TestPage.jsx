import React from 'react';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import StatusChip from '../components/common/StatusChip';
import ProgressBar from '../components/common/ProgressBar';
import ThemeToggle from '../components/common/ThemeToggle';
import ResponsiveContainer from '../components/layout/ResponsiveContainer';

const TestPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      <ResponsiveContainer className="py-8">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              Component Test Page
            </h1>
            <ThemeToggle />
          </div>

          {/* Responsive Grid Test */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Responsive Grid Test</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-teal-500 text-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold">1</div>
                <div className="text-sm">Grid Item</div>
              </div>
              <div className="bg-red-500 text-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold">2</div>
                <div className="text-sm">Grid Item</div>
              </div>
              <div className="bg-orange-500 text-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm">Grid Item</div>
              </div>
              <div className="bg-yellow-500 text-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold">4</div>
                <div className="text-sm">Grid Item</div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Buttons</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="danger">Danger Button</Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
          </div>

          {/* Badges */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Severity Badges</h2>
            <div className="flex flex-wrap gap-4">
              <Badge severity="critical" count={5} />
              <Badge severity="high" count={12} />
              <Badge severity="medium" count={8} />
              <Badge severity="low" count={3} />
            </div>
          </div>

          {/* Status Chips */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Status Chips</h2>
            <div className="flex flex-wrap gap-4">
              <StatusChip status="completed" />
              <StatusChip status="scheduled" />
              <StatusChip status="failed" />
              <StatusChip status="running" />
            </div>
          </div>

          {/* Progress Bars */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Progress Bars</h2>
            <div className="space-y-3">
              <ProgressBar percentage={100} color="green" />
              <ProgressBar percentage={75} color="primary" />
              <ProgressBar percentage={45} color="yellow" />
              <ProgressBar percentage={12} color="red" />
            </div>
          </div>

          {/* Mobile/Desktop Test */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Responsive Visibility Test</h2>
            <div className="space-y-2">
              <div className="block sm:hidden bg-blue-500 text-white p-4 rounded-lg text-center">
                Mobile Only (less than 640px)
              </div>
              <div className="hidden sm:block md:hidden bg-green-500 text-white p-4 rounded-lg text-center">
                Small Tablet (640px - 768px)
              </div>
              <div className="hidden md:block lg:hidden bg-orange-500 text-white p-4 rounded-lg text-center">
                Tablet (768px - 1024px)
              </div>
              <div className="hidden lg:block xl:hidden bg-purple-500 text-white p-4 rounded-lg text-center">
                Desktop (1024px - 1280px)
              </div>
              <div className="hidden xl:block bg-pink-500 text-white p-4 rounded-lg text-center">
                Large Desktop (greater than 1280px)
              </div>
            </div>
          </div>

          {/* Form Test */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Responsive Form Test</h2>
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                <Button className="w-full sm:w-auto" variant="primary">
                  Submit Form
                </Button>
              </form>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default TestPage;