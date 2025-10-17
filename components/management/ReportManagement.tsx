import React, { useState, useMemo } from 'react';
import { mockReports } from '../../constants';
import type { Report, ReportType } from '../../types';

const reportTypeDisplay: Record<ReportType, string> = {
  '作品': '作品 (Song)',
  '作品评论': '作品评论 (Song Comment)',
  '帖子': '帖子 (Post)',
  '帖子评论': '帖子评论 (Post Comment)',
  '帖子回复': '帖子回复 (Post Reply)',
};

const ReportManagement: React.FC = () => {
  const [reports, setReports] = useState<Report[]>(mockReports);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredReports = useMemo(() => {
    return reports.filter(report =>
      report.contentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.reporterName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.reason.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [reports, searchTerm]);

  const processReport = (reportId: string) => {
    setReports(reports.map(report =>
      report.id === reportId ? { ...report, status: 'processed' } : report
    ));
  };

  return (
    <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
      <input
        type="text"
        placeholder="按内容ID、举报人或原因搜索..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs text-gray-300 uppercase bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3">举报类型</th>
              <th scope="col" className="px-6 py-3">内容ID</th>
              <th scope="col" className="px-6 py-3">举报人</th>
              <th scope="col" className="px-6 py-3">举报原因</th>
              <th scope="col" className="px-6 py-3">举报时间</th>
              <th scope="col" className="px-6 py-3">状态</th>
              <th scope="col" className="px-6 py-3">操作</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((report) => (
              <tr key={report.id} className="bg-gray-900 border-b border-gray-800 hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium text-white whitespace-nowrap">{reportTypeDisplay[report.reportType]}</td>
                <td className="px-6 py-4">{report.contentId}</td>
                <td className="px-6 py-4">{report.reporterName}</td>
                <td className="px-6 py-4 max-w-xs truncate">{report.reason}</td>
                <td className="px-6 py-4">{report.createdAt}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    report.status === 'pending' ? 'bg-yellow-900 text-yellow-300' : 'bg-green-900 text-green-300'
                  }`}>
                    {report.status === 'pending' ? '待处理' : '已处理'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {report.status === 'pending' && (
                    <button
                      onClick={() => processReport(report.id)}
                      className="font-medium text-green-500 hover:underline"
                    >
                      标记为已处理
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportManagement;