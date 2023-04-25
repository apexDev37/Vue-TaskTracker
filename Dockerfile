# use node alpine as base image
FROM node:16.20-alpine

# cache layer unless dependencies change
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install

COPY . .
EXPOSE 8080

# add permission to allow script to execute
RUN chmod +x ./scripts/launch-app-alpine.sh

CMD ["./scripts/launch-app-alpine.sh"]
