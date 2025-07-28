
# Build backend
FROM node:20 AS backend
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend .

# Build frontend
FROM node:20 AS frontend
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/public ./public
COPY frontend/src ./src
RUN npm run build

# Final image
FROM node:20-slim
WORKDIR /app

# Copy backend
COPY --from=backend /app/backend ./backend
# Copy frontend build
COPY --from=frontend /app/frontend/build ./frontend/build

# Install serve for static frontend
RUN npm install -g serve

# Expose backend and frontend ports
EXPOSE 5000
EXPOSE 3000

# Start both backend and serve frontend
CMD ["sh", "-c", "cd backend && npm start & serve -s ../frontend/build -l 3000"]
