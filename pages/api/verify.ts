/*Endpoint for verifying reCAPTCHA token */

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  response: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.status(405).send({ response: "Only POST requests allowed" });
    return;
  }

  //token from recaptcha submission
  const response_key = req.body["token"];
  const endpoint = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${response_key}`;
  const response = await (await fetch(endpoint, { method: "post" })).json();
  if (response.success) {
    res.status(200).json({ response: "success" });
  } else {
    res.status(200).json({ response: "error" });
  }
}
