import { rest } from "msw";

export const handlers = [
  rest.post("/login", async (req, res, ctx) => {
    const userData = await req.json();

    if (userData.username === "invalid") {
      return res(
        ctx.delay(1000), //simulate API response delay
        ctx.status(400)
      );
    } else {
      return res(
        ctx.delay(1000), //simulate API response delay
        ctx.status(200)
      );
    }
  }),
];
