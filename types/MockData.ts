export interface User {
  uuid: string;
  createdAt: Date;
}

export interface Post {
  uuid: string;
  score: number;
  userUuid: string;
  commentCount: number;
  likeCount: number;
  createdAt: Date;
}

export interface Comment {
  uuid: string;
  postUuid: string;
  userUuid: string;
  createdAt: Date;
}

export interface Like {
  uuid: string;
  postUuid: string;
  userUuid: string;
  createdAt: Date;
}

export interface Follow {
  uuid: string;
  followerUserUuid: string;
  followedUserUuid: string;
  createdAt: Date;
}

export interface DataType {
  userData: User[];
  postData: Post[];
  commentData: Comment[];
  likeData: Like[];
  followData: Follow[];
}
