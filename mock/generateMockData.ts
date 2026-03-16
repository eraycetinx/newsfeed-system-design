import { faker } from "@faker-js/faker";
import { MockData, PostType } from "../types/MockData.js";
import fs from "fs/promises";

const MAX_CREATE_DATA_COUNT: number = 100;

export async function generateMockData(
  counter: number,
): Promise<Array<MockData>> {
  const data: Array<MockData> = [];

  const typeOfPosts: PostType[] = ["Daily", "Humor", "News"];

  for (let i = 0; i < counter; i++) {
    const getRandomType: PostType =
      typeOfPosts[Math.floor(Math.random() * typeOfPosts.length)];

    data.push({
      content: faker.lorem.text(),
      createdAt: faker.date.recent(),
      score: 0,
      uuid: faker.string.uuid(),
      type: getRandomType,
    });
  }

  return data;
}

// Check user pass the counter parameter
if (process.argv[2] === undefined) {
  throw new Error("You must pass 'counter' parameter as a second parameter.");
}

const intRegex = /^\d+$/;
const arg = process.argv[2];

// check params is a number
if (!intRegex.test(arg)) {
  console.error("The counter parameter must be number");
  process.exit(1);
}

const counter = Number(arg);

// Check the counter, if exceeds MAX_CREATE_DATA_COUNT, it will display an error in the console.
if (counter > MAX_CREATE_DATA_COUNT) {
  console.error("Too much data try less than 100");
  process.exit(1);
}

async function run() {
  try {
    // genereate a data and write to json file
    const data = await generateMockData(counter);
    const converToJSON = JSON.stringify(data);
    await fs.writeFile("./mock/data.json", converToJSON);
    console.log("Data was written to the 'mock/data.json' file");
  } catch (e) {
    if (e) {
      console.error("Something went wrong while writing to file");
      process.exit(1);
    }
  }
}

// Run the script
run();
