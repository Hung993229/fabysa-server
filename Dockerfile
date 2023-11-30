FROM node:14-alpine

RUN mkdir -p /my-app/otbn-server

WORKDIR /my-app/otbn-server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "production"]
