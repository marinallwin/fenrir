import React from 'react';
import StatsCard from './StatsCard';

const StatsOverview = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatsCard
        title="Critical"
        count={stats.critical.count}
        change={stats.critical.change}
        severity="critical"
      />
      <StatsCard
        title="High"
        count={stats.high.count}
        change={stats.high.change}
        severity="high"
      />
      <StatsCard
        title="Medium"
        count={stats.medium.count}
        change={stats.medium.change}
        severity="medium"
      />
      <StatsCard
        title="Low"
        count={stats.low.count}
        change={stats.low.change}
        severity="low"
      />
    </div>
  );
};

export default StatsOverview;