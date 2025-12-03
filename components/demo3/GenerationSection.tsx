
import React, { useState } from 'react';
import { mockDemo3Data } from '../../constants';
import TimeRangeChart from './TimeRangeChart';
import type { ApiFilter, GenTypeFilter } from '../../types';

const GenerationSection: React.FC = () => {
  const [apiFilter, setApiFilter] = useState<ApiFilter>('ALL');
  const [typeFilter, setTypeFilter] = useState<GenTypeFilter>('ALL');

  const apiOptions: ApiFilter[] = ['ALL', 'YS', 'T', 'M'];
  const typeOptions: { id: GenTypeFilter; label: string }[] = [
    { id: 'ALL', label: '全部' },
    { id: 'ORIGINAL', label: '原创' },
    { id: 'REMIX', label: '再创作' },
  ];

  // Get data based on current filters
  // mockDemo3Data.generation[api][type][range].count/rate
  const currentData = mockDemo3Data.generation[apiFilter][typeFilter];

  const chartDataRate = {
      '7d': currentData['7d'].rate,
      '30d': currentData['30d'].rate,
      '90d': currentData['90d'].rate,
  };

  const chartDataCount = {
      '7d': currentData['7d'].count,
      '30d': currentData['30d'].count,
      '90d': currentData['90d'].count,
  };

  const chartDataDownloads = {
      '7d': currentData['7d'].downloads,
      '30d': currentData['30d'].downloads,
      '90d': currentData['90d'].downloads,
  };

  return (
    <div className="space-y-6">
       <div className="flex flex-col md:flex-row md:items-center justify-between bg-gray-900/50 p-4 rounded-xl border border-gray-800">
         <h2 className="text-xl font-bold text-white mb-4 md:mb-0">作品生成数据</h2>
         
         <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6">
            {/* Filter 1: API */}
            <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">API:</span>
                <div className="flex bg-gray-950 rounded-lg p-1 border border-gray-800">
                    {apiOptions.map(opt => (
                        <button
                            key={opt}
                            onClick={() => setApiFilter(opt)}
                            className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                                apiFilter === opt ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-gray-200'
                            }`}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            </div>

            {/* Filter 2: Type */}
            <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">方式:</span>
                <div className="flex bg-gray-950 rounded-lg p-1 border border-gray-800">
                    {typeOptions.map(opt => (
                        <button
                            key={opt.id}
                            onClick={() => setTypeFilter(opt.id)}
                            className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                                typeFilter === opt.id ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-gray-200'
                            }`}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            </div>
         </div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           <TimeRangeChart 
                title="成功生成作品转化率" 
                dataMap={chartDataRate} 
                type="line" 
                color="#10B981" 
                isPercentage={true}
                tooltip="成功生成作品转化率 = 成功生成作品数 / 发送请求数。 (发送请求数 = 成功 + 失败的总请求数)"
            />
           <TimeRangeChart 
                title="日成功作品数" 
                dataMap={chartDataCount} 
                type="area" 
                color="#8B5CF6" 
                tooltip="每日成功生成的作品数"
            />
            <TimeRangeChart 
                title="日作品下载数" 
                dataMap={chartDataDownloads} 
                type="area" 
                color="#06B6D4" 
                tooltip="每日被用户下载的作品数量趋势。"
            />
       </div>
    </div>
  );
};

export default GenerationSection;
