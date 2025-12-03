
import React from 'react';
import { mockDemo2Metrics } from '../../constants';
import Demo2MetricCard from './Demo2MetricCard';
import GrowthTrendChart from './GrowthTrendChart';
import FunnelChart from './FunnelChart';
import InteractionChart from './InteractionChart';
import ApiMonitorTable from './ApiMonitorTable';

const Demo2Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h1 className="text-3xl font-bold">社区深度运营数据</h1>
          <p className="text-gray-400 text-sm mt-1">监控社区生命力、内容转化效率与底层模型表现</p>
        </div>
        <div className="text-sm text-gray-500">
            数据更新于: 刚刚
        </div>
      </div>

      {/* Row 1: Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {mockDemo2Metrics.map((metric, index) => (
          <Demo2MetricCard key={index} metric={metric} />
        ))}
      </div>

      {/* Row 2: Community Vitality Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-950 p-6 rounded-xl border border-gray-800 flex flex-col">
          <h3 className="text-lg font-semibold mb-1">用户增长趋势</h3>
          <p className="text-xs text-gray-500 mb-4">新注册用户 vs 老用户留存对比</p>
          <div className="flex-1 min-h-[300px]">
            <GrowthTrendChart />
          </div>
        </div>
        <div className="bg-gray-950 p-6 rounded-xl border border-gray-800 flex flex-col">
          <h3 className="text-lg font-semibold mb-1">作品转化漏斗</h3>
          <p className="text-xs text-gray-500 mb-4">生成请求 -> 成功生成 -> 公开发布 (每日趋势)</p>
          <div className="flex-1 min-h-[300px]">
            <FunnelChart />
          </div>
        </div>
      </div>

      {/* Row 3: Interaction Chart (Full Width now) */}
      <div className="bg-gray-950 p-6 rounded-xl border border-gray-800 flex flex-col">
        <h3 className="text-lg font-semibold mb-1">社区互动深度</h3>
        <p className="text-xs text-gray-500 mb-4">再创作 (Remix) 数量 vs 互动总量 (点赞/评论)</p>
        <div className="flex-1 min-h-[300px]">
           <InteractionChart />
        </div>
      </div>

      {/* Row 4: API Cost & Efficiency */}
      <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">核心 API 监控</h3>
            <p className="text-sm text-gray-500">对比不同底层模型的成本、稳定性与内容质量（发布率）</p>
          </div>
          <ApiMonitorTable />
      </div>
    </div>
  );
};

export default Demo2Dashboard;
