
import React, { useState } from 'react';
import MetricTrendCard from '../demo4/MetricTrendCard';
import StabilityValuesCard from '../demo4/StabilityValuesCard';
import DurationChart from '../dashboard/DurationChart';
import BalanceCard from '../dashboard/BalanceCard';
import DistributionChart from '../dashboard/DistributionChart';
import { mockDemo4Data, mockBalances } from '../../constants';
import type { ApiFilter } from '../../types';

const GenerationDashboard: React.FC = () => {
  const { works } = mockDemo4Data;
  const [apiFilter, setApiFilter] = useState<ApiFilter>('ALL');
  const apiOptions: ApiFilter[] = ['ALL', 'YS', 'T', 'M'];

  return (
    <div className="space-y-8 pb-10">
      <div className="flex justify-between items-end mb-2">
         <h1 className="text-3xl font-bold">模型与生产</h1>
         <span className="text-sm text-gray-500">API 资源 · 生成稳定性 · 效能监控</span>
      </div>

      {/* 1. Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockBalances.map(balance => (
          <BalanceCard key={balance.model} balance={balance} />
        ))}
      </div>

      <div className="border-t border-gray-800 my-8"></div>

      {/* 2. Efficiency & Quality */}
      <h2 className="text-2xl font-bold flex items-center mb-6 text-green-400">
            <span className="w-2 h-8 bg-green-500 rounded-full mr-3"></span>
            生产效能指标
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MetricTrendCard 
              title="成功生成作品转化率" 
              data={works.successRate} 
              isRatio={true}
              tooltip="成功生成作品转化率 = 成功生成的作品数 / 发出的请求数"
              labels={{ num: '成功生成数', denom: '发出请求数', ratio: '转化率' }}
              chartDomain={['auto', 'auto']}
          />
            <MetricTrendCard 
              title="作品价值认可率" 
              data={works.valueRecognition} 
              isRatio={true}
              tooltip="作品价值认可率 = 下载作品数 / 成功生成作品总数"
              labels={{ num: '下载作品数', denom: '成功生成数', ratio: '认可率' }}
          />
      </div>
      
      {/* 3. Stability & Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* API Stability with Filter */}
          <div className="relative">
              <div className="absolute top-0 right-0 z-10 mr-12 mt-6 lg:mt-6">
                    <div className="flex bg-gray-900 rounded-lg p-1 border border-gray-800 text-xs">
                      {apiOptions.map(opt => (
                          <button
                              key={opt}
                              onClick={() => setApiFilter(opt)}
                              className={`px-2 py-0.5 rounded-md transition-all ${
                                  apiFilter === opt ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-gray-200'
                              }`}
                          >
                              {opt}
                          </button>
                      ))}
                  </div>
              </div>
              <StabilityValuesCard 
                  title={`核心流程稳定性 (${apiFilter})`} 
                  data={works.stability[apiFilter]} 
                  tooltip="稳定性 = 生成成功次数 / 总生成请求次数"
              />
          </div>

          {/* Average Generation Duration */}
          <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold">平均成功生成时长（秒、近3日）</h2>
            <p className="text-sm text-gray-500 mt-1 mb-4">公式：总成功生成时长 / 总成功生成次数</p>
            <DurationChart />
          </div>
      </div>

      {/* 4. Model Distribution */}
      <div className="bg-gray-950 p-6 rounded-xl border border-gray-800 mt-6">
           <h2 className="text-xl font-semibold">近30天模型生成分布</h2>
           <p className="text-sm text-gray-500 mt-1 mb-4">公式：当前模型成功生成的作品数 / 所有作品数</p>
          <DistributionChart />
      </div>

    </div>
  );
};

export default GenerationDashboard;
