
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mockDailyUserGrowth } from '../../constants';

const UserGrowthChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={mockDailyUserGrowth}
        margin={{
          top: 5,
          right: 20,
          left: 0,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#ffc658" stopOpacity={0}/>
          </linearGradient>
        </defs>
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
        <Area type="monotone" dataKey="totalUsers" name="注册用户总数" stroke="#ffc658" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default UserGrowthChart;