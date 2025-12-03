import React from 'react';
import type { Demo4MetricData, RatioTrendPoint } from '../../types';
import InfoTooltip from '../common/InfoTooltip';

interface Props {
  title: string;
  data: Demo4MetricData<RatioTrendPoint[]>;
  tooltip?: string;
}

const StabilityValuesCard: React.FC<Props> = ({ title, data, tooltip }) => {
  const recentData = [...data.trend['7d']].reverse(); // Show latest first
  const meta = data.meta;

  return (
    <div className="bg-gray-950 p-6 rounded-xl border border-gray-800 flex flex-col h-full min-h-[400px]">
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
        <div className="text-xs text-gray-500 bg-gray-900 px-2 py-1 rounded border border-gray-800">
            近7日数据
        </div>
      </div>

      {/* Table Section */}
      <div className="flex-1 overflow-x-auto">
         <table className="w-full text-sm text-left text-gray-400">
            <thead className="text-xs text-gray-500 uppercase bg-gray-900/50 border-b border-gray-800">
                <tr>
                    <th className="px-4 py-3">日期</th>
                    <th className="px-4 py-3 text-right">成功次数</th>
                    <th className="px-4 py-3 text-right">总请求数</th>
                    <th className="px-4 py-3 text-right">成功率</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
                {recentData.map((row) => {
                    // Highlight low stability
                    const isLow = row.ratio < 0.95;
                    const rateColor = isLow ? 'text-red-400 font-bold' : 'text-green-400';
                    
                    return (
                        <tr key={row.date} className="hover:bg-gray-800/30 transition-colors">
                            <td className="px-4 py-3 font-medium text-gray-300">{row.date}</td>
                            <td className="px-4 py-3 text-right">{row.numerator.toLocaleString()}</td>
                            <td className="px-4 py-3 text-right">{row.denominator.toLocaleString()}</td>
                            <td className={`px-4 py-3 text-right ${rateColor}`}>
                                {(row.ratio * 100).toFixed(2)}%
                            </td>
                        </tr>
                    );
                })}
            </tbody>
         </table>
      </div>
    </div>
  );
};

export default StabilityValuesCard;