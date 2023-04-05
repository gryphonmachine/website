import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function western(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await axios
    .get(
      "https://frc-api.firstinspires.org/v3.0/2018/matches/ONOSH?tournamentLevel=Qualification&teamNumber=6070",
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
