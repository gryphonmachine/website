import { NextApiRequest, NextApiResponse } from "next";
import { fetchData } from "@/lib/fetchData";

export default async function durhamData2018(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { type } = req.query;
  const types = ["Qualification", "Playoff"];

  if (!types.includes(String(type))) {
    res.send("Invalid type. Pick between Qualification or Playoff!");
  }

  return fetchData(res, "ONOSH", "2018", type);
}
