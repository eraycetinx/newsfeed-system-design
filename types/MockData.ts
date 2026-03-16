export type PostType =  'Daily' | 'News' | 'Humor';
export interface MockData {
  uuid: string;
  content: string;
  score: number;
  type: PostType;
  createdAt: Date;
}