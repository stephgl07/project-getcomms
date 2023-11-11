# Use the official Node.js 14 image.
# https://hub.docker.com/_/node
FROM node:18

# Create and change to the app directory.
WORKDIR /usr/src/app

# Set the environment to production
ENV NODE_ENV=production

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY Fulltimeforce.GetComms.UI/package*.json ./

# Install dependencies.
RUN npm install

# Copy local code to the container image.
COPY Fulltimeforce.GetComms.UI/ .

# Build the Next.js application.
RUN npm run build

# Run the web service on container startup.
CMD [ "npm", "start" ]
