import { rest } from 'msw';

export const handlers = [
  rest.get('https://localhost:3030/scoops', (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Chocolate', imagepath: '/images/chocolate.png' },
        { name: 'Vanilla', imagepath: '/images/vanilla.png' },
      ])
    );
  }),
];
