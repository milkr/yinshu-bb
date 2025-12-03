
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mockInteractionDepth } from '../../constants';

const InteractionChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={mockInteractionDepth}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorRemix" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#EC4899" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#EC4899" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorEngage" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
        <XAxis dataKey="date" stroke="#9CA3AF" tick={{fontSize: 12}} />
        <YAxis yAxisId="left" stroke="#EC4899" label={{ value: 'Remix 数量', angle: -90, position: 'insideLeft', fill: '#EC4899', fontSize: 10 }} tick={{fontSize: 12}} />
        <YAxis yAxisId="right" orientation="right" stroke="#6366F1" label={{ value: '互动总量', angle: 90, position: 'insideRight', fill: '#6366F1', fontSize: 10 }} tick={{fontSize: 12}} />
        <Tooltip
          contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#F3F4F6' }}
        />
        <Legend wrapperStyle={{paddingTop: '10px'}} />
        <Area yAxisId="left" type="monotone" dataKey="remix" name="再创作 (Remix)" stroke="#EC4899" fillOpacity={1} fill="url(#colorRemix)" />
        <Area yAxisId="right" type="monotone" dataKey="engagement" name="互动 (点赞/评论)" stroke="#6366F1" fillOpacity={1} fill="url(#colorEngage)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default InteractionChart;