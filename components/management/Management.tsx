
import React, { useState } from 'react';
import UserManagement from './UserManagement';
import SongManagement from './SongManagement';
import CommentManagement from './CommentManagement';

type ManagementTab = 'users' | 'songs' | 'comments';

const Management: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ManagementTab>('users');

  const renderContent = () => {
    switch (activeTab) {
      case 'users':
        return <UserManagement />;
      case 'songs':
        return <SongManagement />;
      case 'comments':
        return <CommentManagement />;
      default:
        return <UserManagement />;
    }
  };

  const tabs: { id: ManagementTab; label: string }[] = [
    { id: 'users', label: '用户管理' },
    { id: 'songs', label: '作品管理' },
    { id: 'comments', label: '作品评论管理' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">内容管理</h1>
      <div className="border-b border-gray-700 mb-6">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? 'border-indigo-500 text-indigo-400'
                  : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};

export default Management;