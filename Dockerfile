FROM node:22-slim AS base

RUN apt-get update && apt-get install -y wget ca-certificates && rm -rf /var/lib/apt/lists/*

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# User requested installation method
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -

WORKDIR /app

# Development stage
FROM base AS dev
EXPOSE 4321
CMD ["pnpm", "dev", "--host"]

# Build stage
FROM base AS build
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm run build

# Production stage
FROM base AS prod
COPY --from=build /app/dist /app/dist
