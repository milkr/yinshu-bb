
import React from 'react';
import { mockBalances, mockDemo2Metrics, mockCostRevenueData, mockDemo4Data } from '../../constants';
import BalanceCard from '../dashboard/BalanceCard';
import Demo2MetricCard from '../demo2/Demo2MetricCard';
import UserGrowthChart from '../dashboard/UserGrowthChart';
import RevenueStackChart from '../costRevenue/RevenueStackChart';

const OverviewDashboard: React.FC = () => {
  // Extract key high-level metrics
  const dauMetric = {
      ...mockDemo2Metrics[0],
      title: '昨日 DAU'
  }; 
  
  const revenueMetric = {
      title: '昨日收入',
      value: mockCostRevenueData.revenue.totalTrend.meta.currentValue.toString(),
      change: mockCostRevenueData.revenue.totalTrend.meta.dailyChange,
      isPositive: mockCostRevenueData.revenue.totalTrend.meta.isIncrease,
      description: '会员 + 积分'
  };
  
  const activeCreatorsMetric = {
      title: '昨日活跃创作者',
      value: mockDemo4Data.creators.activeCreators.meta.currentValue.toString(),
      change: mockDemo4Data.creators.activeCreators.meta.dailyChange,
      isPositive: mockDemo4Data.creators.activeCreators.meta.isIncrease,
      description: '昨日有生成行为'
  };
  const stabilityMetric = {
      title: '昨日核心服务可用性',
      value: mockDemo4Data.works.stability['ALL'].meta.currentValue.toString(),
      change: mockDemo4Data.works.stability['ALL'].meta.dailyChange,
      isPositive: mockDemo4Data.works.stability['ALL'].meta.isIncrease,
      description: '生成接口成功率'
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
           <h1 className="text-3xl font-bold text-white">核心概览</h1>
           <p className="text-gray-400 text-sm mt-1">全局业务监控面板</p>
        </div>
        <div className="text-sm text-gray-500">
             数据更新于: {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* 1. North Star Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Demo2MetricCard metric={dauMetric} />
          <Demo2MetricCard metric={revenueMetric} />
          <Demo2MetricCard metric={activeCreatorsMetric} />
          <Demo2MetricCard metric={stabilityMetric} />
      </div>

      {/* 2. Critical Resources (Balances) */}
      <div>
         <h3 className="text-lg font-semibold text-gray-300 mb-4">API 资源池状态</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockBalances.map(balance => (
                <BalanceCard key={balance.model} balance={balance} />
            ))}
         </div>
      </div>

      {/* 3. High Level Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
             <h3 className="text-lg font-semibold text-gray-300 mb-4">用户增长走势 (近7日)</h3>
             <div className="h-[300px]">
                 <UserGrowthChart />
             </div>
          </div>
          <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
             <h3 className="text-lg font-semibold text-gray-300 mb-4">营收增长走势 (近30日)</h3>
             <div className="h-[300px]">
                {/* Visualizing 30 days trend */}
                <RevenueStackChart data={mockCostRevenueData.revenue.totalTrend.trend['30d']} />
             </div>
          </div>
      </div>

    </div>
  );
};

export default OverviewDashboard;