import React, { useState, useMemo } from 'react';
import { mockSongs } from '../../constants';
import type { Song } from '../../types';

const SongManagement: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>(mockSongs);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: keyof Song; direction: 'asc' | 'desc' }>({ key: 'createdAt', direction: 'desc' });

  const sortedAndFilteredSongs = useMemo(() => {
    let sortableItems = [...songs].filter(song =>
      song.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.authorName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        let valA, valB;
        
        if (sortConfig.key === 'createdAt') {
            valA = new Date(a.createdAt).getTime();
            valB = new Date(b.createdAt).getTime();
        } else if (sortConfig.key === 'playCount') {
            valA = a.playCount;
            valB = b.playCount;
        } else {
            valA = a[sortConfig.key] || '';
            valB = b[sortConfig.key] || '';
        }

        if (valA < valB) {
            return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (valA > valB) {
            return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [songs, searchTerm, sortConfig]);

  const requestSort = (key: keyof Song) => {
    let direction: 'asc' | 'desc' = 'desc';
    if (sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = 'asc';
    }
    setSortConfig({ key, direction });
  };

  const toggleSongStatus = (songId: string) => {
    setSongs(songs.map(song =>
      song.id === songId
        ? { ...song, status: song.status === 'visible' ? 'hidden' : 'visible' }
        : song
    ));
  };

  const toggleRecommendation = (songId: string) => {
    setSongs(songs.map(song =>
        song.id === songId ? { ...song, recommended: !song.recommended } : song
    ));
  };

  const getSortIndicator = (key: keyof Song) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'asc' ? '▲' : '▼';
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
              <th scope="col" className="px-6 py-3">作品ID</th>
              <th scope="col" className="px-6 py-3">标题</th>
              <th scope="col" className="px-6 py-3">作者</th>
              <th scope="col" className="px-6 py-3">模型</th>
              <th scope="col" className="px-6 py-3 hover:bg-gray-700/50 transition-colors" onClick={() => requestSort('createdAt')}>
                <div className="flex items-center cursor-pointer">
                  创建时间
                  <span className="ml-1 w-4 text-center">{getSortIndicator('createdAt')}</span>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 hover:bg-gray-700/50 transition-colors" onClick={() => requestSort('playCount')}>
                <div className="flex items-center cursor-pointer">
                  播放次数
                  <span className="ml-1 w-4 text-center">{getSortIndicator('playCount')}</span>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">有无故事</th>
              <th scope="col" className="px-6 py-3">可见状态</th>
              <th scope="col" className="px-6 py-3">推荐状态</th>
              <th scope="col" className="px-6 py-3">操作</th>
            </tr>
          </thead>
          <tbody>
            {sortedAndFilteredSongs.map((song) => {
              const isVisible = song.status === 'visible';
              const isRecommended = song.recommended;
              
              const disableHideAction = isVisible && isRecommended;
              const disableRecommendAction = !isVisible && !isRecommended;

              return (
                <tr key={song.id} className="bg-gray-900 border-b border-gray-800 hover:bg-gray-800/50">
                  <td className="px-6 py-4 font-medium text-white whitespace-nowrap">{song.id}</td>
                  <td className="px-6 py-4">{song.title}</td>
                  <td className="px-6 py-4">{song.authorName}</td>
                  <td className="px-6 py-4">{song.model}</td>
                  <td className="px-6 py-4">{song.createdAt}</td>
                  <td className="px-6 py-4">{song.playCount.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      song.hasStory ? 'bg-green-900 text-green-300' : 'bg-gray-700 text-gray-300'
                    }`}>
                      {song.hasStory ? '有' : '无'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      isVisible ? 'bg-blue-900 text-blue-300' : 'bg-gray-700 text-gray-300'
                    }`}>
                      {isVisible ? '可见' : '隐藏'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      isRecommended ? 'bg-purple-900 text-purple-300' : 'bg-gray-700 text-gray-300'
                    }`}>
                      {isRecommended ? '已推荐' : '未推荐'}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex space-x-4">
                    <button
                      onClick={() => toggleSongStatus(song.id)}
                      disabled={disableHideAction}
                      title={disableHideAction ? '请先取消推荐，再隐藏作品' : ''}
                      className={`font-medium transition-colors ${
                        disableHideAction
                          ? 'text-gray-500 cursor-not-allowed'
                          : 'text-yellow-500 hover:underline'
                      }`}
                    >
                      {isVisible ? '隐藏' : '显示'}
                    </button>
                    <button
                      onClick={() => toggleRecommendation(song.id)}
                      disabled={disableRecommendAction}
                      title={disableRecommendAction ? '请先显示作品，再进行推荐' : ''}
                      className={`font-medium transition-colors ${
                        disableRecommendAction
                          ? 'text-gray-500 cursor-not-allowed'
                          : 'text-indigo-500 hover:underline'
                      }`}
                    >
                      {isRecommended ? '取消推荐' : '推荐'}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SongManagement;