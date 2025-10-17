
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mockDailyFunctionUsage } from '../../constants';

const FunctionUsageChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={mockDailyFunctionUsage}
        margin={{
          top: 5,
          right: 20,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey="date" stroke="#9CA3AF" />
        <YAxis stroke="#9CA3AF" />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1F2937',
            borderColor: '#4B5563',
          }}
        />
        <Legend />
        <Line type="monotone" dataKey="pv" name="PV" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" name="UV" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default FunctionUsageChart;