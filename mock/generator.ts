import crypto from "crypto"
import { Follow, Like, Post, User, Comment } from "../types/MockData";

function randomDate(start: Date, end: Date): Date {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
}

export async function generateUserData(userData: User[]): Promise<void> {
  for (let i = 0; i < 30; i++) {
    userData[i] = {
      uuid: crypto.randomUUID(),
      createdAt: randomDate(new Date(2020, 0, 1), new Date()),
    };
  }
}

export async function generatePostData(
  postData: Post[],
  userData: User[],
): Promise<void> {
  if (userData.length === 0) {
    throw new Error("User data is empty");
  }
  for (let i = 0; i < 30; i++) {
    postData[i] = {
      uuid: crypto.randomUUID(),
      userUuid: userData[Math.floor(Math.random() * 29)].uuid,
      commentCount: 0,
      likeCount: 0,
      score: 0,
      createdAt: randomDate(new Date(2020, 0, 1), new Date()),
    };
  }
}

export async function generateLikeData(
  postData: Post[],
  userData: User[],
  likeData: Like[],
): Promise<void> {
  if (userData.length === 0 || postData.length === 0) {
    throw new Error("Data is empty");
  }

  for (let i = 0; i < 30; i++) {
    likeData[i] = {
      uuid: crypto.randomUUID(),
      userUuid: userData[Math.floor(Math.random() * 29)].uuid,
      postUuid: postData[Math.floor(Math.random() * 29)].uuid,
      createdAt: randomDate(new Date(2020, 0, 1), new Date()),
    };
  }
}

export async function generateCommentData(
  postData: Post[],
  userData: User[],
  commentData: Comment[],
): Promise<void> {
  if (userData.length === 0 || postData.length === 0) {
    throw new Error("Data is empty");
  }
  for (let i = 0; i < 30; i++) {
    commentData[i] = {
      uuid: crypto.randomUUID(),
      userUuid: userData[Math.floor(Math.random() * 29)].uuid,
      postUuid: postData[Math.floor(Math.random() * 29)].uuid,
      createdAt: randomDate(new Date(2020, 0, 1), new Date()),
    };
  }
}

export async function generateFollowData(
  userData: User[],
  followData: Follow[],
): Promise<void> {
  if (userData.length === 0) {
    throw new Error("User data is empty");
  }

  for (let i = 0; i < 30; i++) {
    let user1 = userData[Math.floor(Math.random() * 29)].uuid;
    let user2 = userData[Math.floor(Math.random() * 29)].uuid;

    while (user1 === user2) {
      user1 = userData[Math.floor(Math.random() * 29)].uuid;
      user2 = userData[Math.floor(Math.random() * 29)].uuid;
    }

    followData[i] = {
      uuid: crypto.randomUUID(),
      followedUserUuid: user1,
      followerUserUuid: user2,
      createdAt: randomDate(new Date(2020, 0, 1), new Date()),
    };
  }
}