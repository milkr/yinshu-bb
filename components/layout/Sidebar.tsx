
import React from 'react';
import type { View } from '../../App';
import { 
  DashboardIcon, 
  ManagementIcon, 
  MusicNoteIcon, 
  CurrencyDollarIcon, 
  GlobeAltIcon, 
  CpuChipIcon 
} from '../icons/Icons';

interface SidebarProps {
  activeView: View;
  setActiveView: (view: View) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  const navItems = [
    { id: 'overview', label: '核心概览', icon: <DashboardIcon /> },
    { id: 'growth', label: '用户与增长', icon: <GlobeAltIcon /> },
    { id: 'generation', label: '模型与生产', icon: <CpuChipIcon /> },
    { id: 'finance', label: '财务分析', icon: <CurrencyDollarIcon /> },
    { id: 'management', label: '运营管理', icon: <ManagementIcon /> },
  ];

  return (
    <nav className="w-16 lg:w-64 bg-gray-950 p-2 lg:p-4 flex flex-col justify-between border-r border-gray-800">
      <div>
        <div className="flex items-center justify-center lg:justify-start space-x-3 mb-10 p-2">
          <MusicNoteIcon />
          <h1 className="text-xl font-bold hidden lg:block">音述 AI</h1>
        </div>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveView(item.id as View)}
                className={`flex items-center w-full p-3 my-2 rounded-lg transition-colors duration-200 ${
                  activeView === item.id
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {item.icon}
                <span className="ml-4 hidden lg:block">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
       <div className="p-2 text-center text-gray-500 text-xs hidden lg:block">
        © 2024 音述 AI
      </div>
    </nav>
  );
};

export default Sidebar;
