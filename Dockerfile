# base image
FROM node:16-alpine

# Create and change to the app directory.
WORKDIR /usr/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY . .

# Install production dependencies.
RUN yarn install --frozen-lockfile

# Copy local code to the container image.

RUN yarn build

# Run the web service on container startup.
CMD [ "yarn", "start" ]
