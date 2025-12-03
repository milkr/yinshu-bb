
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { UnitCostPoint } from '../../types';

interface Props {
  data: UnitCostPoint[];
}

const UnitCostChart: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
        <XAxis dataKey="date" stroke="#9CA3AF" tick={{fontSize: 12}} />
        <YAxis stroke="#9CA3AF" tick={{fontSize: 12}} tickFormatter={(val) => `$${val}`} />
        <Tooltip
          contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#F3F4F6' }}
          formatter={(value: number) => [`$${value}`, '']}
        />
        <Legend wrapperStyle={{paddingTop: '10px'}} />
        <Line type="monotone" dataKey="YS" name="Model YS" stroke="#F87171" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="M" name="Model M" stroke="#FBBF24" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="T" name="Model T" stroke="#34D399" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default UnitCostChart;
