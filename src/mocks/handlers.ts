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

  rest.post('http://localhost/login', (req, res, ctx) => {
    return res(
      ctx.delay(200),
      ctx.json({
        user: {
          firstName: 'Test',
          lastName: 'User',
        },
        token: '123',
      }),
    );
  }),

  rest.get('http://localhost/user/romulo', (req, res, ctx) => {
    return res(ctx.delay(200), ctx.json({ name: 'romulo' }));
  }),
];
