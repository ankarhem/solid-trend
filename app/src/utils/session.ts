import { createCookieSessionStorage } from 'solid-start';
import { z } from 'zod';

const secrets = [process.env.SESSION_SECRET || 'mucho-secret-value'];

const shopContextSession = createCookieSessionStorage({
  cookie: {
    name: '__shop_context',
    secure: process.env.NODE_ENV === 'production',
    secrets: secrets,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30, // 30 days
    httpOnly: true,
  },
});

const shopContextSchema = z.object({
  channel: z.string().optional(),
  culture: z.string().optional(),
  country: z.string().optional(),
});

interface Session {
  channel?: string;
  culture?: string;
  country?: string;
}

export const getSession = async (request: Request): Promise<Session> => {
  const session = await shopContextSession.getSession(
    request.headers.get('cookie')
  );
  session.data;
  return session as Session;
};
