import { NextApiRequest, NextApiResponse } from "next";
import { fetchData } from "@/lib/fetchData";

export default async function westernData2023(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { type } = req.query;
  const types = ["Qualification", "Playoff"];

  if (!types.includes(String(type))) {
    res.send("Invalid type. Pick between Qualification or Playoff!");
  }

  return fetchData(res, "ONLON", "2023", type);
}
