
import React, { useEffect, useRef, useState } from 'react';
import { mockRealTimeLogs } from '../../constants';
import type { LogEntry } from '../../types';

const RealTimeLog: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>(mockRealTimeLogs);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Simulate incoming logs
  useEffect(() => {
    const interval = setInterval(() => {
      const actions = ['生成作品', '发布作品', 'Remix', '点赞', '评论'];
      const users = ['User_X', 'User_Y', 'User_Z', 'Guest_123'];
      const newLog: LogEntry = {
        id: Date.now().toString(),
        timestamp: new Date().toLocaleTimeString('en-US', { hour12: false }),
        user: users[Math.floor(Math.random() * users.length)],
        action: actions[Math.floor(Math.random() * actions.length)],
        details: 'Simulated realtime activity...',
        type: Math.random() > 0.9 ? 'error' : 'info'
      };

      setLogs(prev => [...prev.slice(-19), newLog]); // Keep last 20
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (bottomRef.current) {
        bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  const getTypeColor = (type: LogEntry['type']) => {
      switch (type) {
          case 'error': return 'text-red-400';
          case 'warning': return 'text-yellow-400';
          case 'success': return 'text-green-400';
          default: return 'text-blue-400';
      }
  };

  return (
    <div className="flex-1 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        {logs.map((log) => (
            <div key={log.id} className="text-xs border-b border-gray-800 pb-2 last:border-0">
                <div className="flex items-center space-x-2 mb-1">
                    <span className="text-gray-500 font-mono">[{log.timestamp}]</span>
                    <span className={`font-semibold ${getTypeColor(log.type)}`}>{log.action}</span>
                    <span className="text-gray-300 font-medium">{log.user}</span>
                </div>
                <div className="text-gray-500 pl-2">
                    {log.details}
                </div>
            </div>
        ))}
        <div ref={bottomRef} />
    </div>
  );
};

export default RealTimeLog;