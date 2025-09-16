# # Use Node.js for building
# FROM node:20 AS build

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .
# RUN npm run build

# # Use Nginx to serve the React app
# FROM nginx:alpine
# COPY --from=build /app/dist /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80

FROM node:20 AS build

WORKDIR /app


COPY package*.json ./
RUN npm install


COPY . .
RUN npm run build

FROM nginx:alpine


COPY --from=build /app/dist /usr/share/nginx/html


COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]
