
import React from 'react';
import StatCard from './StatCard';
import GenerationChart from './GenerationChart';
import FunctionUsageChart from './FunctionUsageChart';
import UserGrowthChart from './UserGrowthChart';
import { mockFunctionUsage, mockTotalUserCount } from '../../constants';
import { ClicksIcon, UsersIcon, TotalUsersIcon } from '../icons/Icons';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">数据看板</h1>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="多合一功能 PV (截止昨日)" value={mockFunctionUsage.pv.toLocaleString()} icon={<ClicksIcon />} />
        <StatCard title="多合一功能 UV (截止昨日)" value={mockFunctionUsage.uv.toLocaleString()} icon={<UsersIcon />} />
        <StatCard title="注册用户总数 (截止昨日)" value={mockTotalUserCount.toLocaleString()} icon={<TotalUsersIcon />} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
           <h2 className="text-xl font-semibold mb-4">每日歌曲生成量 (近7日)</h2>
          <GenerationChart />
        </div>
        <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
           <h2 className="text-xl font-semibold mb-4">注册用户增长趋势 (近7日)</h2>
          <UserGrowthChart />
        </div>
        <div className="lg:col-span-2 bg-gray-950 p-6 rounded-xl border border-gray-800">
           <h2 className="text-xl font-semibold mb-4">多合一功能使用趋势 (近7日)</h2>
          <FunctionUsageChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
