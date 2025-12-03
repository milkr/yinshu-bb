import React from 'react';
import Demo3MetricCard from './Demo3MetricCard';
import TimeRangeChart from './TimeRangeChart';
import GenerationSection from './GenerationSection';
import { mockDemo3Data } from '../../constants';

const Demo3Dashboard: React.FC = () => {
  const { userMetrics, charts } = mockDemo3Data;

  return (
    <div className="space-y-10 pb-10">
      
      {/* 1. User Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
            一、用户数据
        </h2>
        
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Demo3MetricCard 
                title="昨日注册用户数" 
                value={userMetrics.registration.value} 
                changeRate={userMetrics.registration.changeRate} 
                isIncrease={userMetrics.registration.isIncrease} 
                tooltip="昨日注册的用户数（去重）。"
            />
            <Demo3MetricCard 
                title="昨日活跃用户数" 
                value={userMetrics.activeUser.value} 
                changeRate={userMetrics.activeUser.changeRate} 
                isIncrease={userMetrics.activeUser.isIncrease}
                tooltip="昨天有行为的用户数（去重）。是指当天有登录 / 打开等行为，就算活跃，可能没有创作作品。"
            />
            <Demo3MetricCard 
                title="昨日活跃创作者数" 
                value={userMetrics.activeCreator.value} 
                changeRate={userMetrics.activeCreator.changeRate} 
                isIncrease={userMetrics.activeCreator.isIncrease}
                tooltip="昨日成功生成 ≥1 首作品的用户数（去重）。"
            />
            <Demo3MetricCard 
                title="昨日新创作者数" 
                value={userMetrics.newCreator.value} 
                changeRate={userMetrics.newCreator.changeRate} 
                isIncrease={userMetrics.newCreator.isIncrease}
                tooltip="昨日首次成功生成 ≥1 首作品的用户数（去重）。"
            />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <TimeRangeChart 
                title="用户注册日趋势" 
                dataMap={charts.registration} 
                type="area" 
                color="#3B82F6" 
                tooltip="每日注册用户数趋势。"
            />
            <TimeRangeChart 
                title="活跃用户趋势" 
                dataMap={charts.activeUser} 
                type="area" 
                color="#6366F1" 
                tooltip="每日活跃用户数趋势。"
            />
            <TimeRangeChart 
                title="活跃创作者趋势" 
                dataMap={charts.activeCreator} 
                type="area" 
                color="#8B5CF6" 
                tooltip="每日活跃创作者数趋势（至少生成 1 首作品）。"
            />
            <TimeRangeChart 
                title="新创作者日趋势" 
                dataMap={charts.newCreator} 
                type="area" 
                color="#EC4899" 
                tooltip="每日首次成功生成作品的用户数趋势。"
            />
        </div>

        {/* Retention */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TimeRangeChart 
                title="用户 7 日留存趋势" 
                dataMap={charts.userRetention} 
                type="line" 
                color="#10B981" 
                isPercentage 
                tooltip="每天计算 1 个点，展示「当天有行为的用户，在之后 7 天内任意一天还有行为」的比例。"
            />
            <TimeRangeChart 
                title="创作者 7 日留存趋势" 
                dataMap={charts.creatorRetention} 
                type="line" 
                color="#F59E0B" 
                isPercentage 
                tooltip="每天计算 1 个点，展示「当天为活跃创作者的用户，在之后 7 天内，任意一天还有成功创作行为」的比例。"
            />
        </div>
      </section>

      {/* 2. Generation Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
             <span className="w-2 h-8 bg-purple-500 rounded-full mr-3"></span>
            二、作品生成数据
        </h2>
        <GenerationSection />
      </section>

      {/* 3. Interaction Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-2 h-8 bg-pink-500 rounded-full mr-3"></span>
            三、社区互动数据
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TimeRangeChart title="评论趋势" dataMap={charts.comments} type="area" color="#F472B6" />
            <TimeRangeChart title="点赞趋势" dataMap={charts.likes} type="area" color="#FB7185" />
        </div>
      </section>

    </div>
  );
};

export default Demo3Dashboard;