# base image
FROM node:16-alpine

# Create and change to the app directory.
WORKDIR /usr/app
ARG NEXT_PUBLIC_RECAPTCHA_SITE_KEY
ARG NEXT_PUBLIC_APP_NAME

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY . .

# Set ENV Variables
ENV NEXT_PUBLIC_RECAPTCHA_SITE_KEY=${NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
ENV NEXT_PUBLIC_APP_NAME=${NEXT_PUBLIC_APP_NAME}
# Install production dependencies.
RUN yarn install --frozen-lockfile


# Copy local code to the container image.

RUN yarn build

# Run the web service on container startup.
CMD [ "yarn", "start" ]
