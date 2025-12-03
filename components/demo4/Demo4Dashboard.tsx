
import React from 'react';
import MetricTrendCard from './MetricTrendCard';
import { mockDemo4Data } from '../../constants';

const Demo4Dashboard: React.FC = () => {
  const { users, creators, community } = mockDemo4Data;
  
  return (
    <div className="space-y-12 pb-10">
      
      {/* 1. User Data */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
            一、用户数据
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MetricTrendCard 
                title="昨日注册用户数" 
                data={users.registration} 
            />
            <MetricTrendCard 
                title="昨日活跃用户数" 
                data={users.activeUser} 
            />
        </div>
      </section>

      {/* 2. Creator Data */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-2 h-8 bg-purple-500 rounded-full mr-3"></span>
            二、创作者数据
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
             <MetricTrendCard 
                title="昨日新创作者数" 
                data={creators.newCreators} 
                tooltip="新创作者 = 当日成功生成作品的注册用户数"
            />
            <MetricTrendCard 
                title="昨日新创作者激活率" 
                data={creators.activationRate} 
                isRatio={true}
                tooltip="当日成功生成作品的注册用户数 / 当日新增注册用户数"
                labels={{ num: '新创作者', denom: '新增注册', ratio: '激活率' }}
            />
            <MetricTrendCard 
                title="昨日活跃创作者数" 
                data={creators.activeCreators} 
            />
            
            {/* Creator Retention */}
            <div className="flex flex-col space-y-6 lg:space-y-0">
               <MetricTrendCard 
                  title="创作者次日留存率" 
                  data={creators.retentionNextDay} 
                  isRatio={true}
                  labels={{ num: '次日留存数', denom: '首日活跃数', ratio: '留存率' }}
               />
            </div>
            <MetricTrendCard 
                  title="创作者7日留存率" 
                  data={creators.retention7Day} 
                  isRatio={true}
                  labels={{ num: '7日留存数', denom: '首日活跃数', ratio: '留存率' }}
            />
        </div>
      </section>

      {/* 3. Community Data */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-2 h-8 bg-pink-500 rounded-full mr-3"></span>
            三、社区数据
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MetricTrendCard 
                title="再创作比例趋势" 
                data={community.remixRatio} 
                isRatio={true}
                tooltip="再创作的作品数 / 总成功作品数"
                labels={{ num: '再创作数', denom: '总成功数', ratio: '再创作率' }}
            />
            <MetricTrendCard 
                title="互动覆盖率" 
                data={community.interactionCoverage} 
                isRatio={true}
                tooltip="产生过评论或点赞行为的活跃用户数 / 总活跃用户数"
                labels={{ num: '互动用户数', denom: '活跃用户数', ratio: '覆盖率' }}
            />
            <MetricTrendCard 
                title="日评论数趋势" 
                data={community.dailyComments} 
            />
            <MetricTrendCard 
                title="日点赞数趋势" 
                data={community.dailyLikes} 
            />
        </div>
      </section>

    </div>
  );
};

export default Demo4Dashboard;
