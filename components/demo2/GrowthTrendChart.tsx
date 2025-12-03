
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mockUserGrowthTrend } from '../../constants';

const GrowthTrendChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={mockUserGrowthTrend}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
        <XAxis dataKey="date" stroke="#9CA3AF" tick={{fontSize: 12}} />
        <YAxis stroke="#9CA3AF" tick={{fontSize: 12}} />
        <Tooltip
          contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#F3F4F6' }}
          itemStyle={{ color: '#F3F4F6' }}
        />
        <Legend wrapperStyle={{paddingTop: '10px'}} />
        <Line type="monotone" dataKey="newUsers" name="新增用户" stroke="#60A5FA" strokeWidth={2} dot={{r: 4}} activeDot={{r: 6}} />
        <Line type="monotone" dataKey="retainedUsers" name="老用户留存" stroke="#34D399" strokeWidth={2} dot={{r: 4}} activeDot={{r: 6}} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GrowthTrendChart;