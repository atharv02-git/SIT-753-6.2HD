# Starting from a Node.js base image.
FROM node:16-alpine

# Setting the working directory inside the container
WORKDIR /app

# Copying only package.json and package-lock.json for dependency installation
COPY package*.json ./

# Installing dependencies
RUN npm install

# Now copying the rest of my app's source code
COPY . .

# Exposing the port, my application will run on
EXPOSE 3000

# Specifying the command to run when the container starts
CMD ["npm", "start"]
