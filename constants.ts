// Fix: Populate constants file with mock data.
import type { Balance, User, Song, Comment, Post, Report, PostReply, Demo2Metric, ApiMonitorData, LogEntry, Demo3DataCollection, TimeRange, Demo3ChartPoint, Demo4DataCollection, SimpleTrendPoint, RatioTrendPoint, ApiFilter, CostRevenueDataCollection, RevenueTrendPoint, UnitCostPoint } from './types';

// Dashboard Data
export const mockBalances: Balance[] = [
  { model: 'S', currency: '$', amount: 1234.56 },
  { model: 'M', currency: '$', amount: 7890.12 },
  { model: 'YS', currency: '$', amount: 345.67 },
];

export const mockFunctionUsage = { pv: 102345, uv: 54321 };

export const mockTotalUserCount = 120567;

export const mockDailyGeneration = [
  { date: '7天前', S: 40, M: 24, YS: 24 },
  { date: '6天前', S: 30, M: 13, YS: 22 },
  { date: '5天前', S: 20, M: 98, YS: 22 },
  { date: '4天前', S: 27, M: 39, YS: 20 },
  { date: '3天前', S: 18, M: 48, YS: 21 },
  { date: '2天前', S: 23, M: 38, YS: 25 },
  { date: '昨天', S: 34, M: 43, YS: 20 },
];

export const mockModelDistribution = [
  { name: '模型 S', value: 400 },
  { name: '模型 M', value: 300 },
  { name: '模型 YS', value: 300 },
];

export const mockDailyAvgDuration = [
    { date: '3天前', S: 25, M: 45, YS: 60 },
    { date: '2天前', S: 28, M: 42, YS: 65 },
    { date: '昨天', S: 26, M: 48, YS: 62 },
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
    { id: 'sng_3', title: '赛博梦境', authorName: '王五', model: 'YS', createdAt: '2024-05-15', playCount: 120, hasStory: true, status: 'hidden', recommended: false },
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

// DEMO 2 DATA
export const mockDemo2Metrics: Demo2Metric[] = [
  { title: '今日 DAU', value: '15,234', change: '+5.2%', isPositive: true, description: '日活跃用户' },
  { title: '新增注册', value: '1,203', change: '+12.0%', isPositive: true, description: '今日新用户' },
  { title: '总生成次数', value: '45,678', change: '-2.1%', isPositive: false, description: 'API调用总数' },
  { title: '作品发布率', value: '18.5%', change: '+1.5%', isPositive: true, description: '核心质量指标' },
  { title: '人均生成消耗', value: '3.0', change: '+0.2', isPositive: false, description: '成本风险监控' },
];

export const mockUserGrowthTrend = [
  { date: 'Mon', newUsers: 800, retainedUsers: 12000 },
  { date: 'Tue', newUsers: 950, retainedUsers: 12100 },
  { date: 'Wed', newUsers: 1100, retainedUsers: 12300 },
  { date: 'Thu', newUsers: 1050, retainedUsers: 12250 },
  { date: 'Fri', newUsers: 1300, retainedUsers: 12500 },
  { date: 'Sat', newUsers: 1500, retainedUsers: 12800 },
  { date: 'Sun', newUsers: 1450, retainedUsers: 13000 },
];

export const mockConversionFunnel = [
  { date: 'Mon', requests: 5000, success: 4500, published: 800 },
  { date: 'Tue', requests: 5200, success: 4700, published: 850 },
  { date: 'Wed', requests: 5100, success: 4600, published: 820 },
  { date: 'Thu', requests: 5400, success: 4900, published: 900 },
  { date: 'Fri', requests: 5800, success: 5200, published: 980 },
  { date: 'Sat', requests: 6500, success: 5900, published: 1200 },
  { date: 'Sun', requests: 6200, success: 5600, published: 1100 },
];

export const mockInteractionDepth = [
  { date: 'Mon', remix: 120, engagement: 3500 },
  { date: 'Tue', remix: 135, engagement: 3800 },
  { date: 'Wed', remix: 150, engagement: 4200 },
  { date: 'Thu', remix: 140, engagement: 4000 },
  { date: 'Fri', remix: 180, engagement: 5100 },
  { date: 'Sat', remix: 220, engagement: 6500 },
  { date: 'Sun', remix: 200, engagement: 6000 },
];

export const mockApiStats: ApiMonitorData[] = [
  { modelName: 'API-A (基础版)', volume: 154020, failureRate: 0.5, latency: 120, publishRate: 15.2 },
  { modelName: 'API-B (专业版)', volume: 84320, failureRate: 1.2, latency: 450, publishRate: 28.4 },
  { modelName: 'API-C (实验版)', volume: 12500, failureRate: 6.8, latency: 890, publishRate: 9.1 },
];

export const mockRealTimeLogs: LogEntry[] = [
  { id: '1', timestamp: '10:42:05', user: 'User_8841', action: '生成作品', details: '使用 API-A 生成了一首流行歌曲', type: 'success' },
  { id: '2', timestamp: '10:42:08', user: 'User_1024', action: '发布作品', details: '公开发布了《夏日微风》', type: 'info' },
  { id: '3', timestamp: '10:42:12', user: 'User_9921', action: 'API 错误', details: 'API-C 响应超时 (504)', type: 'error' },
  { id: '4', timestamp: '10:42:15', user: 'User_3342', action: 'Remix', details: 'Remix 了 User_1024 的作品', type: 'success' },
  { id: '5', timestamp: '10:42:18', user: 'User_7712', action: '点赞', details: '点赞了作品 #39281', type: 'info' },
  { id: '6', timestamp: '10:42:22', user: 'System', action: '自动扩容', details: 'API-B 实例增加', type: 'warning' },
  { id: '7', timestamp: '10:42:25', user: 'User_5561', action: '生成失败', details: '内容安全拦截', type: 'error' },
];

// Helper to generate dates
const generateDates = (days: number) => {
    const dates = [];
    for (let i = days - 1; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        dates.push(`${d.getMonth() + 1}/${d.getDate()}`);
    }
    return dates;
};

// Helper to generate chart data
const generateChartData = (days: number, baseValue: number, volatility: number): Demo3ChartPoint[] => {
    const dates = generateDates(days);
    return dates.map(date => ({
        date,
        value: Math.floor(baseValue + (Math.random() - 0.5) * volatility)
    }));
};

const generateRetentionData = (days: number): Demo3ChartPoint[] => {
    const dates = generateDates(days);
    return dates.map(date => ({
        date,
        value: parseFloat((0.2 + Math.random() * 0.3).toFixed(2)) // 20% - 50%
    }));
};

// DEMO 3 DATA GENERATION
const createDemo3Data = (): Demo3DataCollection => {
    const ranges: TimeRange[] = ['7d', '30d', '90d'];
    const rangeDays = { '7d': 7, '30d': 30, '90d': 90 };
    
    // 1. User Metrics
    const userMetrics = {
        registration: { value: 1245, changeRate: 12.5, isIncrease: true },
        activeUser: { value: 45231, changeRate: 5.2, isIncrease: true },
        activeCreator: { value: 3210, changeRate: 2.1, isIncrease: false },
        newCreator: { value: 450, changeRate: 8.4, isIncrease: true },
    };

    // 2. Simple Charts
    const charts: any = {};
    const chartTypes = ['registration', 'activeUser', 'activeCreator', 'newCreator', 'comments', 'likes'];
    const baseValues = { registration: 1200, activeUser: 45000, activeCreator: 3200, newCreator: 400, comments: 8000, likes: 25000 };
    const volatilities = { registration: 200, activeUser: 2000, activeCreator: 300, newCreator: 50, comments: 1000, likes: 3000 };

    chartTypes.forEach(type => {
        charts[type] = {};
        ranges.forEach(range => {
            charts[type][range] = generateChartData(rangeDays[range], (baseValues as any)[type], (volatilities as any)[type]);
        });
    });

    // Retention Charts
    charts.userRetention = {};
    charts.creatorRetention = {};
    ranges.forEach(range => {
        charts.userRetention[range] = generateRetentionData(rangeDays[range]);
        charts.creatorRetention[range] = generateRetentionData(rangeDays[range]);
    });

    // 3. Generation Complex Data
    const generation: any = {};
    const apis = ['ALL', 'YS', 'T', 'M'];
    const types = ['ALL', 'ORIGINAL', 'REMIX'];
    
    apis.forEach(api => {
        generation[api] = {};
        types.forEach(type => {
            generation[api][type] = {};
            ranges.forEach(range => {
                let baseCount = 5000;
                if (api === 'YS') baseCount = 3000;
                if (api === 'T') baseCount = 1000;
                if (api === 'M') baseCount = 1000;
                
                if (type === 'REMIX') baseCount *= 0.3;
                if (type === 'ORIGINAL') baseCount *= 0.7;

                const days = rangeDays[range];
                const countData = generateChartData(days, baseCount, baseCount * 0.1);
                
                const rateData = generateDates(days).map(date => ({
                    date,
                    value: parseFloat((0.6 + Math.random() * 0.35).toFixed(2))
                }));

                const downloadData = generateChartData(days, baseCount * 0.2, baseCount * 0.05);

                generation[api][type][range] = {
                    count: countData,
                    rate: rateData,
                    downloads: downloadData
                };
            });
        });
    });

    return {
        userMetrics,
        charts,
        generation
    };
};

export const mockDemo3Data = createDemo3Data();

// DEMO 4 DATA GENERATION
const generateSimpleTrend = (days: number, base: number, volatility: number): SimpleTrendPoint[] => {
    return generateDates(days).map(date => ({
        date,
        value: Math.floor(base + (Math.random() - 0.5) * volatility)
    }));
};

const generateRatioTrend = (days: number, baseDenom: number, denomVol: number, baseRate: number, rateVol = 0.2): RatioTrendPoint[] => {
    return generateDates(days).map(date => {
        const denominator = Math.floor(baseDenom + (Math.random() - 0.5) * denomVol);
        // Rate varies by +/- rateVol/2 relative to base
        // Default 0.2 means +/- 0.1 (10%)
        const currentRate = Math.min(0.999, Math.max(0.001, baseRate + (Math.random() - 0.5) * rateVol)); 
        const numerator = Math.floor(denominator * currentRate);
        return {
            date,
            denominator,
            numerator,
            ratio: parseFloat((numerator / denominator).toFixed(4)) // Keep 4 decimals for precision
        };
    });
};

const createDemo4Data = (): Demo4DataCollection => {
     const ranges: TimeRange[] = ['7d', '30d', '90d'];
     const rangeDays = { '7d': 7, '30d': 30, '90d': 90 };
     
     // 1. Users
     const users = {
         registration: {
             meta: { currentValue: 1250, dailyChange: '+5.2%', isIncrease: true },
             trend: {} as any
         },
         activeUser: {
             meta: { currentValue: 45200, dailyChange: '+2.1%', isIncrease: true },
             trend: {} as any
         }
     };
     ranges.forEach(r => {
         users.registration.trend[r] = generateSimpleTrend(rangeDays[r], 1200, 300);
         users.activeUser.trend[r] = generateSimpleTrend(rangeDays[r], 45000, 2000);
     });

     // 2. Creators
     const creators = {
         newCreators: {
             meta: { currentValue: 380, dailyChange: '-1.5%', isIncrease: false },
             trend: {} as any
         },
         activationRate: {
             meta: { currentValue: '30.4%', dailyChange: '-0.5%', isIncrease: false },
             trend: {} as any
         },
         activeCreators: {
             meta: { currentValue: 3500, dailyChange: '+4.0%', isIncrease: true },
             trend: {} as any
         },
         retentionNextDay: {
             meta: { currentValue: '45.2%', dailyChange: '+1.2%', isIncrease: true, description: '次日留存' },
             trend: {} as any
         },
         retention7Day: {
             meta: { currentValue: '22.8%', dailyChange: '+0.5%', isIncrease: true, description: '7日留存' },
             trend: {} as any
         }
     };
     ranges.forEach(r => {
         const days = rangeDays[r];
         creators.newCreators.trend[r] = generateSimpleTrend(days, 380, 50);
         creators.activeCreators.trend[r] = generateSimpleTrend(days, 3500, 300);
         // Activation: Denom = New Registers (~1200), Rate ~30%
         creators.activationRate.trend[r] = generateRatioTrend(days, 1200, 200, 0.30);
         // Retention Next Day: Denom = Cohort (~400 new creators), Rate ~45%
         creators.retentionNextDay.trend[r] = generateRatioTrend(days, 400, 50, 0.45);
         // Retention 7 Day: Denom = Cohort (~400), Rate ~20%
         creators.retention7Day.trend[r] = generateRatioTrend(days, 400, 50, 0.20);
     });

     // 3. Works
     const works = {
         valueRecognition: {
             meta: { currentValue: '18.5%', dailyChange: '+2.0%', isIncrease: true, description: '下载/生成' },
             trend: {} as any
         },
         successRate: {
             meta: { currentValue: '92.4%', dailyChange: '-0.2%', isIncrease: false },
             trend: {} as any
         },
         stability: {
             'ALL': { meta: { currentValue: '98.5%', dailyChange: '0.0%', isIncrease: true }, trend: {} as any },
             'YS': { meta: { currentValue: '99.1%', dailyChange: '+0.1%', isIncrease: true }, trend: {} as any },
             'T': { meta: { currentValue: '97.2%', dailyChange: '-0.3%', isIncrease: false }, trend: {} as any },
             'M': { meta: { currentValue: '95.5%', dailyChange: '+1.0%', isIncrease: true }, trend: {} as any },
         }
     };
     ranges.forEach(r => {
         const days = rangeDays[r];
         // Value Recog: Denom = Success Gens (~5000), Rate ~20%
         works.valueRecognition.trend[r] = generateRatioTrend(days, 5000, 500, 0.20);
         
         // Success Rate: Denom = Total Requests (~6000), Rate ~92%
         works.successRate.trend[r] = generateRatioTrend(days, 6000, 800, 0.92, 0.05);

         // Stability - Use low volatility (0.02 = +/- 1%) for stability metrics
         works.stability['ALL'].trend[r] = generateRatioTrend(days, 10000, 1000, 0.985, 0.02);
         works.stability['YS'].trend[r] = generateRatioTrend(days, 5000, 500, 0.992, 0.015);
         works.stability['T'].trend[r] = generateRatioTrend(days, 2500, 250, 0.975, 0.03);
         works.stability['M'].trend[r] = generateRatioTrend(days, 2500, 250, 0.955, 0.04);
     });

     // 4. Community
     const community = {
         remixRatio: {
             meta: { currentValue: '12.5%', dailyChange: '+1.1%', isIncrease: true },
             trend: {} as any
         },
         interactionCoverage: {
             meta: { currentValue: '35.0%', dailyChange: '-0.5%', isIncrease: false },
             trend: {} as any
         },
         dailyComments: {
             meta: { currentValue: 8402, dailyChange: '+5.5%', isIncrease: true },
             trend: {} as any
         },
         dailyLikes: {
            meta: { currentValue: 25102, dailyChange: '+8.2%', isIncrease: true },
            trend: {} as any
         }
     };
     ranges.forEach(r => {
         const days = rangeDays[r];
         // Remix: Denom = Success Works (~5000), Rate ~12%
         community.remixRatio.trend[r] = generateRatioTrend(days, 5000, 500, 0.12);
         // Interaction Coverage: Denom = Active Users (~45000), Rate ~35%
         community.interactionCoverage.trend[r] = generateRatioTrend(days, 45000, 2000, 0.35);
         
         community.dailyComments.trend[r] = generateSimpleTrend(days, 8400, 800);
         community.dailyLikes.trend[r] = generateSimpleTrend(days, 25000, 3000);
     });

     return { users, creators, works, community };
};

export const mockDemo4Data = createDemo4Data();

// COST & REVENUE DATA GENERATION
const generateRevenueTrend = (days: number): RevenueTrendPoint[] => {
    return generateDates(days).map(date => {
        const membership = Math.floor(15000 + (Math.random() - 0.5) * 2000);
        const credits = Math.floor(8000 + (Math.random() - 0.5) * 3000);
        return {
            date,
            membership,
            credits,
            total: membership + credits
        };
    });
};

const generateUnitCostTrend = (days: number): UnitCostPoint[] => {
    return generateDates(days).map(date => {
        // Costs in cents (approx)
        // YS: High quality, expensive, coming down slightly
        // M: Mid range
        // T: Cheap, stable
        return {
            date,
            YS: parseFloat((0.05 + Math.random() * 0.005).toFixed(4)),
            M: parseFloat((0.02 + Math.random() * 0.002).toFixed(4)),
            T: parseFloat((0.005 + Math.random() * 0.001).toFixed(4)),
        };
    });
};

const createCostRevenueData = (): CostRevenueDataCollection => {
    const ranges: TimeRange[] = ['7d', '30d', '90d'];
    const rangeDays = { '7d': 7, '30d': 30, '90d': 90 };

    const revenue = {
        totalTrend: { meta: { currentValue: '¥24,120', dailyChange: '+3.2%', isIncrease: true }, trend: {} as any },
        membershipShare: { meta: { currentValue: '65.2%', dailyChange: '-1.2%', isIncrease: false }, trend: {} as any },
        creditShare: { meta: { currentValue: '34.8%', dailyChange: '+1.2%', isIncrease: true }, trend: {} as any }
    };

    const monetization = {
        creatorPenetration: { meta: { currentValue: '12.8%', dailyChange: '+0.5%', isIncrease: true }, trend: {} as any },
        firstTimeConversion: { meta: { currentValue: '8.4%', dailyChange: '+0.2%', isIncrease: true }, trend: {} as any }
    };

    const costs = {
        apiCostRate: { meta: { currentValue: '32.5%', dailyChange: '-0.8%', isIncrease: true, description: '优化中' }, trend: {} as any }, // Cost decreased (good)
        unitCostTrend: { meta: { currentValue: '$0.025', dailyChange: '-0.001', isIncrease: true, description: '加权平均' }, trend: {} as any }
    };

    ranges.forEach(r => {
        const days = rangeDays[r];
        
        // Revenue Trend
        revenue.totalTrend.trend[r] = generateRevenueTrend(days);
        
        // Revenue Shares (Ratio logic)
        // Total ~23000, Membership ~15000 (65%)
        revenue.membershipShare.trend[r] = generateRatioTrend(days, 23000, 2000, 0.65, 0.1);
        // Credits is the inverse roughly
        revenue.creditShare.trend[r] = generateRatioTrend(days, 23000, 2000, 0.35, 0.1);

        // Monetization
        // Penetration: Active Creators ~3500, Paid ~450 (12.8%)
        monetization.creatorPenetration.trend[r] = generateRatioTrend(days, 3500, 300, 0.128, 0.02);
        // First time: New Creators ~400, Pay ~32 (8%)
        monetization.firstTimeConversion.trend[r] = generateRatioTrend(days, 400, 50, 0.08, 0.03);

        // Costs
        // Cost Rate: Revenue ~23000, Cost ~7500 (32%)
        costs.apiCostRate.trend[r] = generateRatioTrend(days, 23000, 2000, 0.32, 0.05);
        
        // Unit Costs
        costs.unitCostTrend.trend[r] = generateUnitCostTrend(days);
    });

    return { revenue, monetization, costs };
};

export const mockCostRevenueData = createCostRevenueData();