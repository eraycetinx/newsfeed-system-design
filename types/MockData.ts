export type PostType =  'Daily' | 'News' | 'Humor';
export interface MockData {
  uuid: string;
  content: string;
  score: number;
  type: PostType;
  likeCount: number;
  commentCount: number;
  savedCount: number
  createdAt: Date;
}