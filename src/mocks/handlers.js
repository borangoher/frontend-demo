import { rest } from "msw";

export const handlers = [
  rest.post("http://localhost:8080/login", async (req, res, ctx) => {
    console.log(req);

    return res(
      ctx.delay(1000), //simulate API response delay
      ctx.status(200)
    );
  }),
];
