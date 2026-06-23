import {
  Comment,
  Follow,
  Like,
  Post,
  User,
  DataType,
} from "../types/MockData";
import fs from "fs/promises";
import {
  generateCommentData,
  generateFollowData,
  generateLikeData,
  generatePostData,
  generateUserData,
} from "./generator";

export async function generateMockData(): Promise<DataType> {

  const userData: User[] = [];
  const postData: Post[] = [];
  const likeData: Like[] = [];
  const followData: Follow[] = [];
  const commentData: Comment[] = [];

  // Burada datalar uretilir
  // await olmasinin sebebi bir alttaki bir ustteki ile alakali
  // post olmasi icin user lazim, comment icin user ve post lazim

  // generateUserData()    -> user olusturur
  // generatePostData()    -> post olusturur
  // generateLikeData()    -> like olusturur
  // generateCommentData() -> comment olusturur
  // generateFollowData()  -> follow olusturur
  await generateUserData(userData);
  await generatePostData(postData, userData);
  await Promise.all([
    generateLikeData(postData, userData, likeData),
    generateCommentData(postData, userData, commentData),
  ])
  await generateFollowData(userData, followData);

  return { userData, postData, commentData, likeData, followData };

}

async function run() {
  try {
    // generate a data and write to json file
    const data = await generateMockData();
    const converToJSON = JSON.stringify(data);
    await fs.writeFile("./mock/data.json", converToJSON);
    console.log("Data was written to the 'mock/data.json' file");
  } catch (e) {
    if (e) {
      console.error(e);
      process.exit(1);
    }
  }
}

// Run the script
run();
