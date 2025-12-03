import React from 'react';
import InfoTooltip from '../common/InfoTooltip';

interface Props {
  title: string;
  value: number | string;
  changeRate?: number;
  isIncrease?: boolean;
  tooltip?: string;
}

const Demo3MetricCard: React.FC<Props> = ({ title, value, changeRate, isIncrease, tooltip }) => {
  return (
    <div className="bg-gray-950 p-5 rounded-xl border border-gray-800 hover:border-gray-700 transition-all">
      <div className="flex items-center">
        <h4 className="text-gray-400 text-sm font-medium">{title}</h4>
        {tooltip && <InfoTooltip content={tooltip} />}
      </div>
      <div className="flex items-end justify-between mt-3">
        <span className="text-3xl font-bold text-white tracking-tight">
          {typeof value === 'number' ? value.toLocaleString() : value}
        </span>
        {changeRate !== undefined && (
          <div className={`flex items-center text-xs font-bold px-2 py-1 rounded-md ${
            isIncrease ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
          }`}>
            <span className="mr-1">{isIncrease ? '↑' : '↓'}</span>
            {changeRate}%
            <span className="text-gray-500 ml-1 font-normal hidden xl:inline">环比</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Demo3MetricCard;