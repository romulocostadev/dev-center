/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';

export const handlers = [
  rest.get(`https://localhost/test`, (req, res, ctx) => {
    return res(
      ctx.json({
        test: 'blablablabla',
      }),
    );
  }),
];
