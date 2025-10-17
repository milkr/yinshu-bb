// Fix: Implement the CommentManagement component.
import React, { useState, useMemo, Fragment } from 'react';
import { mockComments } from '../../constants';
import type { Comment, CommentReply } from '../../types';

const CommentManagement: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCommentId, setExpandedCommentId] = useState<string | null>(null);

  const filteredComments = useMemo(() => {
    return comments.filter(comment =>
      comment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.authorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.songId.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [comments, searchTerm]);

  const toggleCommentStatus = (commentId: string) => {
    setComments(comments.map(comment =>
      comment.id === commentId
        ? { ...comment, status: comment.status === 'visible' ? 'hidden' : 'visible' }
        : comment
    ));
    // If we hide a comment, collapse its replies view
    if (expandedCommentId === commentId) {
        const comment = comments.find(c => c.id === commentId);
        if (comment && comment.status === 'visible') { // it's about to be hidden
             setExpandedCommentId(null);
        }
    }
  };
  
  const toggleReplyStatus = (commentId: string, replyId: string) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId && comment.replies) {
        const updatedReplies = comment.replies.map(reply => 
          reply.id === replyId ? { ...reply, status: reply.status === 'visible' ? 'hidden' : 'visible' } : reply
        );
        return { ...comment, replies: updatedReplies };
      }
      return comment;
    }));
  };

  const handleExpandClick = (commentId: string) => {
    setExpandedCommentId(expandedCommentId === commentId ? null : commentId);
  };


  return (
    <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
      <input
        type="text"
        placeholder="按ID、内容、作者或作品ID搜索..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs text-gray-300 uppercase bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3">评论ID</th>
              <th scope="col" className="px-6 py-3">内容</th>
              <th scope="col" className="px-6 py-3">作者</th>
              <th scope="col" className="px-6 py-3">作品ID</th>
              <th scope="col" className="px-6 py-3">回复数</th>
              <th scope="col" className="px-6 py-3">创建时间</th>
              <th scope="col" className="px-6 py-3">状态</th>
              <th scope="col" className="px-6 py-3">操作</th>
            </tr>
          </thead>
          <tbody>
            {filteredComments.map((comment) => (
              <Fragment key={comment.id}>
                <tr className="bg-gray-900 border-b border-gray-800 hover:bg-gray-800/50">
                  <td className="px-6 py-4 font-medium text-white whitespace-nowrap">{comment.id}</td>
                  <td className="px-6 py-4 max-w-sm truncate" title={comment.content}>{comment.content}</td>
                  <td className="px-6 py-4">{comment.authorName}</td>
                  <td className="px-6 py-4">{comment.songId}</td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => handleExpandClick(comment.id)}
                      disabled={!comment.replies || comment.replies.length === 0 || comment.status === 'hidden'}
                      className="text-indigo-400 disabled:text-gray-500 disabled:cursor-not-allowed hover:underline"
                    >
                      {comment.replies?.length || 0}
                    </button>
                  </td>
                  <td className="px-6 py-4">{comment.createdAt}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      comment.status === 'visible' ? 'bg-blue-900 text-blue-300' : 'bg-gray-700 text-gray-300'
                    }`}>
                      {comment.status === 'visible' ? '可见' : '隐藏'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => toggleCommentStatus(comment.id)}
                      className="font-medium text-yellow-500 hover:underline"
                    >
                      {comment.status === 'visible' ? '隐藏' : '显示'}
                    </button>
                  </td>
                </tr>
                {expandedCommentId === comment.id && comment.status === 'visible' && (
                  <tr className="bg-gray-800/30">
                    <td colSpan={8} className="p-0">
                      <div className="p-4 mx-8 my-2 bg-gray-900/50 rounded-lg">
                        <h4 className="text-md font-semibold text-gray-200 mb-3">回复列表</h4>
                        <table className="w-full text-sm text-left text-gray-400">
                           <thead className="text-xs text-gray-300 uppercase bg-gray-800/60">
                             <tr>
                               <th scope="col" className="px-4 py-2">内容</th>
                               <th scope="col" className="px-4 py-2">回复人</th>
                               <th scope="col" className="px-4 py-2">回复时间</th>
                               <th scope="col" className="px-4 py-2">状态</th>
                               <th scope="col" className="px-4 py-2">操作</th>
                             </tr>
                           </thead>
                           <tbody>
                            {comment.replies?.map(reply => (
                              <tr key={reply.id} className="border-b border-gray-700/50">
                                <td className="px-4 py-3 max-w-md truncate" title={reply.content}>{reply.content}</td>
                                <td className="px-4 py-3">{reply.authorName}</td>
                                <td className="px-4 py-3">{reply.createdAt}</td>
                                <td className="px-4 py-3">
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    reply.status === 'visible' ? 'bg-blue-900 text-blue-300' : 'bg-gray-700 text-gray-300'
                                  }`}>
                                    {reply.status === 'visible' ? '可见' : '隐藏'}
                                  </span>
                                </td>
                                <td className="px-4 py-3">
                                   <button
                                      onClick={() => toggleReplyStatus(comment.id, reply.id)}
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
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommentManagement;