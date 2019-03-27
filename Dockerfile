FROM node:latest

WORKDIR /usr/src/app/

COPY package.json ./

RUN yarn

COPY src ./src
COPY app.js ./

EXPOSE 3000
CMD ["yarn", "start"]
