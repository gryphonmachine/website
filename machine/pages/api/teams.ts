import { NextApiRequest, NextApiResponse } from "next";
import NodeCache from "node-cache";
import { fetchData } from "@/lib/fetchData";

const cache = new NodeCache({ stdTTL: 60 * 60 * 24 * 7 * 52 });

export default async function getTeams(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { page } = req.query;
  const cacheKey = `teams_${page}`;

  let teams = cache.get(cacheKey);
  if (!teams) {
    teams = await fetchData(res, `/teams/${page}/simple`);
    cache.set(cacheKey, teams);
  }
  return await fetchData(res, `/teams/${page}/simple`);
}
