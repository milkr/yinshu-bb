import React, { useState, useMemo } from 'react';
import { mockPosts } from '../../constants';
import type { Post } from '../../types';

const PostManagement: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = useMemo(() => {
    return posts.filter(post =>
      post.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.authorName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [posts, searchTerm]);

  const togglePostStatus = (postId: string) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, status: post.status === 'visible' ? 'hidden' : 'visible' }
        : post
    ));
  };

  return (
    <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
      <input
        type="text"
        placeholder="按ID、标题或作者搜索..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs text-gray-300 uppercase bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3">ID</th>
              <th scope="col" className="px-6 py-3">标题</th>
              <th scope="col" className="px-6 py-3">作者</th>
              <th scope="col" className="px-6 py-3">创建时间</th>
              <th scope="col" className="px-6 py-3">状态</th>
              <th scope="col" className="px-6 py-3">操作</th>
            </tr>
          </thead>
          <tbody>
            {filteredPosts.map((post) => (
              <tr key={post.id} className="bg-gray-900 border-b border-gray-800 hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium text-white whitespace-nowrap">{post.id}</td>
                <td className="px-6 py-4">{post.title}</td>
                <td className="px-6 py-4">{post.authorName}</td>
                <td className="px-6 py-4">{post.createdAt}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    post.status === 'visible' ? 'bg-blue-900 text-blue-300' : 'bg-gray-700 text-gray-300'
                  }`}>
                    {post.status === 'visible' ? '可见' : '隐藏'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => togglePostStatus(post.id)}
                    className="font-medium text-yellow-500 hover:underline"
                  >
                    {post.status === 'visible' ? '隐藏' : '显示'}
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

export default PostManagement;
