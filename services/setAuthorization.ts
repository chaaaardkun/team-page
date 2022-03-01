import RequestCookies from 'cookies';
import { NextApiRequest, NextApiResponse } from 'next';
import { sign } from 'jsonwebtoken';

export type token = {
  accessToken: string;
  refreshToken: string;
};

type AuthToken = {
  accessToken?: string;
  refreshToken?: string;
};

const ssrAuthorization = (token: token, expiresInMinutes = 20160, req: NextApiRequest, res: NextApiResponse) => {
  const expires = new Date(new Date().getTime() + expiresInMinutes * 60 * 1000);
  const options = { expires, httpOnly: false };
  const cookies = new RequestCookies(req, res);
  cookies.set('token', token.refreshToken, options);
  cookies.set('authToken', token.accessToken, options);
};

const CLIENT_URL = process.env.APP_URL;

const auth = {
  refreshSecret: process.env.APP_JWT_REFRESH,
  accessSecret: process.env.APP_JWT_SECRET,
  accessExpiresIn: process.env.APP_JWT_SECRET_EXP_IN || '14d',
  refreshExpiresIn: process.env.APP_JWT_REFRESH_EXP_IN || '14d',
};

const generateToken = (date: string): AuthToken => {
  const secretToken = auth.accessSecret as string;
  return {
    accessToken: sign({ date, source: CLIENT_URL }, secretToken, {
      expiresIn: auth.accessExpiresIn,
    }),
    refreshToken: sign({ date, source: CLIENT_URL }, secretToken, {
      expiresIn: auth.refreshExpiresIn,
    }),
  };
};

export { ssrAuthorization, generateToken };
