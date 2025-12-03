
import React, { useState } from 'react';
import { mockCostRevenueData } from '../../constants';
import MetricTrendCard from '../demo4/MetricTrendCard';
import RevenueStackChart from './RevenueStackChart';
import InfoTooltip from '../common/InfoTooltip';
import type { TimeRange } from '../../types';

const CostRevenueDashboard: React.FC = () => {
  const { revenue, monetization, costs } = mockCostRevenueData;
  const [revenueRange, setRevenueRange] = useState<TimeRange>('30d');

  const revenueRanges: { id: TimeRange; label: string }[] = [
    { id: '7d', label: '7天' },
    { id: '30d', label: '30天' },
    { id: '90d', label: '90天' },
  ];

  return (
    <div className="space-y-12 pb-10">
      <div className="flex justify-between items-end mb-2">
         <h1 className="text-3xl font-bold">成本与收入分析</h1>
         <span className="text-sm text-gray-500">财务健康度监控</span>
      </div>

      {/* 1. Revenue Overview */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center text-green-400">
            <span className="w-2 h-8 bg-green-500 rounded-full mr-3"></span>
            一、收入规模与结构
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Total Revenue Stacked Chart */}
            <div className="lg:col-span-2 bg-gray-950 p-6 rounded-xl border border-gray-800 flex flex-col min-h-[400px]">
                <div className="flex justify-between items-center mb-6">
                     <div className="flex items-center">
                        <h3 className="text-lg font-semibold text-gray-200">总收入趋势 (会员 + 积分)</h3>
                        <InfoTooltip content="展示每日总收入，并堆叠显示会员订阅收入与积分包单次购买收入。" />
                     </div>
                     <div className="flex bg-gray-900 rounded-lg p-1 border border-gray-800">
                        {revenueRanges.map((r) => (
                            <button
                                key={r.id}
                                onClick={() => setRevenueRange(r.id)}
                                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                                    revenueRange === r.id
                                    ? 'bg-gray-800 text-white shadow-sm'
                                    : 'text-gray-500 hover:text-gray-300'
                                }`}
                            >
                                {r.label}
                            </button>
                        ))}
                     </div>
                </div>
                <div className="flex-1">
                    <RevenueStackChart data={revenue.totalTrend.trend[revenueRange]} />
                </div>
            </div>

            {/* Revenue Share Ratios */}
            <div className="flex flex-col space-y-6">
                 <MetricTrendCard 
                    title="会员收入占比趋势" 
                    data={revenue.membershipShare} 
                    isRatio={true}
                    labels={{ num: '会员收入', denom: '总收入', ratio: '占比' }}
                    chartDomain={[0, 1]}
                 />
                 <MetricTrendCard 
                    title="积分收入占比趋势" 
                    data={revenue.creditShare} 
                    isRatio={true}
                    labels={{ num: '积分收入', denom: '总收入', ratio: '占比' }}
                    chartDomain={[0, 1]}
                 />
            </div>
        </div>
      </section>

      {/* 2. Monetization Efficiency */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center text-blue-400">
            <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
            二、付费渗透与转化
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
             <MetricTrendCard 
                title="创作者付费渗透率" 
                data={monetization.creatorPenetration} 
                isRatio={true}
                tooltip="当月有任意付费行为（买会员或买积分）的用户数 / 当月活跃创作者数。"
                labels={{ num: '付费用户', denom: '活跃创作者', ratio: '渗透率' }}
             />
             <MetricTrendCard 
                title="新人首次付费转化率" 
                data={monetization.firstTimeConversion} 
                isRatio={true}
                tooltip="新注册7日内成功生成作品的用户中，在30天内完成首付费的比例。"
                labels={{ num: '首付用户', denom: '新创作者', ratio: '转化率' }}
             />
        </div>
      </section>

      {/* 3. Cost Structure */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center text-red-400">
            <span className="w-2 h-8 bg-red-500 rounded-full mr-3"></span>
            三、API 成本结构
        </h2>
        <div className="grid grid-cols-1 gap-6">
             {/* Cost Rate */}
             <MetricTrendCard 
                title="API 总成本率" 
                data={costs.apiCostRate} 
                isRatio={true}
                tooltip="（三家 API 成本合计）/ 收入总额。衡量商业模式健康度的核心指标。"
                labels={{ num: 'API总成本', denom: '总收入', ratio: '成本率' }}
             />
        </div>
      </section>

    </div>
  );
};

export default CostRevenueDashboard;
