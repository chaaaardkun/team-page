import nc from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ssrAuthorization, generateToken, token} from 'services/setAuthorization';

const handler = nc();

const hiddenPassword = process.env.HIDDEN_PASSWORD;

type Props = { password?: string };

handler.post('/api/sign-in', async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const body: Props = req.body;
    if (!body?.password) return res.status(401).json({ message: 'Password field is required' });
    if (body?.password !== hiddenPassword) return res.status(401).json({ message: 'Password does not match on the system' })

    const token = generateToken((new Date).toString()) as token;

    ssrAuthorization(token, 20160, req, res);

    return res.status(201).json({ message: 'success' });

  } catch {
    return res.status(500).json({ message: 'Internal Server Error' })
  };
});

export default handler;