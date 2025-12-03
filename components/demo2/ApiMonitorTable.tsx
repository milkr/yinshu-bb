
import React from 'react';
import { mockApiStats } from '../../constants';

const ApiMonitorTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-400">
        <thead className="text-xs text-gray-400 uppercase bg-gray-900 border-b border-gray-800">
          <tr>
            <th scope="col" className="px-6 py-3">模型名称</th>
            <th scope="col" className="px-6 py-3">调用次数 (Volume)</th>
            <th scope="col" className="px-6 py-3">失败率 (Failure Rate)</th>
            <th scope="col" className="px-6 py-3">平均耗时 (Latency)</th>
            <th scope="col" className="px-6 py-3">
               作品发布率 (Quality)
               <span className="ml-1 text-[10px] text-gray-500 font-normal">内容验证指标</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {mockApiStats.map((api, index) => {
            let failureColor = 'text-green-400';
            if (api.failureRate > 1) failureColor = 'text-yellow-400';
            if (api.failureRate > 5) failureColor = 'text-red-400';

            return (
              <tr key={index} className="bg-gray-950 border-b border-gray-800 hover:bg-gray-900/50">
                <td className="px-6 py-4 font-medium text-white">{api.modelName}</td>
                <td className="px-6 py-4">{api.volume.toLocaleString()}</td>
                <td className={`px-6 py-4 font-semibold ${failureColor}`}>
                  {api.failureRate}%
                </td>
                <td className="px-6 py-4">{api.latency} ms</td>
                <td className="px-6 py-4">
                  <div className="w-full bg-gray-800 rounded-full h-2.5 dark:bg-gray-700 max-w-[100px] inline-block mr-2 align-middle">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${api.publishRate}%` }}></div>
                  </div>
                  <span className="text-white">{api.publishRate}%</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ApiMonitorTable;