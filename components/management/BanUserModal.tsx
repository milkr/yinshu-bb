import React, { useState } from 'react';
import type { User } from '../../types';

interface BanUserModalProps {
  user: User;
  onClose: () => void;
  onConfirm: (duration: string) => void;
}

const BanUserModal: React.FC<BanUserModalProps> = ({ user, onClose, onConfirm }) => {
  const [duration, setDuration] = useState('7天');

  const handleConfirm = () => {
    onConfirm(duration);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-gray-950 p-8 rounded-xl border border-gray-800 w-full max-w-md m-4">
        <h2 className="text-2xl font-bold mb-4">封禁用户</h2>
        <p className="mb-6 text-gray-400">
          您确定要封禁用户 <span className="font-bold text-white">{user.name}</span> 吗？
        </p>
        
        <div className="mb-6">
          <label htmlFor="duration" className="block mb-2 text-sm font-medium text-gray-300">
            封禁时长
          </label>
          <select
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
          >
            <option>1天</option>
            <option>7天</option>
            <option>30天</option>
            <option>永久</option>
          </select>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors"
          >
            取消
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors"
          >
            确认封禁
          </button>
        </div>
      </div>
    </div>
  );
};

export default BanUserModal;
