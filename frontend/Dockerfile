# Stage 1: Build the application
FROM node:18-alpine as builder

WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application with development server
FROM node:18-alpine as development

WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package*.json ./

# Install dependencies (including devDependencies)
RUN npm install

# Copy all files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the app with hot reloading
CMD ["npm", "start"]
