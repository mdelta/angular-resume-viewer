# Build
FROM node:18 as build
WORKDIR /app
COPY ./ /app

RUN npm install
RUN npm run build

# Runtime
FROM nginx:latest

# Copy the build output
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80