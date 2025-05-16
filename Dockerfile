# Step 1: Build Stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy only the files needed to install dependencies
COPY package*.json ./

# Install only production dependencies
RUN npm ci --force

# Copy full source code
COPY . .

# Build the Next.js app
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]