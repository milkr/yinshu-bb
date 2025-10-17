import React, { useState, useMemo } from 'react';
import { mockPostReplies } from '../../constants';
import type { PostReply } from '../../types';

const PostReplyManagement: React.FC = () => {
  const [replies, setReplies] = useState<PostReply[]>(mockPostReplies);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredReplies = useMemo(() => {
    return replies.filter(reply =>
      reply.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reply.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reply.userName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [replies, searchTerm]);

  const toggleReplyStatus = (replyId: string) => {
    setReplies(replies.map(reply =>
      reply.id === replyId
        ? { ...reply, status: reply.status === 'visible' ? 'hidden' : 'visible' }
        : reply
    ));
  };

  return (
    <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
      <input
        type="text"
        placeholder="按ID、内容或用户搜索..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs text-gray-300 uppercase bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3">回复ID</th>
              <th scope="col" className="px-6 py-3">内容</th>
              <th scope="col" className="px-6 py-3">用户</th>
              <th scope="col" className="px-6 py-3">帖子ID</th>
              <th scope="col" className="px-6 py-3">创建时间</th>
              <th scope="col" className="px-6 py-3">状态</th>
              <th scope="col" className="px-6 py-3">操作</th>
            </tr>
          </thead>
          <tbody>
            {filteredReplies.map((reply) => (
              <tr key={reply.id} className="bg-gray-900 border-b border-gray-800 hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium text-white whitespace-nowrap">{reply.id}</td>
                <td className="px-6 py-4 max-w-md truncate">{reply.content}</td>
                <td className="px-6 py-4">{reply.userName}</td>
                <td className="px-6 py-4">{reply.postId}</td>
                <td className="px-6 py-4">{reply.createdAt}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    reply.status === 'visible' ? 'bg-blue-900 text-blue-300' : 'bg-gray-700 text-gray-300'
                  }`}>
                    {reply.status === 'visible' ? '可见' : '隐藏'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => toggleReplyStatus(reply.id)}
                    className="font-medium text-yellow-500 hover:underline"
                  >
                    {reply.status === 'visible' ? '隐藏' : '显示'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostReplyManagement;