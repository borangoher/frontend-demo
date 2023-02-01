import { rest } from "msw";

export const handlers = [
  rest.post("http://localhost:8080/login", async (req, res, ctx) => {
    console.log(req);
    await new Promise((r) => setTimeout(r, 1000)); //simulate API response delay
    return res(ctx.status(200));
  }),
];
