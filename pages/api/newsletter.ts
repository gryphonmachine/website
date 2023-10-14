import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function newsletter(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const password = req.headers.authorization;

    if (process.env.NEXT_PUBLIC_PASSWORD === password) {
      const body = req.body;

      try {
        await prisma.post.create({
          data: {
            title: body.title,
            content: body.content,
          },
        });
      } catch(e) {
        return res.status(500).json(e);
      }

      res.json({ message: "Post created" });
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
