import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mockDailyAvgDuration } from '../../constants';

const DurationChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart 
        data={mockDailyAvgDuration}
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
          cursor={{fill: '#374151'}}
        />
        <Legend />
        <Bar dataKey="S" fill="#8884d8" name="模型 S" />
        <Bar dataKey="M" fill="#82ca9d" name="模型 M" />
        <Bar dataKey="T" fill="#ffc658" name="模型 T" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DurationChart;