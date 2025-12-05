# ---- 1. Base image ----
FROM node:20-alpine AS base

WORKDIR /app

# ---- 2. Install dependencies separately (faster builds) ----
FROM base AS deps

COPY package.json package-lock.json* ./
RUN npm install

# ---- 3. Build the Next.js app ----
FROM base AS builder

# Disable Next.js linting rules during build
ENV NEXT_DISABLE_ESLINT=true

# copy installed modules and entire app source
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# ---- 4. Production image ----
FROM base AS runner

ENV NODE_ENV=production

COPY --from=builder /app /app

CMD ["npm", "start"]
