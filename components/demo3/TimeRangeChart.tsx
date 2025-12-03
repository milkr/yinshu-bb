import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import type { TimeRange, Demo3ChartPoint } from '../../types';
import InfoTooltip from '../common/InfoTooltip';

interface Props {
  title: string;
  dataMap: Record<TimeRange, Demo3ChartPoint[]>;
  type?: 'area' | 'line';
  color?: string;
  isPercentage?: boolean;
  tooltip?: string;
}

const TimeRangeChart: React.FC<Props> = ({ title, dataMap, type = 'line', color = '#6366F1', isPercentage = false, tooltip }) => {
  const [range, setRange] = useState<TimeRange>('7d');

  const data = dataMap[range];
  const ranges: { id: TimeRange; label: string }[] = [
    { id: '7d', label: '7天' },
    { id: '30d', label: '30天' },
    { id: '90d', label: '90天' },
  ];

  return (
    <div className="bg-gray-950 p-6 rounded-xl border border-gray-800 flex flex-col h-[350px]">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
          {tooltip && <InfoTooltip content={tooltip} />}
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
      
      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {type === 'area' ? (
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={color} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
              <XAxis dataKey="date" stroke="#9CA3AF" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
              <YAxis 
                stroke="#9CA3AF" 
                tick={{fontSize: 12}} 
                tickLine={false} 
                axisLine={false}
                tickFormatter={(value) => isPercentage ? `${(value * 100).toFixed(0)}%` : value} 
              />
              <Tooltip
                contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#F3F4F6' }}
                itemStyle={{ color: '#F3F4F6' }}
                formatter={(value: number) => [isPercentage ? `${(value * 100).toFixed(2)}%` : value, title]}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke={color} 
                strokeWidth={2}
                fillOpacity={1} 
                fill={`url(#gradient-${title})`} 
              />
            </AreaChart>
          ) : (
             <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
              <XAxis dataKey="date" stroke="#9CA3AF" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
              <YAxis 
                stroke="#9CA3AF" 
                tick={{fontSize: 12}} 
                tickLine={false} 
                axisLine={false}
                tickFormatter={(value) => isPercentage ? `${(value * 100).toFixed(0)}%` : value} 
              />
               <Tooltip
                contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#F3F4F6' }}
                itemStyle={{ color: '#F3F4F6' }}
                formatter={(value: number) => [isPercentage ? `${(value * 100).toFixed(2)}%` : value, title]}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke={color} 
                strokeWidth={2}
                dot={{r: 3, fill: color}} 
                activeDot={{r: 5}}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TimeRangeChart;