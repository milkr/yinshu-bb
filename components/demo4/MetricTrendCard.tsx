
import React, { useState } from 'react';
import type { Demo4MetricData, TimeRange } from '../../types';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import ComposedRatioChart from './ComposedRatioChart';
import InfoTooltip from '../common/InfoTooltip';
import type { AxisDomain } from 'recharts/types/util/types';

interface Props {
  title: string;
  data: Demo4MetricData<any>;
  isRatio?: boolean;
  tooltip?: string;
  labels?: {
      num: string;
      denom: string;
      ratio: string;
  };
  chartDomain?: AxisDomain;
}

const MetricTrendCard: React.FC<Props> = ({ title, data, isRatio = false, tooltip, labels, chartDomain }) => {
  const [range, setRange] = useState<TimeRange>('7d');
  
  const currentData = data.trend[range];
  const meta = data.meta;

  const ranges: { id: TimeRange; label: string }[] = [
    { id: '7d', label: '7天' },
    { id: '30d', label: '30天' },
    { id: '90d', label: '90天' },
  ];

  return (
    <div className="bg-gray-950 p-6 rounded-xl border border-gray-800 flex flex-col min-h-[400px]">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-6">
        <div>
           <div className="flex items-center mb-1">
                <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
                {tooltip && <InfoTooltip content={tooltip} />}
           </div>
           <div className="flex items-end">
             <span className="text-2xl font-bold text-white mr-3">{meta.currentValue}</span>
             <span className={`text-sm font-medium mb-1 ${meta.isIncrease ? 'text-green-400' : 'text-red-400'}`}>
                {meta.isIncrease ? '↑' : '↓'} {meta.dailyChange} <span className="text-gray-600 text-xs ml-0.5">日环比</span>
             </span>
           </div>
        </div>
        <div className="flex bg-gray-900 rounded-lg p-1 border border-gray-800">
          {ranges.map((r) => (
            <button
              key={r.id}
              onClick={() => setRange(r.id)}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                range === r.id
                  ? 'bg-gray-800 text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Section */}
      <div className="flex-1 w-full">
         {isRatio && labels ? (
             <ComposedRatioChart 
                data={currentData} 
                numeratorLabel={labels.num}
                denominatorLabel={labels.denom}
                ratioLabel={labels.ratio}
                yAxisDomain={chartDomain}
             />
         ) : (
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={currentData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id={`grad-${title}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                    <XAxis dataKey="date" stroke="#9CA3AF" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                    <YAxis stroke="#9CA3AF" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#F3F4F6' }}
                        itemStyle={{ color: '#F3F4F6' }}
                    />
                    <Area 
                        type="monotone" 
                        dataKey="value" 
                        name={title}
                        stroke="#6366F1" 
                        strokeWidth={2} 
                        fill={`url(#grad-${title})`} 
                    />
                </AreaChart>
            </ResponsiveContainer>
         )}
      </div>
    </div>
  );
};

export default MetricTrendCard;
