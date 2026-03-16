// import { getNTimePosts } from "./getNTimePosts";
import { readJsonFile } from "./readJsonFile";
import { MockData } from "./types/MockData";

const LIKE_WEIGHT = 0.2;
const COMMENT_WEIGHT = 0.5;
const SAVE_WEIGHT = 0.8;

export async function calculatePostScore() {
  try {
    const getFile = await readJsonFile("./mock/data.json");
    // const nTimePosts = getNTimePosts(getFile, Date.now())

    getFile.map((data: MockData) => {
      // Calculate the socre with weight
      const baseScore = Math.floor(
        data.likeCount * LIKE_WEIGHT +
        data.commentCount * COMMENT_WEIGHT +
        (data.savedCount * SAVE_WEIGHT));

      // const calculateGravity = (1.2) + Math.log10(nTimePosts.length)
      // const gravityScore = baseScore/Math.pow((Date.now() - new Date(data.createdAt).getTime() + 2),calculateGravity);

      data.score = baseScore;
      return data;
    });

  } catch (e) {
    throw new Error("Something went wrong while calculating post`s score");
  }
}
