FROM node:18.16 AS base

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

RUN npm run build
CMD ["npm", "start"]
