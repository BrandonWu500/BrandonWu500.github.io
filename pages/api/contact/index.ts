import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const verifyRecaptcha = async (token: any) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  var verificationUrl =
    'https://www.google.com/recaptcha/api/siteverify?secret=' +
    secretKey +
    '&response=' +
    token;

  return await axios.post(verificationUrl);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { token } = req.body;

  try {
    // Recaptcha response
    const response = await verifyRecaptcha(token);
    if (response.data.success && response.data.score >= 0.5) {
      return res.status(200).json({ status: 'Success' });
    } else {
      return res.status(400).json({ status: 'Error' });
    }
  } catch (error) {
    return res.status(500).json({ status: 'Error' });
  }
}
