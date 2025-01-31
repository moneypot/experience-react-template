# Example Dockerfile that runs via Vite in development
# but as a static site via nginx in production
# on port 4004
FROM node:23-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# This only runs in production mode
FROM base AS production-build
COPY .env.production .env.local
RUN npm run build

# Production: Create minimal container that just contains the static site + nginx
FROM nginx:alpine AS production
WORKDIR /app
COPY --from=production-build /app/dist .
RUN echo 'server {                                          \
    listen 4004;                                            \
    root /app;                                              \
                                                            \
    # Cache only assets with Vite-style hash in filename    \
    location ~ "^/assets/.*-[A-Za-z0-9_-]{8,}\.(js|css)$" { \
        expires 1y;                                         \
    }                                                       \
                                                            \
    # Never cache any path that might serve index.html      \
    location / {                                            \
        add_header Cache-Control "no-store" always;         \
        try_files $uri $uri/ /index.html =404;              \
    }                                                       \
}' > /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]

# Development: Run vite dev server
FROM base AS development
CMD [ "npx", "vite", "--port", "4004", "--host", "--mode", "development" ]

