import { rest } from "msw";

export const handlers = [
  rest.post("/login", async (req, res, ctx) => {
    return res(
      ctx.delay(1000), //simulate API response delay
      ctx.status(200)
    );
  }),
];
