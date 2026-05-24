# Backend Dockerfile (NestJS)
FROM node:18-alpine

WORKDIR /app/apps/backend

# Copy backend dependencies
COPY apps/backend/package*.json ./

# Install dependencies
RUN npm ci

# Copy backend source
COPY apps/backend/ .

# Build
RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]
