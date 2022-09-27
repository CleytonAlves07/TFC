FROM node:16.14-alpine
WORKDIR /app-frontend
COPY . .
RUN apk update && apk add bash
RUN npm install
COPY . .
CMD ["npm", "start"]
EXPOSE 3000
