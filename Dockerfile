FROM node:20-alpine

COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 3000
VOLUME /app/web/images/product
CMD [ "node", "app.js" ]