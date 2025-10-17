// Fix: Populate constants file with mock data.
import type { Balance, User, Song, Comment, Post, Report, PostReply } from './types';

// Dashboard Data
export const mockBalances: Balance[] = [
  { model: 'S', currency: '$', amount: 1234.56 },
  { model: 'M', currency: '$', amount: 7890.12 },
  { model: 'T', currency: '$', amount: 345.67 },
];

export const mockFunctionUsage = { pv: 102345, uv: 54321 };

export const mockTotalUserCount = 120567;

export const mockDailyGeneration = [
  { date: '7天前', S: 40, M: 24, T: 24 },
  { date: '6天前', S: 30, M: 13, T: 22 },
  { date: '5天前', S: 20, M: 98, T: 22 },
  { date: '4天前', S: 27, M: 39, T: 20 },
  { date: '3天前', S: 18, M: 48, T: 21 },
  { date: '2天前', S: 23, M: 38, T: 25 },
  { date: '昨天', S: 34, M: 43, T: 20 },
];

export const mockModelDistribution = [
  { name: '模型 S', value: 400 },
  { name: '模型 M', value: 300 },
  { name: '模型 T', value: 300 },
];

export const mockDailyAvgDuration = [
    { date: '3天前', S: 25, M: 45, T: 60 },
    { date: '2天前', S: 28, M: 42, T: 65 },
    { date: '昨天', S: 26, M: 48, T: 62 },
];

export const mockDailyFunctionUsage = [
  { date: '7天前', pv: 1200, uv: 800 },
  { date: '6天前', pv: 1500, uv: 950 },
  { date: '5天前', pv: 1300, uv: 900 },
  { date: '4天前', pv: 1600, uv: 1000 },
  { date: '3天前', pv: 1800, uv: 1100 },
  { date: '2天前', pv: 1700, uv: 1050 },
  { date: '昨天', pv: 2000, uv: 1200 },
];

export const mockDailyUserGrowth = [
    { date: '7天前', totalUsers: 119800 },
    { date: '6天前', totalUsers: 119950 },
    { date: '5天前', totalUsers: 120050 },
    { date: '4天前', totalUsers: 120180 },
    { date: '3天前', totalUsers: 120300 },
    { date: '2天前', totalUsers: 120450 },
    { date: '昨天', totalUsers: 120567 },
];


// Management Data
export const mockUsers: User[] = [
  { id: 'usr_1', name: '张三', phone: '13812341234', joinDate: '2024-01-15', status: 'active' },
  { id: 'usr_2', name: '李四', phone: '13956785678', joinDate: '2024-02-20', status: 'active' },
  { id: 'usr_3', name: '王五', phone: '13790129012', joinDate: '2024-03-10', status: 'banned' },
  { id: 'usr_4', name: '赵六', phone: '13634563456', joinDate: '2024-04-05', status: 'active' },
];

export const mockSongs: Song[] = [
    { id: 'sng_1', title: '星辰大海', authorName: '张三', model: 'S', createdAt: '2024-05-10', playCount: 15234, hasStory: true, status: 'visible', recommended: true },
    { id: 'sng_2', title: '午后阳光', authorName: '李四', model: 'M', createdAt: '2024-05-12', playCount: 8765, hasStory: false, status: 'visible', recommended: false },
    { id: 'sng_3', title: '赛博梦境', authorName: '王五', model: 'T', createdAt: '2024-05-15', playCount: 120, hasStory: true, status: 'hidden', recommended: false },
    { id: 'sng_4', title: '城市霓虹', authorName: '张三', model: 'S', createdAt: '2024-05-20', playCount: 9987, hasStory: false, status: 'visible', recommended: false },
];

export const mockComments: Comment[] = [
    { 
      id: 'cmt_1', 
      content: '太好听了！这首歌的旋律直击心灵，让人无限循环。', 
      authorName: '李四', 
      songId: 'sng_1', 
      createdAt: '2024-05-11', 
      status: 'visible',
      replies: [
        { id: 'rep_1-1', content: '确实，我也这么觉得！', authorName: '赵六', createdAt: '2024-05-11', status: 'visible' },
        { id: 'rep_1-2', content: '这是什么神仙歌曲！', authorName: '孙七', createdAt: '2024-05-12', status: 'visible' },
        { id: 'rep_1-3', content: '一些不当言论需要隐藏', authorName: '周八', createdAt: '2024-05-12', status: 'hidden' },
      ]
    },
    { id: 'cmt_2', content: '有点意思，但是感觉还可以更好。', authorName: '王五', songId: 'sng_2', createdAt: '2024-05-13', status: 'visible' },
    { id: 'cmt_3', content: '违规内容，已被管理员隐藏。', authorName: '赵六', songId: 'sng_1', createdAt: '2024-05-14', status: 'hidden', replies: [
        { id: 'rep_3-1', content: '这条回复也应该看不到', authorName: '吴九', createdAt: '2024-05-14', status: 'visible' },
    ]},
    { 
      id: 'cmt_4', 
      content: '旋律很棒，制作精良，年度最佳预定！', 
      authorName: '张三', 
      songId: 'sng_4', 
      createdAt: '2024-05-21', 
      status: 'visible',
      replies: [
         { id: 'rep_4-1', content: '同意，吹爆！', authorName: '李四', createdAt: '2024-05-22', status: 'visible' },
      ]
    },
];

export const mockPosts: Post[] = [
  { id: 'post_1', title: '关于S模型的使用技巧', authorName: '张三', createdAt: '2024-06-01', status: 'visible'},
  { id: 'post_2', title: 'M模型新发现', authorName: '李四', createdAt: '2024-06-02', status: 'hidden'},
];

export const mockReports: Report[] = [
  { id: 'rep_1', reportType: '作品评论', contentId: 'cmt_3', reporterName: '张三', reason: '广告垃圾', createdAt: '2024-05-14', status: 'processed' },
  { id: 'rep_2', reportType: '作品', contentId: 'sng_3', reporterName: '李四', reason: '不当内容', createdAt: '2024-05-16', status: 'pending' },
];

export const mockPostReplies: PostReply[] = [
  { id: 'reply_1', content: '感谢分享！', userName: '李四', postId: 'post_1', createdAt: '2024-06-01', status: 'visible' },
  { id: 'reply_2', content: '这个没用', userName: '王五', postId: 'post_1', createdAt: '2024-06-02', status: 'hidden' },
];