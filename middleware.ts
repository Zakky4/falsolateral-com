import { match } from "assert";
import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware";

export const middleware = createNextAuthMiddleware();

export const config = {
    matcher: ["/(.*)"],
};
