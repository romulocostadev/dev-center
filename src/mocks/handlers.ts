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

  rest.get(
    'http://localhost/devcenter/api/v1/gateway/solution',
    (req, res, ctx) => {
      return res(
        ctx.delay(200),
        ctx.json([
          {
            AccountId: 'f308d6f0-3d28-4303-bd6b-a7f69a324deb',
            UserId: 'a8de7867-daba-47c7-8023-bd08cdbae271',
            Name: 'KairoSolution',
            TemplateId: '83e96851-d5fc-4290-8d37-b6625363174f',
            Status: 0,
            Enabled: true,
            Versions: [],
            CreatedUtc: '2022-06-22T17:19:30.197796+00:00',
            ModifiedUtc: '2022-06-22T17:19:30.197796+00:00',
            Id: '1c4a67c7-2aba-49a7-92fc-4c1817e55bf9',
          },
          {
            AccountId: 'f308d6f0-3d28-4303-bd6b-a7f69a324deb',
            UserId: 'a8de7867-daba-47c7-8023-bd08cdbae271',
            Name: 'RomuloSolution',
            TemplateId: '83e96851-d5fc-4290-8d37-b6625363174f',
            Status: 0,
            Enabled: true,
            Versions: [],
            CreatedUtc: '2022-06-22T17:20:10.488266+00:00',
            ModifiedUtc: '2022-06-22T17:20:10.488266+00:00',
            Id: '86de7545-eb9b-45d2-9507-8863e36dcd45',
          },
        ]),
      );
    },
  ),

  rest.get('http://localhost/user/romulo', (req, res, ctx) => {
    return res(ctx.delay(200), ctx.json({ name: 'romulo' }));
  }),
];
