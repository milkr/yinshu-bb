
import React from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mockConversionFunnel } from '../../constants';

const FunnelChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={mockConversionFunnel}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
        <XAxis dataKey="date" stroke="#9CA3AF" tick={{fontSize: 12}} />
        <YAxis stroke="#9CA3AF" tick={{fontSize: 12}} />
        <Tooltip
          contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#F3F4F6' }}
        />
        <Legend wrapperStyle={{paddingTop: '10px'}} />
        <Bar dataKey="requests" name="生成请求" barSize={20} fill="#4B5563" />
        <Bar dataKey="success" name="生成成功" barSize={20} fill="#818CF8" />
        <Line type="monotone" dataKey="published" name="公开发布" stroke="#FBBF24" strokeWidth={3} dot={{r: 4}} />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default FunnelChart;