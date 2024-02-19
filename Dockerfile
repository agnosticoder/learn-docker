FROM oven/bun:latest AS base

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["bun", "run", "./src/index.ts"] 