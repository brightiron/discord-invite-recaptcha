/*Endpoint for discord invite */

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  response: string | { code: string };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.status(405).send({ response: "Only POST requests allowed" });
    return;
  }
  const maxAge = process.env.DISCORD_INVITE_MAX_AGE || 86400;
  const expires = req.body.expires;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN,
    },
    body: JSON.stringify({
      max_uses: 1,
      unique: true,
      max_age: maxAge,
    }),
  };

  const endpoint =
    "https://discord.com/api/v10/channels/" +
    process.env.DISCORD_CHANNEL_ID +
    "/invites";
  const response = await (await fetch(endpoint, options)).json();
  res.status(200).json({ response });
}
