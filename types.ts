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
  model: 'S' | 'M' | 'T';
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