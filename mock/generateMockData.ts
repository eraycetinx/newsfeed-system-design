import { faker } from "@faker-js/faker";
import { MockData } from "../types/MockData.js";
import fs from "fs/promises";

export async function generateMockData(
  counter: number,
): Promise<Array<MockData>> {
  const data: Array<MockData> = [];

  for (let i = 0; i < counter; i++) {
    data.push({
      content: faker.lorem.text(),
      createdAt: faker.date.recent(),
      score: 0,
      uuid: faker.string.uuid(),
    });
  }

  return data;
}

// Check user pass the counter parameter
if (process.argv[2] === undefined) {
  throw new Error("You must pass 'counter' parameter as a second parameter.")
}

const intRegex = /^\d+$/
const arg = process.argv[2]

// check params is a number
if(!intRegex.test(arg)) {
  console.error("The counter parameter must be number");
  process.exit(1);
}

const counter = Number(arg)

async function run() {
  try {
  // genereate a data and write to json file
  const data = await generateMockData(counter);
  const converToJSON = JSON.stringify(data);
  await fs.writeFile("./mock/data.json", converToJSON)
  } catch(e) {
    if (e) {
      console.error("Something went wrong while writing to file");
      process.exit(1)
    }
  }
}

// Run the script
run();