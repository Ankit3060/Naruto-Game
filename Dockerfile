FROM nginx:alpine

# Copy your web app files to the appropriate directory in the container
COPY . /usr/share/nginx/html

# Expose port 80 to the host
EXPOSE 80

# Start NGINX when the container starts
CMD ["nginx", "-g", "daemon off;"]

