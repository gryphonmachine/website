import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function western(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { type } = req.query;
  const types = ["Qualification", "Playoff"];

  if (!types.includes(String(type))) {
    res.send("Invalid type. Pick between Qualification or Playoff!");
  }
  
  await axios
    .get(
      `https://frc-api.firstinspires.org/v3.0/2017/matches/ONLON?tournamentLevel=${type}&teamNumber=6070`,
      {
        headers: {
          Authorization: `Basic ${process.env.FIRST_API_KEY}`,
        },
      }
    )
    .then(function (response) {
      res.send(response.data.Matches);
    })
    .catch(function (error) {
      console.log(error);
    });
}
