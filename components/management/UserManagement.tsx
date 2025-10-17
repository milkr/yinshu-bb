
import React, { useState, useMemo } from 'react';
import { mockUsers } from '../../constants';
import type { User } from '../../types';

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  const toggleUserStatus = (userId: string) => {
    setUsers(users.map(u => 
      u.id === userId ? { ...u, status: u.status === 'active' ? 'banned' : 'active' } : u
    ));
  };

  return (
    <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
      <input
        type="text"
        placeholder="按ID、名称或手机号搜索..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs text-gray-300 uppercase bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3">用户ID</th>
              <th scope="col" className="px-6 py-3">名称</th>
              <th scope="col" className="px-6 py-3">手机号</th>
              <th scope="col" className="px-6 py-3">加入日期</th>
              <th scope="col" className="px-6 py-3">状态</th>
              <th scope="col" className="px-6 py-3">操作</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="bg-gray-900 border-b border-gray-800 hover:bg-gray-800/50">
                <td className="px-6 py-4 font-medium text-white whitespace-nowrap">{user.id}</td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.phone}</td>
                <td className="px-6 py-4">{user.joinDate}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user.status === 'active' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                  }`}>
                    {user.status === 'banned' ? '已封禁' : '正常'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => toggleUserStatus(user.id)}
                    className={`font-medium ${
                      user.status === 'active' ? 'text-red-500 hover:underline' : 'text-green-500 hover:underline'
                    }`}
                  >
                    {user.status === 'active' ? '封禁' : '解封'}
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

export default UserManagement;