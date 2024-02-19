import { publicProcedure, router } from './trpc';

export const appRouter = router({
    hello: publicProcedure.query(() => {
        return 'Hello from hono and trpc and bun';
    }),
});
