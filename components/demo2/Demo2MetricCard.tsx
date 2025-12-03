
import React from 'react';
import type { Demo2Metric } from '../../types';

interface Props {
  metric: Demo2Metric;
}

const Demo2MetricCard: React.FC<Props> = ({ metric }) => {
  return (
    <div className="bg-gray-950 p-4 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
      <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">{metric.title}</p>
      <div className="flex items-end justify-between mt-2">
        <h4 className="text-2xl font-bold text-gray-100">{metric.value}</h4>
        <div className={`flex items-center text-xs font-medium px-2 py-0.5 rounded ${
          metric.isPositive ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'
        }`}>
          {metric.isPositive ? '↑' : '↓'} {metric.change}
        </div>
      </div>
      <p className="text-xs text-gray-600 mt-2">{metric.description}</p>
    </div>
  );
};

export default Demo2MetricCard;