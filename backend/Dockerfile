FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 5005

CMD npx prisma migrate dev --name init && node ./src/server.js