// Fix: Define all necessary types for the application.
export interface Balance {
  model: string;
  currency: string;
  amount: number;
}

export interface User {
  id: string;
  name: string;
  phone: string;
  joinDate: string;
  status: 'active' | 'banned';
}

export interface Song {
  id: string;
  title: string;
  authorName: string;
  model: 'S' | 'M' | 'YS';
  createdAt: string;
  playCount: number;
  hasStory: boolean;
  status: 'visible' | 'hidden';
  recommended: boolean;
}

export interface CommentReply {
  id: string;
  content: string;
  authorName: string;
  createdAt: string;
  status: 'visible' | 'hidden';
}

export interface Comment {
  id: string;
  content: string;
  authorName: string;
  songId: string;
  createdAt: string;
  status: 'visible' | 'hidden';
  replies?: CommentReply[];
}

export interface Post {
  id: string;
  title: string;
  authorName: string;
  createdAt: string;
  status: 'visible' | 'hidden';
}

export type ReportType = '作品' | '作品评论' | '帖子' | '帖子评论' | '帖子回复';

export interface Report {
  id: string;
  reportType: ReportType;
  contentId: string;
  reporterName: string;
  reason: string;
  createdAt: string;
  status: 'pending' | 'processed';
}

export interface PostReply {
    id: string;
    content: string;
    userName: string;
    postId: string;
    createdAt: string;
    status: 'visible' | 'hidden';
}

// New Types for Demo 2 Dashboard
export interface Demo2Metric {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  description?: string;
}

export interface ApiMonitorData {
  modelName: string;
  volume: number;
  failureRate: number;
  latency: number;
  publishRate: number;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  details: string;
  type: 'success' | 'warning' | 'error' | 'info';
}

// New Types for Demo 3 Dashboard
export type TimeRange = '7d' | '30d' | '90d';
export type ApiFilter = 'ALL' | 'YS' | 'T' | 'M';
export type GenTypeFilter = 'ALL' | 'ORIGINAL' | 'REMIX';

export interface Demo3ChartPoint {
  date: string;
  value: number;
  [key: string]: any; // Allow for other keys
}

export interface Demo3MetricData {
  value: number | string;
  changeRate: number; // Percentage
  isIncrease: boolean;
}

export interface Demo3DataCollection {
  userMetrics: {
    registration: Demo3MetricData;
    activeUser: Demo3MetricData;
    activeCreator: Demo3MetricData;
    newCreator: Demo3MetricData;
  };
  charts: {
    registration: Record<TimeRange, Demo3ChartPoint[]>;
    activeUser: Record<TimeRange, Demo3ChartPoint[]>;
    activeCreator: Record<TimeRange, Demo3ChartPoint[]>;
    newCreator: Record<TimeRange, Demo3ChartPoint[]>;
    userRetention: Record<TimeRange, Demo3ChartPoint[]>;
    creatorRetention: Record<TimeRange, Demo3ChartPoint[]>;
    comments: Record<TimeRange, Demo3ChartPoint[]>;
    likes: Record<TimeRange, Demo3ChartPoint[]>;
  };
  generation: Record<ApiFilter, Record<GenTypeFilter, Record<TimeRange, {
    rate: Demo3ChartPoint[];
    count: Demo3ChartPoint[];
    downloads: Demo3ChartPoint[];
  }>>>;
}

// Demo 4 Data Types
export interface SimpleTrendPoint {
    date: string;
    value: number;
}

export interface RatioTrendPoint {
    date: string;
    numerator: number;   // 分子
    denominator: number; // 分母
    ratio: number;       // 比例 (0-100 or 0-1)
}

export interface Demo4MetricBase {
    currentValue: string | number;
    dailyChange: string; // e.g. "+5.2%"
    isIncrease: boolean;
    description?: string;
}

// Generic container for Demo 4 metrics
export interface Demo4MetricData<T = SimpleTrendPoint[]> {
    meta: Demo4MetricBase;
    trend: Record<TimeRange, T>;
}

export interface Demo4DataCollection {
    users: {
        registration: Demo4MetricData<SimpleTrendPoint[]>;
        activeUser: Demo4MetricData<SimpleTrendPoint[]>;
    };
    creators: {
        newCreators: Demo4MetricData<SimpleTrendPoint[]>;
        activationRate: Demo4MetricData<RatioTrendPoint[]>;
        activeCreators: Demo4MetricData<SimpleTrendPoint[]>;
        retentionNextDay: Demo4MetricData<RatioTrendPoint[]>;
        retention7Day: Demo4MetricData<RatioTrendPoint[]>;
    };
    works: {
        valueRecognition: Demo4MetricData<RatioTrendPoint[]>;
        successRate: Demo4MetricData<RatioTrendPoint[]>;
        stability: Record<ApiFilter, Demo4MetricData<RatioTrendPoint[]>>;
    };
    community: {
        remixRatio: Demo4MetricData<RatioTrendPoint[]>;
        interactionCoverage: Demo4MetricData<RatioTrendPoint[]>;
        dailyComments: Demo4MetricData<SimpleTrendPoint[]>;
        dailyLikes: Demo4MetricData<SimpleTrendPoint[]>;
    };
}

// Cost & Revenue Dashboard Types
export interface RevenueTrendPoint {
    date: string;
    membership: number;
    credits: number;
    total: number;
}

export interface UnitCostPoint {
    date: string;
    YS: number;
    T: number;
    M: number;
}

export interface CostRevenueDataCollection {
    revenue: {
        totalTrend: Demo4MetricData<RevenueTrendPoint[]>;
        membershipShare: Demo4MetricData<RatioTrendPoint[]>;
        creditShare: Demo4MetricData<RatioTrendPoint[]>;
    };
    monetization: {
        creatorPenetration: Demo4MetricData<RatioTrendPoint[]>;
        firstTimeConversion: Demo4MetricData<RatioTrendPoint[]>;
    };
    costs: {
        apiCostRate: Demo4MetricData<RatioTrendPoint[]>;
        unitCostTrend: Demo4MetricData<UnitCostPoint[]>;
    };
}