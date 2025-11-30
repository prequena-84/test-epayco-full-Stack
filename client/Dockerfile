# Base stage con dependencias comunes
FROM node:22.21.1-slim AS base
WORKDIR /app
COPY package*.json ./
COPY . .

# Stage de Desarrollo
FROM base AS development
ENV NODE_ENV=development
RUN npm install
COPY .env.development .env
EXPOSE 3000 
CMD ["npx", "next", "dev"]

# Stage de builder para producción
FROM node:22.21.1 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=optional
COPY tsconfig.json ./
COPY src ./src
COPY public ./public
COPY .env.production .env
RUN npm run build

# Stage final de producción
FROM node:22.21.1 AS production
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.env ./.env
EXPOSE 8000
CMD ["npm", "start"]