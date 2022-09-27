FROM node:16.14-alpine
WORKDIR /app-backend 
COPY . .
RUN apk update && apk add bash
RUN npm install
COPY . .
CMD ["npx", "ts-node", "./src/server.ts"]
EXPOSE 3001

