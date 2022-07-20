FROM registry.access.redhat.com/ubi8/nodejs-16-minimal:1 AS base

COPY package.json /opt/app-root/src/package.json
COPY app.js /opt/app-root/src/app.js
COPY utils.js /opt/app-root/src/utils.js
COPY server /opt/app-root/src/server
COPY public /opt/app-root/src/public
WORKDIR /opt/app-root/src
RUN npm install

FROM base as app

ENV NODE_ENV production
ENV PORT 8080
EXPOSE 8080

# Define command to run the application when the container starts
CMD ["node", "app.js"]