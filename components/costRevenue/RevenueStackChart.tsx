
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { RevenueTrendPoint } from '../../types';

interface Props {
  data: RevenueTrendPoint[];
}

const RevenueStackChart: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        stacked
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
        <XAxis dataKey="date" stroke="#9CA3AF" tick={{fontSize: 12}} />
        <YAxis stroke="#9CA3AF" tick={{fontSize: 12}} />
        <Tooltip
          contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#F3F4F6' }}
          formatter={(value: number) => [`¥${value.toLocaleString()}`, '']}
          cursor={{fill: '#1f2937'}}
        />
        <Legend wrapperStyle={{paddingTop: '10px'}} />
        <Bar dataKey="membership" name="会员收入" stackId="a" fill="#10B981" />
        <Bar dataKey="credits" name="积分收入" stackId="a" fill="#3B82F6" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RevenueStackChart;
