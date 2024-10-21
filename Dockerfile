FROM node:latest
WORKDIR /app
RUN npm i -g nodemon
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["npm","start"]
