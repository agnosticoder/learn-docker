import { Hono } from 'hono';
import { cors } from 'hono/cors'
import { trpcServer } from '@hono/trpc-server';
import { appRouter } from '../src/router';
import { serve } from 'bun';

const app = new Hono();

export default app.use(
    '/trpc/*',
    cors({
        origin: '*',
    }),
    trpcServer({ router: appRouter })
);

const server = serve({port: process.env.PORT || 3001, fetch: app.fetch});

console.log('Server running at', `http://localhost:${server.port}/trpc/hello`);

export type AppRouter = typeof appRouter;
