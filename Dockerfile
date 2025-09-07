# Base image
FROM nginx:alpine

# Copy all frontend code to nginx html folder
COPY . /usr/share/nginx/html

# Expose port 80 internally
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
