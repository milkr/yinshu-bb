
import React from 'react';
import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { RatioTrendPoint } from '../../types';
import type { AxisDomain } from 'recharts/types/util/types';

interface Props {
  data: RatioTrendPoint[];
  numeratorLabel: string;
  denominatorLabel: string;
  ratioLabel: string;
  yAxisDomain?: AxisDomain;
}

const ComposedRatioChart: React.FC<Props> = ({ data, numeratorLabel, denominatorLabel, ratioLabel, yAxisDomain = [0, 1] }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={data}
        margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
        
        {/* X Axis */}
        <XAxis 
            dataKey="date" 
            stroke="#9CA3AF" 
            tick={{fontSize: 12}} 
            tickLine={false} 
            axisLine={false} 
        />
        
        {/* Left Y Axis: Counts (Numerator & Denominator) */}
        <YAxis 
            yAxisId="left" 
            stroke="#9CA3AF" 
            tick={{fontSize: 12}} 
            tickLine={false} 
            axisLine={false} 
        />
        
        {/* Right Y Axis: Ratio (Percentage) */}
        <YAxis 
            yAxisId="right" 
            orientation="right" 
            stroke="#F59E0B" 
            tick={{fontSize: 12}} 
            tickLine={false} 
            axisLine={false}
            tickFormatter={(val) => `${(val * 100).toFixed(0)}%`}
            domain={yAxisDomain} 
        />
        
        <Tooltip
          contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#F3F4F6' }}
          itemStyle={{ color: '#F3F4F6' }}
          formatter={(value: number, name: string) => {
              if (name === ratioLabel) return [`${(value * 100).toFixed(2)}%`, name];
              return [value.toLocaleString(), name];
          }}
        />
        
        <Legend wrapperStyle={{ paddingTop: '10px' }} />
        
        {/* 1. 分母曲线 (Denominator) - 灰色虚线，代表基数 */}
        <Line 
            yAxisId="left" 
            type="monotone" 
            dataKey="denominator" 
            name={denominatorLabel} 
            stroke="#9CA3AF" 
            strokeWidth={2}
            strokeDasharray="5 5" // 虚线效果
            dot={false}
            activeDot={{r: 4, fill: '#9CA3AF'}}
        />
        
        {/* 2. 分子曲线 (Numerator) - 蓝色实线，代表实际量 */}
        <Line 
            yAxisId="left" 
            type="monotone" 
            dataKey="numerator" 
            name={numeratorLabel} 
            stroke="#60A5FA" 
            strokeWidth={2}
            dot={false}
            activeDot={{r: 4, fill: '#60A5FA'}}
        />

        {/* 3. 比例曲线 (Ratio) - 橙色加粗实线，右轴，代表率 */}
        <Line 
            yAxisId="right" 
            type="monotone" 
            dataKey="ratio" 
            name={ratioLabel} 
            stroke="#F59E0B" 
            strokeWidth={3} // 加粗突出
            dot={{r: 3, fill: '#F59E0B'}}
            activeDot={{r: 5}}
        />

      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default ComposedRatioChart;
