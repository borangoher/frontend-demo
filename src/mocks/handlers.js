import { rest } from "msw";

export const handlers = [
  rest.post("/login", async (req, res, ctx) => {
    await req.json();
    return res(
      ctx.delay(100), //simulate API response delay
      ctx.status(200)
    );
  }),
];
