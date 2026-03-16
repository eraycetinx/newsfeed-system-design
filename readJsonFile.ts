import { PathLike } from "fs";
import fs from "fs/promises";
import { MockData } from "./types/MockData";

export async function readJsonFile(filePath: PathLike | fs.FileHandle): Promise<Array<MockData>> {
  let file: string;
  try {
    file = await fs.readFile(filePath, { encoding: "utf-8" });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

  return JSON.parse(file);
}
