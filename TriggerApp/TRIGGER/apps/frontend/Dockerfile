# Frontend Dockerfile (Next.js)
FROM node:18-alpine

WORKDIR /app/apps/frontend

# Copy frontend dependencies
COPY apps/frontend/package*.json ./

# Install dependencies
RUN npm ci

# Copy frontend source
COPY apps/frontend/ .

# Build
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
