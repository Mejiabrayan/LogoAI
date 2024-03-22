import { NextApiRequest, NextApiResponse } from 'next';
import { checkAuth } from '@/lib/auth/utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await checkAuth();
    res.status(200).json({ isAuthenticated: true });
  } catch (error) {
    res.status(401).json({ isAuthenticated: false });
  }
}