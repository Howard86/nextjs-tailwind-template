import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Local.HelloApi>,
): void {
  res.status(200).json({ name: 'John Doe', timestamp: Date.now() });
}
