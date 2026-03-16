import { MockData } from "./types/MockData";

/**
 * 
 * @param data - list of the mock data with json
 * @param time - Hangi zamanandan sonraki postlari dahil etmek istiyoruz.
 */
export function getNTimePosts(
  data: Array<MockData>,
  time: number,
): Array<MockData> {
  return data.filter((d) =>  new Date(d.createdAt).getTime()> time);
}
