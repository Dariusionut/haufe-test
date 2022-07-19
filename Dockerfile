FROM node:16.15.0

WORKDIR /haufe-test

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 5000
CMD [ "npm","start" ]
